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
      /**
       * this handlebars template will be automatically rendered when the view is instantiated
       */
      hbs:tplPerson,

      /**
       * these model attributes will be respectively bound to .w-atr-firstName , .w-atr-lastName , .w-atr-displayName
       */
      uiBindings:['firstName','lastName', 'displayName'],
    });

    return _export;
});