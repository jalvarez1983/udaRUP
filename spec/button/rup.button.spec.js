import 'jquery';
import 'handlebars';
import 'jasmine-jquery';
import 'rup.button';

describe('TEST Button', () => {
    describe('Creacion', () => {
        var $button;
        beforeAll(() => {
            var html= '<button id="exampleButton"></button>';
            $('body').append(html);

            $button = $('#exampleButton');
            $button.rup_button({});
        });
    });
    describe('Métodos públicos', () => {
        describe('Método defaults', () => {
            expect($button.rup_button('defaults')).toBeDefined();
        });
    });
});