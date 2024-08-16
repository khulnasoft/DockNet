#!/usr/bin/env python

import re
from pathlib import Path
from setuptools import find_packages, setup

NAME = "docknet"
DESCRIPTION = "Python package template."
URL = "https://github.com/khulnasoft/docknet"
EMAIL = "info@khulnasoft.com"
AUTHOR = "KhulnaSoft Ltd."
LICENSE = "MIT"
REQUIRES_PYTHON = ">=3.8"
VERSION = None  # Only set version if you want to override the version in _about.py

# Paths
PWD = Path(__file__).parent.resolve()

# Import the README and use it as the long-description.
long_description = (PWD / "README.md").read_text(encoding="utf-8")

# Extract the version from the _about.py module.
if not VERSION:
    about_file = PWD / "src" / NAME / "_about.py"
    if about_file.exists():
        VERSION = re.findall(r'__version__\s*=\s*"(.+)"', about_file.read_text())[0]
    else:
        VERSION = "0.0.0"

# Where the magic happens:
setup(
    name=NAME,
    version=VERSION,
    description=DESCRIPTION,
    long_description=long_description,
    long_description_content_type="text/markdown",
    author=AUTHOR,
    author_email=EMAIL,
    python_requires=REQUIRES_PYTHON,
    url=URL,
    license=LICENSE,
    packages=find_packages(where="src", exclude=("tests", "test", "examples", "docs")),
    package_dir={"": "src"} if (PWD / "src").exists() else {},
    py_modules=[path.stem for path in (PWD / "src").glob("*.py")],
    zip_safe=False,
    install_requires=[
        "typer",
        "pydantic[dotenv,email]",
        "fastapi==0.75.2",
        "requests",
        "loguru",
        "filetype",
        "addict",
        "requests-toolbelt",
        "shortuuid",
        "python-slugify",
    ],
    extras_require={
        "server": [
            "kubernetes",
            "docker",
            "fastapi-utils",
            "python-multipart",
            "streaming_form_data",
            "psutil",
            "uvicorn",
            "sqlalchemy>=1.4.0",
            "psycopg2",
            "minio",
            "azure-storage-blob",
            "python-jose[cryptography]",
            "passlib[bcrypt]",
            "json-merge-patch",
            "jsonpath-ng",
            "jinja2",
            "requests_oauthlib",
            "faker",
        ],
        "dev": [
            "setuptools",
            "wheel",
            "twine",
            "flake8",
            "pytest",
            "pytest-mock",
            "pytest-cov",
            "mypy",
            "types-python-slugify",
            "types-requests",
            "types-cachetools",
            "black",
            "pydocstyle",
            "isort",
            "docsai",
            "locust",
            "pyinstrument",
            "pytest-profiling",
            "devtools[pygments]",
            "ipykernel",
            "ml-buildkit",
            "requests",
        ],
    },
    setup_requires=["wheel"],
    include_package_data=True,
    package_data={"docknet.api.endpoints": ["templates/*"]},
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "Intended Audience :: Science/Research",
        "Intended Audience :: Information Technology",
        "License :: OSI Approved :: MIT License",
        "Natural Language :: English",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3 :: Only",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: Implementation :: PyPy",
        "Programming Language :: Python :: Implementation :: CPython",
        "Topic :: Software Development",
        "Topic :: Software Development :: Libraries",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "Topic :: Scientific/Engineering :: Artificial Intelligence",
        "Topic :: Scientific/Engineering",
        "Topic :: Utilities",
    ],
    project_urls={
        "Changelog": f"{URL}/releases",
        "Issue Tracker": f"{URL}/issues",
        "Documentation": f"{URL}#documentation",
        "Source": URL,
    },
    entry_points={"console_scripts": [f"{NAME}={NAME}._cli:cli"]},
    keywords=["python", "template", "fastapi", "pydantic"],
)
