const amqp = require("amqplib");
const queue = "my_data";

(async () => {
  try {
    const connection = await amqp.connect("amqp://localhost:5672")
    const channel = await connection.createChannel()

    process.once("SIGINT", async () => {
        console.log(" [*] Closing connection...");
      await channel.close()
      await connection.close()
    });

    await channel.assertQueue(queue, { durable: true })
    await channel.consume(
      queue,
      (message) => {
        if (message) {
          console.log(
            " [x] Received '%s'",
            JSON.parse(message.content.toString())
          );
        }
      },
      { noAck: true }
    );

    console.log(" [*] Waiting for messages. To exit press CTRL+C");
  } catch (err) {
    console.warn(err);
  }
})();