const express = require('express');
const router = express.Router();

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

router.get('/', (req, res) => {
	res.send('api works');
		console.log(req)
});

router.get('/posts', (req, res) => {
	console.log(req)
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });

});

module.exports = router;


