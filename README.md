#BonMot-Examples - Tutorials by Example

A set of examples for using [BonMot](https://www.npmjs.com/package/bonmot). 
The examples range from simple to complex, and eventually to the very complex.

Try to go through them in-order. There are subtleties in each example that can
make your Javascript experience much more fun as you pick-up on them.
 
While BonMot does not require Node, to install and run the examples, you will. 
Don't worry. It's easy.

##Install:
To take advantage of these tutorials you'll need Node.js on your computer, 
and to have port 3000 available. To use, do the following:

1. Install Node 6.2.1 or greater
1. Clone/download this project
1. Open a shell and cd into the project root directory 
1. Run the command *npm install*
1. When the installation is finished run *node app*
1. Open a browser and go to [http://localhost:3000/index.html](http://localhost:3000/index.html)

##Examples: 

*items with * have not yet been written*

1. Two way data binding basics
1. Control binding basics
1. Reduce code complexity by leveraging BonMot's native binder.
1. Modularized CSS with *.unique*
1. Automagic Child-Views. Nested data. The basics.
1. Child-Views - Swapping Models on the fly
1. Child-Views - Handling nested Models with the same properties.
1. Child-View Collections 1 - Automagic Lists of Views & Models.
1. Child-View Collections 2 - A slightly different approach to a control handler.
1. Child-View Collections 3 - Creating, Deleting & Sorting Child-Views automatically
1. Low cost, complex, live attributes
1. Collections - Built in pagination
1. \*Advanced controls - different events (mouse over, etc)
1. \*GoodBye explicit render - Wiring up clean html
1. \*HTML - How you want it. HBS, Strings, custom functions
1. *with more to come....*

##Ask Questions!
BonMot is born of much experience, but it's also very new!

We're very interested in your feedback. If you want to know how
to do something in BonMot, chances are other people do, too. We may be able to write up 
an example for you and everyone else. Don't hesitate to ask.


Important!!!!!

The atr renderer needs to have it's hbs template compiled at extension time!
Then it gets created and setup by the newChildView on the main View declaration
Need to look into setup and teardown again. The render *always* happens on instantiation!