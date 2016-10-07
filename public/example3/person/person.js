define([
  'hbs!./person',
  'bon-mot'
  ],
  function(
    tplPerson,
    BonMot
  ) {
    var _export = {};

    /**
     * This model is just simple model with a little attribute update function to make our examples more interesting
     */
    _export.Model = BonMot.Model.extend({});

    _export.View = BonMot.View.extend({
      hbs:tplPerson,
      uiBindings:['firstName','lastName'],
      bindings:{
        '.w-atr-displayLastName':'lastName',
        '.w-atr-displayFirstName':'firstName'
      },

      /**
       * this function will be bound to any element with the class .w-ctrl-toggleEditAddress
       * it will also have a jQuery element match on this.$ctrl.toggleEditAddress
       */
      ctrlToggleEdit:function() {
        this.$elf('.w-editPanel').toggle();
      }
    });

    return _export;
});
