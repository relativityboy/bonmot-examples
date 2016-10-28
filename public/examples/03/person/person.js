define([
  'hbs!./person',
  'bon-mot'
  ],
  function(
    tplPerson,
    BonMot
  ) {
    var _export = {};

    _export.Model = BonMot.Model.extend({});

    _export.View = BonMot.View.extend({
      Model:_export.Model,
      hbs:tplPerson,
      uiBindings:['firstName','lastName'],

      /**
       * These are stickit native bindings. They're very powerful, but less convenient to use than uiBindings.
       * BonMot will respect these over anything declared in uiBindings.
       */
      bindings:{
        '.w-atr-displayLastName':'lastName',
        '.w-atr-displayFirstName':'firstName'
      },

      ctrlToggleEdit:function() {
        this.$elf('.w-editPanel').toggle();
      }
    });

    return _export;
});
