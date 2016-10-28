define(
  ['/libs/watch_model.js', 'person/person.js'],
  function(WatchModel, Person) {

  return {
    start:function() {
      /**
       * Everything here is global, just in case you want to play in the console.
       */

      personData = {
  "firstName": "Jennifer",
  "lastName": "Lawerence",
  "addressList": [
    {
      "name": "Home",
      "street": "300,000 Park Ave",
      "city": "New York",
      "state": "NY",
      "country": "USA"
    },
    {
      "name": "Other Home",
      "street": "5939 Portland Ave",
      "city": "Minnesnapolis",
      "state": "MN",
      "country": "USA"
    },
    {
      "name": "FunHouse",
      "street": "2120 Fulton St",
      "city": "Brewtown",
      "state": "Queens",
      "country": "NZ"
    }
  ]
};

      //new Person doesn't need to be set to a global variable, but it's easier for you to poke around that way.
      person = new Person.View({
        el:document.getElementById('example'),
        model:personData
      });

      //WatchModel is a helper that exposes the Person.Model's current state in the right-hand ui panel.
      //For the purposes of these examples, you can ignore everything related to it.
      watchModel = new WatchModel.View({el:document.getElementById('modelJSON'), view:person});
    }
  }
});