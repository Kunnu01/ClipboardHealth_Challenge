const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv/config');
const data = require('./data');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Clipboard' });
});

app.get('/api/getAllDetails', (req, res) => {
  res.send(data.ShiftList);
});

app.get('/api/getDetailsOfWorker/:id', (req, res) => {
  const { id } = req.params;
  if (!id) {
    res
      .status(400)
      .send('Bad Request');
  }

  const worker = data.ShiftList.find(worker => worker._id == id);
  res
  .status(200)
  .send(worker);
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
