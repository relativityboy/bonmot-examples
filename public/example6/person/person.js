define([
    'jquery',
    'hbs!./person',
    'bon-mot',
    '../address/address',
    'css!./person'
  ],
  function(
    $,
    tplPerson,
    BonMot,
    Address
  ) {
    var _export = {};

    /**
     * A utility class to make our example a little simpler. Our newAddress function checks to see if the item is
     * already an Address.Model before deciding if it's going to create a new one.
     *
     * @param address
     */
    var newAddress = function(address) {
      return (address.constructor === Address.Model)? address : new Address.Model(address)
    };

    /**
     * Person.Model -
     * We're using DWBackbone's _set.<attrName> schema to instantiate new Address.Model
     * for address when
     */
    _export.Model = BonMot.Model.extend({
      _set:{
        address:newAddress
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
      },
      /**
       * We're using initialize as a quick way to create example data.
       * You can see we're making fully fledged Address.Models.
       * We do this for persistence of any edits you make.
       * Since 'newAddress' is called when the models are switched,
       * if these were just JSON, a new model would be created every
       * time you clicked a button, and any previous edits would be lost.
       */
      initialize:function() {
        this.exampleAddresses = [
          this.model.get('address'),
          new Address.Model({
            street:"5939 Portland Ave",
            city:"Minnesnapolis",
            state:"MN",
            country:"USA"
          }),
          new Address.Model({
            street:"2120 Fulton St",
            city:"Brewtown",
            state:"Queens",
            country:"NZ"
          }),
          new Address.Model({}),
        ]
      },

      /**
       * This is where the switching happens.
       * A control handler for the buttons. It binds to all of them. On click it sets
       * the Address.Model at exampleAddress[data-index] on the Person.Model (this.model)
       */
      ctrlSetAddress:function(evt) {
        this.model.set('address', this.exampleAddresses[$(evt.target).data('index')]);
      }
    });

    return _export;
});
