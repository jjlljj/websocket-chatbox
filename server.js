const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', socket => {
  console.log('a user connected')
  socket.on('chat message', msg => {
    io.emit('chat message', msg)
  })

  socket.on('userName', msg => {
    user = msg
    io.emit('new user', `user <${user}> connected`)
  })

  socket.on('disconnect', () => {
    io.emit('disconnect', 'a user has disconnected')
    console.log('user disconnected')
  })
})

http.listen(3000, () => {
  console.log('listening on port:3000')
})
