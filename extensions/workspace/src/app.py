from typing import Any
from fastapi import Depends, FastAPI, status
from fastapi.responses import HTMLResponse

from docknet.schema import ServiceInput
from docknet.schema.project import PROJECT_ID_PARAM
from docknet.api.dependencies import (
    get_api_token,
    ComponentManager,
    get_component_manager,
)
from docknet.clients import DeploymentManagerClient
from docknet.clients.shared import BaseUrlSession
from docknet.schema.exceptions import CREATE_RESOURCE_RESPONSES, UnauthenticatedError

import os

DOCKNET_API_ENDPOINT = os.getenv("DOCKNET_API_ENDPOINT", None)
if not DOCKNET_API_ENDPOINT:
    raise RuntimeError("DOCKNET_API_ENDPOINT must be set")

SELF_ACCESS_URL = os.getenv("DOCKNET_BASE_URL", "")

SELF_DEPLOYMENT_NAME = os.getenv("DOCKNET_DEPLOYMENT_NAME", "")

LABEL_EXTENSION_DEPLOYMENT_TYPE = "ctxy.workspaceExtension.deploymentType"

api = FastAPI()


@api.post(
    "/projects/{project_id}/workspace",
    summary="Deploy a workspace.",
    status_code=status.HTTP_200_OK,
    responses={**CREATE_RESOURCE_RESPONSES},
)
def deploy_workspace(
    service: ServiceInput,
    project_id: str = PROJECT_ID_PARAM,
    token: str = Depends(get_api_token),
) -> Any:
    """Deploy a workspace container as a Docknet service."""

    if not token:
        raise UnauthenticatedError("No token provided.")

    if service.parameters is None:
        service.parameters = {}

    if service.metadata is None:
        service.metadata = {}

    # {env.DOCKNET_SERVICE_URL} will be replaced by Docknet
    service.parameters["WORKSPACE_BASE_URL"] = "{env.DOCKNET_SERVICE_URL}"
    # TODO: In Docknet, the labels are prefixed with the System Namespace (e.g. 'ctxy') -> should extension / user labels be prefixed as well? Problem of prefixing might be that the extension cannot find it's own labels
    service.metadata[LABEL_EXTENSION_DEPLOYMENT_TYPE] = "workspace"
    service.endpoints = ["8080b"]
    if not service.compute:
        service.compute = {}

    if "max_memory" not in service.compute or service.compute["max_memory"] < 500:
        service.compute["max_memory"] = 500

    session = BaseUrlSession(base_url=DOCKNET_API_ENDPOINT)
    session.headers = {"Authorization": f"Bearer {token}"}
    return DeploymentManagerClient(session).deploy_service(
        project_id=project_id, service=service
    )


# TODO: how to handle the project_id placeholder?
@api.get(
    "/projects/{project_id}/workspace",
    summary="Get the launcher UI",
    status_code=status.HTTP_200_OK,
    responses={**CREATE_RESOURCE_RESPONSES},
    response_class=HTMLResponse,
)
def get_ui(
    project_id: str = PROJECT_ID_PARAM,
    component_manager: ComponentManager = Depends(get_component_manager),
    token: str = Depends(get_api_token),
) -> Any:
    """Redirects to the existing user workspaces or """

    # Check the token and get the authorized user
    # component_manager.verify_access(token)
    session = BaseUrlSession(base_url=DOCKNET_API_ENDPOINT)
    session.headers = {"Authorization": f"Bearer {token}"}
    services = DeploymentManagerClient(session).list_services(project_id=project_id)

    html_body = ""
    for service in services:
        if (
            LABEL_EXTENSION_DEPLOYMENT_TYPE in service.metadata
            and service.metadata[LABEL_EXTENSION_DEPLOYMENT_TYPE] == "workspace"
        ):
            # TODO: do a redirect response that redirects to the workspace (service_access url, e.g. /projects/<project_id>/services/<service_id>/...)?
            # TODO: instead of a redirect, it can return a list of workspaces (with a button to access the workspace directly, although this would be similar to the services screen then...)
            html_body = "The Workspace is already launched. Go to the services screen to access it."

    if not html_body:
        html_body = (
            "<button onclick='checkAndLaunchWorkspace()'>Launch Workspace</button>"
        )
    # if the service does not exist, send a launch screen to the use
    # TODO: rather use a nice web app here that can also be extended with resource settings etc. like JupyterHub
    # TODO: replace the url in fetch('...') with the BASE_URL env variable value
    html_content = f"""
    <html>
        <head>
            <title>Workspace Launcher</title>
            <script>
                function checkAndLaunchWorkspace() {{
                    const serviceInput = JSON.stringify({{ "container_image":"khulnasoft/ml-workspace-minimal","display_name":"test-workspace-" + new Date().getTime(),"endpoints":["8080"],"parameters":{{}} }});
                    fetch('{SELF_ACCESS_URL}/projects/{project_id}/services/{SELF_DEPLOYMENT_NAME}/access/8080/projects/{project_id}/workspace', {{ method: 'POST', body: serviceInput }});
                }}
            </script>
        </head>
        <body>
            {html_body}
        </body>
    </html>
    """

    return HTMLResponse(content=html_content, status_code=200)
