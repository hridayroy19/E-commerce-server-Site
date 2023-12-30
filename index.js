const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;


// maidware 

app.use(cors());
app.use(express.json());

console.log( process.env.BD_pass);




const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0.jg43ilw.mongodb.net/?retryWrites=true&w=majority1`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);









app.get("/", ( req, res)=>{
    res.send("e_commarce sit ")
})

app.listen( port, ()=>{
    console.log(` e_commarce site is running ${port}`);
})