define(
        ['/libs/watch_model.js', 'person/person.js'],
        function(WatchModel, Person) {

          return {
    start:function() {

      /**
       * Address data. These will be turned into Address.Model instances.
       * @type {*[]}
       */
      addressData = [
        {
          name:"Home",
          street:"300,000 Park Ave",
          city:"New York",
          state:"NY",
          country:"USA"
        },
        {
          name:"Other Home",
          street:"5939 Portland Ave",
          city:"Minnesnapolis",
          state:"MN",
          country:"USA"
        },
        {
          name:"FunHouse",
          street:"2120 Fulton St",
          city:"Brewtown",
          state:"Queens",
          country:"NZ"
        },
        {}
      ];

      personData = [
        {
          name:"Happy Golucky"
        },
        {
          name:"Sad Monkey"
        }
      ];
      persons = new Person.Collection(personData);


      personBroken = new Person.View({
        el:document.getElementById('example'),
        model:persons.at(0),
        persons:persons,
        addressData:addressData
      });

      new WatchModel.View({el:document.getElementById('modelJSON'), view:personBroken});

      //remember, here we're creating a fresh set of models from our data
      persons = new Person.Collection(personData);

      personFixed = new Person.ViewFixed({
        el:document.getElementById('fixed-example'),
        model:persons.at(0),
        persons:persons,
        addressData:addressData
      });

      new WatchModel.View({el:document.getElementById('fixed-modelJSON'), view:personFixed});

    }
  }
});