const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/post', (req, res) => {
    res.send('Got a GET request at /post')
  })


app.post('/post', function (req, res) {
    res.send('Got a POST request at /post');
  });

app.put('/post', function (req, res) {
    res.send('Got a PUT request at /post');
});

app.delete('/post', function (req, res) {
    res.send('Got a DELETE request at /post');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})