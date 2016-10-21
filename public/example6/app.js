define(['person/person.js'], function(Person) {
  return {
    start:function() {

      personData = {
        firstName:"Molly",
        lastName:"Ringwald",
      };

      addressData = [
        {
          street:"300,000 Park Ave",
          city:"New York",
          state:"NY",
          country:"USA"
        },
        {
          street:"5939 Portland Ave",
          city:"Minnesnapolis",
          state:"MN",
          country:"USA"
        },
        {
          street:"2120 Fulton St",
          city:"Brewtown",
          state:"Queens",
          country:"NZ"
        },
        {}
      ];

      person = new Person.View({
        el:document.getElementById('example'),
        model:new Person.Model(personData),
        addressData:addressData
      })
    }
  }
});
