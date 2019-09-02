# express-mongoose-react-auth

Prerequisites:

Most of you if not all should have MongoDB installed on your local machines.
If you do not and are experiencing issues with MongoDB let me know at the beginning of the lecture or any time in the future and we will figure it out. 

Optional (MongoDB shell) 

Understanding how to use the Mongo shell is not necessary but it can be a helpful tool.
If you have not used it yet and want to try it out search for something like: 
running the mongodb shell on Windows
or
If you feel like giving Linux a chance at the same time, download VirtualBoc and install Ubuntu as a guest OS on your Windows machine.
If you want to try the Mongo shell in one way or another here are some useful commands to run once you have started a terminal running Mongo shell:

show dbs – lists all local databases 

use <your database name> - switches to the database

show collections – this shows all the collections present in the database you switched to by running the previous command above.

db.<name of your collection>.find() Lists the Objects present in the collection specified.

As a first step lets make an Express server communicate with MongoDB.

Clone the repo: 
## 1-express-mongoose-mongo

We will use a package called Mongoose to help us model the data we will use with MongoDB.

For the sake of keeping this first example as simple as possible we have not divided the code, so lets  discuss the code present in server.js

We add the necessary modules to our project including mongoose.

In Mongoose connect function we provide the address for our MongoDB as the first argument, note the name after the / after localhost. The name firsttestbase will be the name of our database.

In order to model our data we define so called schemas, In the schema we specify the fields relevant to this particular model. Both their property-names and the fields type, such as the type String. 
In addition we can also specify a bunch of other useful properties defining the behavior or that specific field. 
In this example we are saying that in addition to the name property being of type String this field is not optional when saving an instance of the model to our DB. In fact setting the required property to true will give us an error if attempting to save an instance where this field is not set. 
We are also stating that the value of the name property needs to be unique. In other words we can not save two instances with the same value for the name property/field. 

Before we can create instances of this model and saving that particular instance to our DB we need to associate the schema with a name for a collection:
const Item = mongoose.model(‘<nameforthecollection>’, itemSchema)

We choose some appropriate name for the collection which will contain all instances of this model created and saved to our DB.

We then create an instance of this model and set some values for its properties.
We run the method save on the instance to save this instance to our MongoDB.
The save method takes a callback where we can optionally log possible errors encountered when attempting to save this instance. 

To enhance our understanding of the concepts database-name, schema, model and collection-name we can experiment a bit in changing their names as well as changing the properties required and unique of the name field in the schema.
Every time we run the server.js file we will be attempting to save a new instance of this model, changing some of these values as suggested above and inspecting the error logged in the terminal will help you understand how its all connected.

## Exercise

Error handling and input validation

We will discuss security in more detail later in this course, a good starting point and something you will need to think about in every application you develop is:

* Input validation
* Error handling
* Logging errors (we typically use some package like: morgan for this)

Start by reading up on the node package: Express-validator and add it to our project as an exercise.
