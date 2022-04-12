const path = require('path');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
const corsOptions = {
  origin: 'https://luke-connex-task.herokuapp.com',
};

const baseEndpoint = 'https://xkcd.com';

app.use(express.static(path.resolve(__dirname, '../app/build')));

/**
 * Retrieves the latest comic
 */
app.get('/api/latest', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET',
  };
  const response = await fetch(`${baseEndpoint}/info.0.json`, fetchOptions);

  if (response.status === 200) {
    const jsonResponse = await response.json();

    res.status(200).send(jsonResponse);
  } else {
    res.status(404).send({ error: 'Unable to find comic' });
  }
});

/**
 * Retrieves a random comic
 */
app.get('/api/random', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET',
  };
  const id = Math.floor(Math.random() * (2605 - 1 + 1)) + 1;
  const response = await fetch(`${baseEndpoint}/${id}/info.0.json`, fetchOptions);

  if (response.status === 200) {
    const jsonResponse = await response.json();

    res.status(200).send(jsonResponse);
  } else {
    res.status(404).send({ error: 'Unable to find comic' });
  }
});

/**
 * Retrieves a comic based on ID passed in the URL
 */
app.get('/api/:id', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET',
  };

  const response = await fetch(
    `${baseEndpoint}/${req.params.id}/info.0.json`,
    fetchOptions
  );

  if (response.status === 200) {
    const jsonResponse = await response.json();

    res.status(200).send(jsonResponse);
  } else {
    res.status(404).send({ error: 'Unable to find comic' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/app', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
