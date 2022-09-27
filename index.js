const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/topic/id', (req, res) => {
    res.send('Got a GET request at /topic/id')
})

app.get('/topic', (req, res) => {
    res.send('Got a GET request at /topic')
})

app.post('/topic', function (req, res) {
    res.send('Got a POST request at /topic');
});

app.delete('/topic', function (req, res) {
    res.send('Got a DELETE request at /topic');
});

app.get('/user', (req, res) => {
  res.send('Got a GET request at /user')
})

app.post('/user', function (req, res) {
  res.send('Got a POST request at /user');
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})