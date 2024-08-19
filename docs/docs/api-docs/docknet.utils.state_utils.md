<!-- markdownlint-disable -->

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/utils/state_utils.py#L0"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

# <kbd>module</kbd> `docknet.utils.state_utils`
Utilities for managing global and request state for an FastAPI app. 



---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/utils/state_utils.py#L18"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>class</kbd> `State`




<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/utils/state_utils.py#L21"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `__init__`

```python
__init__(state: State)
```

Initializes the state. 


---

#### <kbd>property</kbd> namespaces





---

#### <kbd>property</kbd> shared_namespace







---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/utils/state_utils.py#L68"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `close`

```python
close() → None
```

Closes state. 

This will execute all registered close callback functions. This method is automatically called. Manual calls should only be done under careful consideration. 

---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/utils/state_utils.py#L61"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `register_close_callback`

```python
register_close_callback(callback_func: Callable) → None
```

Registers a close callback. 

All registered callback functions are called when the state is closed. 


---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/utils/state_utils.py#L80"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>class</kbd> `GlobalState`
Holds a global state of one app instance (process). 

The global state is created once for every app instance/process and can be used to store and share objects globally (between all components), such as DB connections, HTTP clients, or data caches. 

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/utils/state_utils.py#L90"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `__init__`

```python
__init__(state: State)
```

Initializes the global state. 



**Args:**
 
 - <b>`state`</b>:  The state object from the app (`app.state`) 


---

#### <kbd>property</kbd> namespaces





---

#### <kbd>property</kbd> settings

Returns the global platform settings. 

---

#### <kbd>property</kbd> shared_namespace







---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/utils/state_utils.py#L68"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `close`

```python
close() → None
```

Closes state. 

This will execute all registered close callback functions. This method is automatically called. Manual calls should only be done under careful consideration. 

---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/utils/state_utils.py#L61"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `register_close_callback`

```python
register_close_callback(callback_func: Callable) → None
```

Registers a close callback. 

All registered callback functions are called when the state is closed. 


---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/utils/state_utils.py#L112"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

## <kbd>class</kbd> `RequestState`
Holds a state for a single request. 

The request state is created once for every request and can be used to store and share objects between all components, such as DB connections, HTTP clients, or data caches. 

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/utils/state_utils.py#L120"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `__init__`

```python
__init__(state: State)
```

Initializes the request state. 



**Args:**
 
 - <b>`state`</b>:  The state object from the request (`request.state`) 


---

#### <kbd>property</kbd> authorized_access

Returns the authorized access info for the request. 

---

#### <kbd>property</kbd> authorized_subject

Convenience method to check for authorized_access being not None and returns the authorized_subject. 

---

#### <kbd>property</kbd> namespaces





---

#### <kbd>property</kbd> shared_namespace







---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/utils/state_utils.py#L68"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `close`

```python
close() → None
```

Closes state. 

This will execute all registered close callback functions. This method is automatically called. Manual calls should only be done under careful consideration. 

---

<a href="https://github.com/khulnasoft/docknet/blob/main/backend/src/docknet/utils/state_utils.py#L61"><img align="right" style="float:right;" src="https://img.shields.io/badge/-source-cccccc?style=flat-square"></a>

### <kbd>method</kbd> `register_close_callback`

```python
register_close_callback(callback_func: Callable) → None
```

Registers a close callback. 

All registered callback functions are called when the state is closed. 




---

_This file was automatically generated via [docsai](https://github.com/khulnasoft/docsai)._
