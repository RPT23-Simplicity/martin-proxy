const express = require('express');
const path = require('path')
const cors = require('cors');
const axios = require('axios');

const port = process.env.PORT || 80;

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

  // $.ajax({
  //   url: `http://18.219.146.205:3003/api/reviews/${productID}`,
  //   method: 'GET',
  //   success: (data) => {
  //     res.status(200).send(data);
  //   },
  //   error: (err) => {
  //     res.status(500).send(err);
  //     throw (err);
  //   }
  // });
});

app.listen(port, function() {
  console.log(`listening on ${port}`);
});

