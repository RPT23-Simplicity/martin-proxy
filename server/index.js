const app = require('./routes')

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

module.exports = app;
