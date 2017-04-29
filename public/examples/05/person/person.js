define([
    'hbs!./person',
    'backbone',
    'bon-mot',
    '../address/address',
    'css!./person'
  ],
  function(
    tplPerson,
    Backbone,
    BonMot,
    Address
  ) {
    var _export = {};

    /**
     * A utility class to make our example a little simpler. Our newAddress function checks to see if the item is
     * already an Address.Model before deciding if it's going to create a new one.
     *
     * @param address
     *
    var newAddress = function(address) {
      return (address.constructor === Address.Model)? address : new Address.Model(address)
    };*/

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
        address:Address.Model
      }
    });
    console.log('1 Address.Model is an instance of Backbone.Model', Address.Model.prototype instanceof Backbone.Model);
    B = Backbone.Model;
    _export.View = BonMot.View.extend({
      Model:_export.Model,
      tpl:tplPerson,
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
