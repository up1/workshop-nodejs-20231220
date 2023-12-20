const express = require('express');
const rabbitmq = require('./rabbitmq');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        // Create channel
        const channel = await rabbitmq.createChannel()
        // Send message to queue
        const message = req.body.message
        await channel.sendToQueue('my_data', Buffer.from(JSON.stringify({ message: message })))
        res.json({ message: message })
    } catch (error) {
        let e = new Error('Error sending message');
        e.status = 500;
        e.message = error.message;
        next(e)
    }
})

module.exports = { router };