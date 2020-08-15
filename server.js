const express = require('express')
const users = require('./data')

const server = express()

server.get('/data', (req, res) => {
  res.send(users)
})

server.get('/data/:username', (req, res) => {
  const user = req.params.username
  const result = users.find(info => info.firstName === user)
  res.send(result) 
})

server.listen(4000, () => console.log('Server ready at https://localhost:4000'))