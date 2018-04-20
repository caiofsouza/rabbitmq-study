const { QUEUE_NAME } = require('./constants')

module.exports = (channel) => {
  channel.consume(QUEUE_NAME, (message) => {
    console.log(`Recebemos essa mensagem: ${message.content.toString()}`)
  }, { noAck: true })
}
