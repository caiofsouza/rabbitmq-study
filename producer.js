const { QUEUE_NAME } = require('./constants')

const producer = async (channel, msg) => {
  channel.sendToQueue(QUEUE_NAME, Buffer.from(msg))
}

module.exports = producer
