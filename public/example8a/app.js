define(['./person/person.js'], function(Person) {
  return {
    start:function() {
      /**
       * Everything here is global, just in case you want to play in the console.
       */

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
        }
      ];

      /**
       * Person data. This will be turned into a Person.Model instance.
       *
       * A difference from the previous examples is that we've moved addressData into the Person.Model data.
       * When you look at the Person.Model declaration, you'll see it will be turned into an Address.Collection
       *
       * This allows us to clearly illustrate the model/view hierarchy.
       *
       * @type {{firstName: string, lastName: string, addressList: *[]}}
       */
      personData = {
        firstName:"Jennifer",
        lastName:"Lawerence",
        addressList:addressData
      }

      /**
       * The root view.. Person.View.
       * The model is available at .model, and child-views are accessible at .childView
       */
      person = new Person.View({
        el:document.getElementById('example'),
        model:new Person.Model(personData)
      });
    }
  }
});