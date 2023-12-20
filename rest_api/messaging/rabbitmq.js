const amqplib = require('amqplib')
/**
 * Create connection to RabbitMQ server
 * @returns {Promise<import('amqplib').Channel>}
 */
const createChannel = async() => {
    const queueName = 'my_data'
    try {
        const amqpServer = 'amqp://localhost:5672'
        const connection = await amqplib.connect(amqpServer)
        const channel = await connection.createChannel()
        await channel.assertQueue(queueName, { durable: true })
        return channel
    } catch (error) {
        throw error
    }
}

module.exports = { createChannel }