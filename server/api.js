const express = require('express');
const router = express.Router();
const config = require('./config.js')

const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const API = 'https://jsonplaceholder.typicode.com';
const mongodbURL = config.mangoDBURL;

router.get('/', (req, res) => {
	     //  MongoClient.connect(mongodbURL, function(err, db) {
      //         console.log("Connected Database ----------------  Rock Started");
      //         db.close();
      // });
});

router.post('/create', (req, res) => {
           var formdata = req.body;


MongoClient.connect('mongodbURL', function (err, client) {
  if (err) throw err;
  
  var db = client.db('personalfinance-raj');

  db.collection('userFinanceDetails').findOne({}, function (findErr, result) {
    if (findErr) throw findErr;
    console.log(result);
    client.close();
  });
});


//   MongoClient.connect(mongodbURL, (err, client) => {
//     if(err){
//       console.log(err)
//     }
//     if(client){
//       console.log(client.collection);
//      var collectionName = 'userFinanceDetails';
//     var collection = client.collection(collectionName);
//           collection.insertOne(formdata, function(err, res){
//                   if (err) throw err;
//                   console.log(result.name);
//                    client.close();
//            });
//     }

//   // var dbs = client.db('personalfinance-raj');
  
//   //         dbs.collection('userFinanceDetails').insertOne(formdata, function(err, res){
//   //                 if (err) throw err;
//   //                 console.log(result.name);
//   //                  client.close();
//   //          });

// });

});

router.get('/posts', (req, res) => {
	console.log(req);
  axios.get(`${API}/posts`)
    .then(posts => {

      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;


