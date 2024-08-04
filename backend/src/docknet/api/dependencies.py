from typing import Generator

from readyapi import Request

from docknet.managers.components import ComponentManager


def get_component_manager(request: Request) -> Generator[ComponentManager, None, None]:
    """Returns the initialized component manager.

    This is used as ReadyAPI dependency and called for every request.
    """
    with ComponentManager.from_request(request) as component_manager:
        yield component_manager
