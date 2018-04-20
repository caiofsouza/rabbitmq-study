const { QUEUE_NAME } = require('./constants')

const createChannel = (connection) => {
  return new Promise((resolve, reject) => {
    connection.createChannel((err, channel) => {
      if (err || !channel) {
        return reject(err)
      }
      channel.assertQueue(QUEUE_NAME, { durable: false })
      return resolve(channel)
    })
  })
}

module.exports = createChannel
