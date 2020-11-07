const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors({
  origin: '*',
}));

app.options('*', cors());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/shop/:productId/:styleId', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
});

app.get('/api/reviews/:productID', (req, res) => {
  const productID = req.params.productID;

  return axios.get(`http://18.219.146.205:3003/api/reviews/${productID}`, {
    params: {
      productID: productID
    }
  })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.get('/inventory/:productID/:styleID', (req, res) => {
  const productID = req.params.productID;
  const styleID = req.params.styleID;

  return axios.get(`http://3.137.143.152:3004/inventory/${productID}/${styleID}`, {
    params: {
      productID: productID,
      styleID: styleID
    }
  })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.get('/photos/:productid', (req, res) => {
  const productid = req.params.productid;

  return axios.get(`http://13.56.180.105/photos/${productid}`, {
    params: {
      productid: productID,
    }
  })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.get('/photos/:productid/:styleid', (req, res) => {
  const productid = req.params.productid;
  const styleid = req.params.styleid;

  return axios.get(`http://13.56.180.105/photos/${productid}/${styleid}`, {
    params: {
      productID: productid,
      styleID: styleid
    }
  })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = app;
