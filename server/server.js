const express = require('express')
const http = require('http')
const users = require('./users')()
const port = 3000

const app = express()
app.use(express.json());
const server = http.createServer(app)

app.get('/api/users/', (request, response) => {
  // отдаем первоначальные данные
  response.status(200).json(users.getAll())
})

app.post('/api/users/', (request, response) => {  
  const res = users.add(request.body)
  response.status(200).json(res)
})

app.post('/api/users/:user_id', (request, response) => {
  const res = users.edit(request.params.user_id, request.body)
  response.status(200).json(res)
})

app.post('/api/users/remove/:user_id', (request, response) => {
  const res = users.remove(request.params.user_id)
  response.status(200).json(res)
})

server.listen(port, () => {
  console.log(`Server has been started on port ${port}...`)
})