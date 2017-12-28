import 'jquery';
import Handlebars from 'handlebars';
import 'jasmine-jquery';
import 'rup.list';

var customMatchers = {
	toBeExpanded: function(util, customEqualityTesters) {
		return {
			compare: function(actual, expected) {
				var result = {
					pass: true
				};

				result.pass = result.pass && actual.hasClass('ui-accordion-header');
				result.pass = result.pass && actual.hasClass('ui-state-active');
				result.pass = result.pass && (actual.attr('aria-expanded') === 'true');
				// result.pass = result.pass && actual.next(".section").is(":visible");

				return result;
			}
		};
	}
};


describe('RUP List Tests', function(){


	beforeEach(function() {
		jasmine.addMatchers(customMatchers);
	});



	describe('Creación de un list', function(){

		var source, template, $content, $list;

		beforeAll(function(){
			var source = '<h2>Lista</h2>'+
									'<div class="col-md-3">'+
											'<button id="btnList" class="btn btn-block btn-secondary">Lista Json</button>'+
											'button id="btnAjax" class="btn btn-block btn-secondary">Lista Ajax</button>'+
									'</div>'+
											'<p>Permite lanzar una lista a partir de un texto.</p>'+
									'<div class="list-group" id="idListJson">'+
													''+
									'</div>'+
											'<p>Permite lanzar una lista con Ajax.:</p>'+
									'<div class="list-group" id="idListAjax">'+
													''+
									'</div>';

			$('body').append('<div id="content"></div>');

			//template = Handlebars.compile(source);
			$content = $('#content');
			$content.append(source);

			var json = [{"id":621,"usuario":"usuariosssss","nombre":"EEEEasdasd","apellido1":"aaaaaasasa","apellido2":"ehele"},
				{"id":622,"usuario":"hufa","nombre":"names","apellido1":"eee","apellido2":"peli"}];

			//$content.html(template(json));

			$list = $('#idListJson');
			
			$list.rup_list({
				type: $.rup.list.JSON,
				data: json
			});
			$list.rup_list("inicio",json);
		});

		afterAll(function () {
			$content.html('');
		});

		it('debería disponer de los estilos de jQueryUI y RUP' , function(){
			expect($list).toHaveClass('btn-secondary');
		});

		it('debería asignar los estilos correspondientes a las secciones div (list)', function(){
			var $secciones = $list;
			expect($secciones).toHaveClass('list-group');
		});
		
		it('deberia aparecer la lista', function(){
			$('#btnList').trigger('click');
			expect($list.find('ul')).toExist();
		});

		beforeEach(function(){

		});

//		describe('Generar la lista haciendo click', function(){
//			describe('Pulsar en la primer boton', function(){
//				
//			});
//		});

	});
});