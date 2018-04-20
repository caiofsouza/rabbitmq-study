const app = require('express')()
const rabbitmqConnection = require('./connection')
const createChannel = require('./channel')
const consumer = require('./consumer')
const producer = require('./producer')

module.exports = (async () => {
  const connection = await rabbitmqConnection()
  let channel = await createChannel(connection)
  consumer(channel)
  app.get('/producer/:message', (req, res) => {
    console.log(req.params.message)
    producer(channel, req.params.message)
    res.end()
  })
  app.get('/', (req, res) => {
    console.log('to na barra')
    res.send('Ok')
  })
  app.listen(3000, () => {
    console.log('Nois ta online')
  })
})()
