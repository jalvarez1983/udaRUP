define(['marionette',
        'templates',
        'rup/rup.menu'], function(Marionette, App){

  var MenuMixtoView = Marionette.LayoutView.extend({
    template: App.Templates.demoResponsive.app.components.menu.menuMixtoTemplate

  });

  return MenuMixtoView;
});
