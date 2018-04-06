const socket = io()


$('form').submit(() => {
  socket.emit('chat message', $('#m').val())
  $('#m').val('')
  return false
})

function getUserName() => {
  return false
}

window.onload = getUserName()
