<!-- markdownlint-disable -->

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L0"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

# <kbd>module</kbd> `docknet.managers.file.azure_blob`





---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L27"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `get_container_name`

```python
get_container_name(project_id: str, prefix: str) → str
```






---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L31"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>function</kbd> `create_azure_blob_client`

```python
create_azure_blob_client(settings: Settings) → BlobServiceClient
```






---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L56"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>class</kbd> `AzureBlobFileManager`




<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L70"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `__init__`

```python
__init__(component_manager: ComponentOperations)
```

Initializes the Azure Blob File Manager. 



**Args:**
 
 - <b>`component_manager`</b>:  Instance of the component manager that grants access to the other managers. 


---

#### <kbd>property</kbd> json_db_manager







---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L350"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `delete_file`

```python
delete_file(
    project_id: str,
    file_key: str,
    version: Optional[str] = None,
    keep_latest_version: bool = False
) → None
```

Delete a file. 

If a specific file `version` is provided, only this one will be deleted. If no `version` is provided and `keep_latest_version` is True, all but the latest version will be deleted. Otherwise, all existing versions will be removed. 



**Args:**
 
 - <b>`project_id`</b> (str):  Project ID associated with the file. 
 - <b>`file_key`</b> (str):  Key of the file. 
 - <b>`version`</b> (Optional[str], optional):  File version. Defaults to None. 
 - <b>`keep_latest_version`</b> (bool, optional):  [description]. Defaults to False. 

---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L402"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `delete_files`

```python
delete_files(project_id: str) → None
```

Delete all files and storage resources related to a project. 



**Args:**
 
 - <b>`project_id`</b> (str):  Project ID associated with the files. 

---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L316"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `download_file`

```python
download_file(
    project_id: str,
    file_key: str,
    version: Optional[str] = None
) → Tuple[Iterator[bytes], int]
```

Download a file. 

Either the latest version will be returned or the specified one. 



**Args:**
 
 - <b>`project_id`</b> (str):  Project ID associated with the file. 
 - <b>`file_key`</b> (str):  Key of the file. 
 - <b>`version`</b> (Optional[str], optional):  File version. Defaults to None. 



**Raises:**
 
 - <b>`ResourceNotFoundError`</b>:  If file does not exist. 



**Yields:**
 
 - <b>`Iterator[bytes]`</b>:  [description] 

---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L436"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `execute_file_action`

```python
execute_file_action(
    project_id: str,
    file_key: str,
    action_id: str,
    version: Optional[str] = None
) → Response
```





---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L139"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `get_file_metadata`

```python
get_file_metadata(
    project_id: str,
    file_key: str,
    version: Optional[str] = None
) → File
```

Get file metadata of a single file. 

If no version is provided then the latest version will be returned. 



**Args:**
 
 - <b>`project_id`</b> (str):  Project ID associated with the file. 
 - <b>`file_key`</b> (str):  Key of the file. 
 - <b>`version`</b> (Optional[str], optional):  File version. Defaults to None. 



**Raises:**
 
 - <b>`ResourceNotFoundError`</b>:  If no file is found. 



**Returns:**
 
 - <b>`File`</b>:  The file metadata object. 

---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L431"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `list_file_actions`

```python
list_file_actions(
    project_id: str,
    file_key: str,
    version: Optional[str] = None
) → List[ResourceAction]
```





---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L89"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `list_files`

```python
list_files(
    project_id: str,
    recursive: bool = True,
    include_versions: bool = False,
    prefix: Optional[str] = None
) → List[File]
```

List files. 



**Args:**
 
 - <b>`project_id`</b> (str):  Project ID associated with the file. 
 - <b>`recursive`</b> (bool, optional):  List recursively as directory structure emulation. Defaults to True. 
 - <b>`include_versions`</b> (bool, optional):  Flag to control whether include object versions. Defaults to False. 
 - <b>`prefix`</b> (Optional[str], optional):  File key starts with prefix. Defaults to None. 



**Returns:**
 
 - <b>`List[File]`</b>:  List of file metadata objects. 

---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L178"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `update_file_metadata`

```python
update_file_metadata(
    file: FileInput,
    project_id: str,
    file_key: str,
    version: Optional[str] = None
) → File
```

Update the file metadata. 

If no version is provided then the latest version will be returned. Moreover, additional custom metadata provied via `file.metadata` will executed with json merge patch strategy in case a specific version is updated. But if a new version was created it is treated as a new file and hence the metadata from older versions will not be considered. If a version should inherit the metadata from a previous version, then this data needs to be set explictly. 



**Args:**
 
 - <b>`file`</b> (FileInput):  The file metadata object. All unset attributes or None values will be ignored. 
 - <b>`project_id`</b> (str):  Project ID associated with the file. 
 - <b>`file_key`</b> (str):  Key of the file. 
 - <b>`version`</b> (Optional[str], optional):  File version. Defaults to None. 



**Raises:**
 
 - <b>`ClientValueError`</b>:  If the provided keys do not match. 



**Returns:**
 
 - <b>`File`</b>:  The updated file metadata object. 

---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/managers/file/azure_blob.py#L241"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `upload_file`

```python
upload_file(
    project_id: str,
    file_key: str,
    file_stream: IO[bytes],
    metadata: Optional[Dict[str, str]] = None,
    content_type: Optional[str] = None
) → File
```

Upload a file. 



**Args:**
 
 - <b>`project_id`</b> (str):  Project ID associated with the file. 
 - <b>`file_key`</b> (str):  Key of the file. 
 - <b>`file_stream`</b> (IO[bytes]):  The actual file stream object. 
 - <b>`metadata`</b> (Dict, optional):  Additional key-value pairs of file meta data 
 - <b>`content_type`</b> (str, optional):  The mime-type of the file. Defaults to "application/octet-stream". 



**Raises:**
 
 - <b>`ServerBaseError`</b>:  If the upload failed. 



**Returns:**
 
 - <b>`File`</b>:  The file metadata object of the uploaded file. 




---

_This file was automatically generated via [docsai](https://github.com/khulnasoft/docsai)._
