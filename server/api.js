const express = require('express');
const router = express.Router();

const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;

const API = 'https://jsonplaceholder.typicode.com';
const mongodbURL = 'mongodb://financedb:hIRN7WahaqPSja0d@cluster0-shard-00-00-dxyij.mongodb.net:27017,cluster0-shard-00-01-dxyij.mongodb.net:27017,cluster0-shard-00-02-dxyij.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
router.get('/', (req, res) => {
	res.send('api works');
	      MongoClient.connect(mongodbURL, function(err, db) {
              console.log("Connected Database ----------------  Rock Started");
              db.close();
});
});

router.get('/posts', (req, res) => {
	console.log(req)
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
 
var uri = "mongodb://financedb:hIRN7WahaqPSja0d@cluster0-shard-00-00-dxyij.mongodb.net:27017,cluster0-shard-00-01-dxyij.mongodb.net:27017,cluster0-shard-00-02-dxyij.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";



  axios.get(`${API}/posts`)
    .then(posts => {

      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });

});

module.exports = router;


