define(['person/person.js'], function(Person) {
  return {
    start:function() {

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
        el:document.getElementById('example-broken'),
        model:persons.at(0),
        persons:persons,
        addressData:addressData
      });

      persons = new Person.Collection(personData);

      personFixed = new Person.ViewFixed({
        el:document.getElementById('example-fixed'),
        model:persons.at(0),
        persons:persons,
        addressData:addressData
      });
    }
  }
});