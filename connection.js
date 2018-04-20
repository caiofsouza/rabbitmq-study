const amqp = require('amqplib/callback_api')

const rabbitmqConnection = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      amqp.connect('amqp://rabbitmq', (error, connection) => {
        if (error || !connection) {
          return reject(error)
        }
        resolve(connection)
      })
    }, 7000)
  })
}

module.exports = rabbitmqConnection
