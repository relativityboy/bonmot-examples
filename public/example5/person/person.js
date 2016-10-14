define([
    'hbs!./person',
    'bon-mot',
    '../address/address',
    'css!./person'
  ],
  function(
    tplPerson,
    BonMot,
    Address
  ) {
    var _export = {};

    /**
     * Person.Model -
     * We're using DWBackbone's _set.<attrName> schema to instantiate a new Address.Model
     * anytime Model.set('address', {}) is called.
     *
     * Because of how Backbone works, this will also be called when the Person.Model is initially created.
     * **Note that we are NOT explicitly worrying about existing address models here, nor should we have to.
     */
    _export.Model = BonMot.Model.extend({
      _set:{
        address:function(addressJSON) {
          return new Address.Model(addressJSON)
        }
      }
    });


    _export.View = BonMot.View.extend({
      hbs:tplPerson,
      unique:'person-app',
      uiBindings:['firstName','lastName'],
      bindings:{
        '.w-atr-displayLastName':'lastName',
        '.w-atr-displayFirstName':'firstName'
      },
      atrViews:{
        address:Address.View
      }
    });

    return _export;
});
