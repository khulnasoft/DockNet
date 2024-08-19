"""Root build.py for the Docknet project. Will also execute the build.py in sub-directories."""

import os

from ml_buildkit import build_utils
from ml_buildkit.helpers import build_docker, build_python, openapi_utils
from ml_buildkit.helpers.openapi_utils import OpenApiGenerator

HERE = os.path.abspath(os.path.dirname(__file__))

WEBAPP_COMPONENT = "webapp"
DOCS_COMPONENT = "docs"
PYTHON_LIB_COMPONENT = "backend"
DOCKER_IMAGE_PREFIX = "khulnasoft"
COMPONENT_NAME = "docknet"


def main(args: dict) -> None:
    """Execute all component builds."""

    # set script path as working dir
    os.chdir(HERE)

    version = args.get(build_utils.FLAG_VERSION)

    # Build python lib
    build_utils.build(PYTHON_LIB_COMPONENT, args)

    # TODO: create FastAPI OpenAPI definition
    # TODO: copy OpenAPI definition to Web App
    if args.get(build_utils.FLAG_MAKE):
        # Duplicate api docs into the mkdocs documentation
        build_utils.duplicate_folder(
            f"./{PYTHON_LIB_COMPONENT}/docs/", f"./{DOCS_COMPONENT}/docs/api-docs/"
        )
        openapi_generator = OpenApiGenerator.OPENAPI_CODEGEN
        # Use new version of openapi generator
        openapi_generator.download_url = "https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/6.0.0/openapi-generator-cli-6.0.0.jar"
        output_path = openapi_utils.generate_openapi_js_client(
            openapi_spec_file=f"./{PYTHON_LIB_COMPONENT}/openapi-spec.json",
            additional_flags="--global-property skipFormModel=false",
            client_generator=openapi_generator
        )
        is_successful = False
        if output_path:
            is_successful = build_utils.copy(
                src_path=f"{output_path}/src",
                target_path="./js-client/",
                preserve_target=True,
            )

        if not is_successful:
            build_utils.log("Error in generating the JavaScript client library")
            # build_utils.exit_process(1)


    # Build mkdocs documentation
    # build_utils.build(DOCS_COMPONENT, args)

if __name__ == "__main__":
    args = build_utils.parse_arguments()

    if args.get(build_utils.FLAG_RELEASE):
        # Run main without release to see whether everthing can be built and all tests run through
        # Run args without release to see whether everthing can be built and all tests run through
        args = dict(args)
        args[build_utils.FLAG_RELEASE] = False
        main(args)
        # Run main again without building and testing the components again
        args = {
            **args,
            build_utils.FLAG_MAKE: False,
            build_utils.FLAG_CHECK: False,
            build_utils.FLAG_TEST: False,
            build_utils.FLAG_RELEASE: True,
            build_utils.FLAG_FORCE: True,
        }
    main(args)
