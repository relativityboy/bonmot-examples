define(['person/person.js'], function(Person) {

  return {
    start:function() {
      //new Person doesn't need to be set to a global variable, but it's easier for you to poke around that way.
      person = new Person.View({
        el:document.getElementById('example'),
        model:new Person.Model({
          firstName:"Molly",
          lastName:"Ringwald",
        })
      })
    }
  }
});
