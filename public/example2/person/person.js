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
    _export.Model = BonMot.Model.extend({
      initialize:function() {
        this.on('change:firstName change:lastName', this.setDisplayName, this);
        this.setDisplayName();
      },
      setDisplayName:function() {
        this.set('displayName', this.get('lastName') + ', ' + this.get('firstName'));
      }
    });

    _export.View = BonMot.View.extend({
      Model:_export.Model,
      hbs:tplPerson,
      uiBindings:['firstName','lastName', 'displayName'],

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