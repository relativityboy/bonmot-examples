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


    _export.personJSON = [
      {
        name:"Happy Golucky",
        address:{
          name:"Home",
          street:"300,000 Park Ave",
          city:"New York",
          state:"NY",
          country:"USA"
        }
      },
      {
        name:"Sad Monkey",
        address:{
          name:"Home",
          street:"300,000 Park Ave",
          city:"New York",
          state:"NY",
          country:"USA"
        }
      }
    ];

    var newAddress = function(address) {
      return (address.constructor === Address.Model)? address : new Address.Model(address)
    };

    _export.Model = BonMot.Model.extend({
      _set:{
        address:newAddress
      }
    });

    _export.View = BonMot.View.extend({
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
      /**
       * We've added 'this.stickit()' at the end of initialize()
       * to make the example a little easier to play with.
       */
      initialize:function() {
        this.exampleAddresses = [
          this.model.get('address'),
          new Address.Model({
            name:"Other Home",
            street:"5939 Portland Ave",
            city:"Minnesnapolis",
            state:"MN",
            country:"USA"
          }),
          new Address.Model({
            name:"FunHouse",
            street:"2120 Fulton St",
            city:"Brewtown",
            state:"Queens",
            country:"NZ"
          }),
          new Address.Model({}),
        ];
      },

      /**
       * This is where the switching happens.
       * A control handler for the buttons. It binds to all of them. On click it sets
       * the Address.Model at exampleAddress[data-index] on the Person.Model (this.model)
       */
      ctrlSetAddress:function(evt) {
        this.model.set('address', this.exampleAddresses[$(evt.target).data('index')]);
      },
      ctrlSetPerson:function(evt) {
        this.setModel(this.options.persons[$(evt.target).data('index')]);
      }
    });

    _export.ViewFixed = _export.View.extend({
      hbs:tplPersonFixed,
      unique:'person-fixed',
      classSuffix:'person'
    });

    return _export;
});
