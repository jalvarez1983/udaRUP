<a name="module_rup_list"></a>

## rup_list
Tiene como objetivo presentar un contenido donde conceptos relacionados pueden agruparse (ej. secciones) de manera que el usuario puede mostrar u ocultar información sin perder el contexto del contenido principal.

**Summary**: Componente RUP List.  
**See**: El componente no está basado en el ningún plugin .  
**Example**  
```js
$("#idListJson").rup_list({
			type: $.rup.list.JSON,
			data: json
		});
```

* [rup_list](#module_rup_list)
    * [~inicio()](#module_rup_list..inicio)
    * [~JSON](#module_rup_list..JSON) : <code>string</code>
    * [~AJAX](#module_rup_list..AJAX) : <code>string</code>

<a name="module_rup_list..inicio"></a>

### rup_list~inicio()
Inicializa las listas.

**Kind**: inner method of [<code>rup_list</code>](#module_rup_list)  
<a name="module_rup_list..JSON"></a>

### rup_list~JSON : <code>string</code>
Lista creada a partir de un texto.

**Kind**: inner typedef of [<code>rup_list</code>](#module_rup_list)  
**Example**  
```js
$.rup.list.JSON
```
<a name="module_rup_list..AJAX"></a>

### rup_list~AJAX : <code>string</code>
Lista creado a partir de la respuesta de una petición AJAX.

**Kind**: inner typedef of [<code>rup_list</code>](#module_rup_list)  
**Example**  
```js
$.rup.list.AJAX
```
