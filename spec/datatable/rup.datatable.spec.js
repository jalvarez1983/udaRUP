import 'jquery';
import 'jasmine-jquery';
import 'datatable/rup.datatable';
import * as consts from './datatable.html';

var plugins = [{
    name: 'multiselect',
    opts: {
        useplugins: ['multiselection'],
        multiselect: {}
    }
}];

function testDatatable(plugin) {
    describe('Test DataTable ' + plugin.name + ' > ', () => {
        var $datatable;
        beforeEach(() => {
            let opts = {
                "fixedHeader": {
                    "footer": false,
                    "header": true
                },
                "filter": {
                    "id": "example_filter_form",
                    "filterToolbar": "example_filter_toolbar",
                    "collapsableLayerId": "example_filter_fieldset"
                },
                "multiSelect": {
                    "style": "multi"
                },
                "formEdit": {
                    "detailForm": "#example_detail_div",
                    "validate": {
                        "rules": {
                            "nombre": {
                                "required": true
                            },
                            "apellidos": {
                                "required": true
                            },
                            "edad": {
                                "required": true
                            }
                        }
                    },
                    "titleForm": "Modificar registro"
                },
                "buttons": {
                    "activate": true
                },
                "seeker": {
                    "colModel": [{
                        "name": "id",
                        "index": "id",
                        "editable": true,
                        "width": 80,
                        "formoptions": {
                            "rowpos": 1,
                            "colpos": 1
                        }
                    }, {
                        "name": "nombre",
                        "index": "nombre",
                        "editable": true,
                        "formoptions": {
                            "rowpos": 2,
                            "colpos": 1
                        }
                    }, {
                        "name": "apellidos",
                        "index": "apellidos",
                        "editable": true,
                        "formoptions": {
                            "rowpos": 3,
                            "colpos": 1
                        },
                        "classes": "ui-ellipsis"
                    }, {
                        "name": "edad",
                        "index": "edad",
                        "editable": true,
                        "formoptions": {
                            "rowpos": 4,
                            "colpos": 1
                        }
                    }]
                },
                "colReorder": {
                    "fixedColumnsLeft": 1
                }
            };
            $('#content').append(consts.html);
            $('#example').rup_datatable(opts);
        });
        describe('Creacion > ', () => {
            /*it('asd', () => {
                debugger;
                expect('asd').toBe('asd');
            });*/
        });
        describe('Pruebas plugins > ', () => {});
    });
}
testDatatable({
    name: 'prueba'
});