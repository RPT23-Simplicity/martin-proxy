const express = require('express');
const path = require('path')
const items = require('../database-mysql');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*',
}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/shop/:productId/:styleId', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
});

app.listen(4002, function() {
  console.log('listening on port 4002!');
});

