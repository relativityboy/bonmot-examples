define(['person/person.js'], function(Person) {
  return {
    start:function() {
      //new Person doesn't need to be set to a global variable, but it's easier for you to poke around that way.
      persons = [
        new Person.Model(Person.personJSON[0]),
        new Person.Model(Person.personJSON[1])
      ];

      personBroken = new Person.View({
        el:document.getElementById('example-broken'),
        model:persons[0],
        persons:persons
      });

      persons = [
        new Person.Model(Person.personJSON[0]),
        new Person.Model(Person.personJSON[1])
      ];

      personFixed = new Person.ViewFixed({
        el:document.getElementById('example-fixed'),
        model:persons[0],
        persons:persons
      });
    }
  }
});