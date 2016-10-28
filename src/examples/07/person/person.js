define([
    'jquery',
    'hbs!./person',
    'hbs!./person_fixed',
    'bon-mot',
    '../address/address',
    'css!./person'
  ],
  function(
    $,
    tplPerson,
    tplPersonFixed,
    BonMot,
    Address
  ) {
    var _export = {};

    _export.Model = BonMot.Model.extend({
      _set:{
        address:function(address) {
          return (address.constructor === Address.Model)? address : new Address.Model(address)
        }
      }
    });

    _export.Collection = BonMot.Collection.extend({
      model:_export.Model
    });

    _export.View = BonMot.View.extend({
      Model:_export.Model,
      hbs:tplPerson,
      unique:'person-app',
      uiBindings:[
        'name',
        {
          find:'.w-atr-displayName',
          observe:'name'
        }
      ],
      atrViews:{
        address:Address.View
      },
      initialize:function(options) {
        this.persons = options.persons
        this.exampleAddresses = new Address.Collection(options.addressData);
        this.persons.setOnAll('address', this.exampleAddresses.at(0))
      },

      /**
       * This is where the switching happens.
       * A control handler for the buttons. It binds to all of them. On click it sets
       * the Address.Model at exampleAddress[data-index] on the Person.Model (this.model)
       */
      ctrlSetAddress:function(evt) {
        this.model.set('address', this.exampleAddresses.at($(evt.target).data('index')));
      },
      ctrlSetPerson:function(evt) {
        this.setModel(this.persons.at($(evt.target).data('index')));
      }
    });

    _export.ViewFixed = _export.View.extend({
      hbs:tplPersonFixed,
      unique:'person-fixed',
      classSuffix:'person'
    });

    return _export;
});
