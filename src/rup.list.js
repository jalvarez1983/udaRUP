/*!
 * Copyright 2014 E.J.I.E., S.A.
 *
 * Licencia con arreglo a la EUPL, Versión 1.1 exclusivamente (la «Licencia»);
 * Solo podrá usarse esta obra si se respeta la Licencia.
 * Puede obtenerse una copia de la Licencia en
 *
 *      http://ec.europa.eu/idabc/eupl.html
 *
 * Salvo cuando lo exija la legislación aplicable o se acuerde por escrito,
 * el programa distribuido con arreglo a la Licencia se distribuye «TAL CUAL»,
 * SIN GARANTÍAS NI CONDICIONES DE NINGÚN TIPO, ni expresas ni implícitas.
 * Véase la Licencia en el idioma concreto que rige los permisos y limitaciones
 * que establece la Licencia.
 */

/*global define */
/*global jQuery */


/**
 * Tiene como objetivo presentar un contenido donde conceptos relacionados pueden agruparse (ej. secciones) de manera que el usuario puede mostrar u ocultar información sin perder el contexto del contenido principal.
 *
 * @summary Componente RUP List.
 * @module rup_list
 * @see El componente no está basado en el ningún plugin .
 * @example
		$("#idListJson").rup_list({
			type: $.rup.list.JSON,
			data: json
		});
 */
( function( factory ) {
	if ( typeof define === 'function' && define.amd ) {

		// AMD. Register as an anonymous module.
		define( ['jquery','./templates','handlebars','./rup.base'], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $, Rup, Handlebars ) {
	var settingsInit;

	//****************************************************************************************************************
	// DEFINICIÓN BASE DEL PATRÓN (definición de la variable privada que contendrá los métodos y la función de jQuery)
	//****************************************************************************************************************
	
	$.extend($.rup, {
		/**
     *  Lista creada a partir de un texto.
     * @typedef {string} module:rup_list~JSON
     * @example
     * $.rup.list.JSON
     */
		/**
     *  Lista creado a partir de la respuesta de una petición AJAX.
     * @typedef {string} module:rup_list~AJAX
     * @example
     * $.rup.list.AJAX
     */

		list: {
			JSON: 'jsonList',
			AJAX: 'ajaxList'
		}
	});

	var rup_list = {};

	//Se configura el arranque de UDA para que alberge el nuevo patrón
	$.extend($.rup.iniRup, $.rup.rupSelectorObjectConstructor('rup_list', rup_list));

	//*******************************
	// DEFINICIÓN DE MÉTODOS PÚBLICOS
	//*******************************
	// 
	// $("#idLista).rup_list("foo");
	// $("#idLista).rup_list("getNumElems");
	// $("#idLista).rup_list("setElem", 2, {});
	$.fn.rup_list('extend',{
		/**
		    * Inicializa las listas.
		    *
		    */
		inicio: function(paramJson) {
			var $self = this;
			var settings = settingsInit,
				json = $.extend(true, {}, paramJson);

			if(settings.type !== undefined && settings.type !== null){
				if($.rup.list.JSON === settings.type){
					$self._jsonLoad(settings,json);
				}else if($.rup.list.AJAX === settings.type){
					$self._ajaxLoad(settings);
				}else{
					$.rup_messages("msgAlert", {						
						message: "Tipo de lista Incompatible"
					});
				}
			}else{
				$.rup_messages("msgAlert", {						
					message: "El tipo de lista es obligatorio"
				});
			}

			return $self;
		},
		setElem: function(id, obj,json) {
			return $self;
		}
	});

	//*******************************
	// DEFINICIÓN DE MÉTODOS PRIVADOS
	//*******************************

	$.fn.rup_list('extend',{
		_bar: function() {
			return this;
		},
		/**
	     * Realiza la carga del contenido de la lista a partir de una petición AJAX.
	     *
	     * @function  _ajaxLoad
	     * @private
	     * @param {object} settings - Propiedades de configuración del componente.
	     */
			_ajaxLoad: function (settings) {
				var $self = this;
				//Si el tipo de dialogo es AJAX y no se establece url se muestra un error y se devuelve el control
				if (!settings.url || settings.url === null || settings.url === '') {
					$.rup.msgAlert({
						title: $.rup.i18nParse($.rup.i18n.base, 'rup_global.error'),
						message: $.rup.i18nParse($.rup.i18n.base, 'rup_dialog.noURL')
					});
					return false;
				}

				//Peticion ajax para obtener los datos a mostrar
				$.rup_ajax({
					type: 'GET',
					contentType : 'application/json',
					dataType: 'json',
					url: settings.url,
					success: function(datosController) {

						settings.data = {data:datosController};
						$self._jsonLoad(settings);
					},
					error: function (){
						alert('Se ha producido un error al recuperar los datos del servidor');
					}
				});
			},
			/**
		     * Realiza la carga del contenido de la lista a partir de un Json.
		     *
		     * @function  _jsonLoad
		     * @private
		     * @param {object} settings - Propiedades de configuración del componente.
		     */
				_jsonLoad: function (settings) {
					var $self = this;
					$self.text("");
					//Si el tipo de dialogo es AJAX y no se establece url se muestra un error y se devuelve el control
					if (!settings.data || settings.data === null || settings.data === '') {
						$.rup_messages("msgAlert", {						
							message: "Json incorrecto"
						});
						return false;
					}

		          	if (settings.template){
		            	settings._template = Handlebars.compile(settings.template);  
		            }
		          	var templateData = settings.data;
		          	var html = settings._template(templateData);
		          	$self.append(html);
				}
	});

	//*******************************
	// MÉTODO DE INICIALIZACION
	//*******************************
	// <ul id="idLista">...</ul>
	// $("#idLista).rup_list({
	//  	template:"zspna
	//});
	$.fn.rup_list('extend', {
		_init : function(args){
			
			Rup.Templates;
			Handlebars;
			settingsInit = $.extend({}, $.fn.rup_list.defaults, args[0]);

			
			var $self = this;
			 if($.rup.list.AJAX === settingsInit.type){
					$self._ajaxLoad(settingsInit);
			 }else if($.rup.list.JSON === settingsInit.type){
				 	$self._jsonLoad(settingsInit);
			 }
		
			return $self;

		}
	});

	//******************************************************
	// DEFINICIÓN DE LA CONFIGURACION POR DEFECTO DEL PATRON
	//******************************************************
	$.fn.rup_list.defaults = {
		ajaxCache: true,
		_template: Rup.Templates.rup.list.base,
		template: null,
		data: null,
		type: null,
		url: null
	};

}));