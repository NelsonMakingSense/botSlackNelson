const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: 'xoxb-4404371660787-4429955731153-AhOTvAYO5izySXOQqQsa78vn',
  signingSecret: '7d80cf07af07056c10958cf533dff7bc',
  socketMode: true, // add this
  appToken: 'xapp-1-A04C2E3C1EX-4417413370772-f53a35b9fa92186af30dbe0747865a562246222bd317107758541abad6b5bb91',
  port: process.env.PORT || 3000
});

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Hey there <@${message.user}>!`
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "Click Me"
            },
            action_id: "button_click"
          }
        }
      ],
      text: `Hey there <@${message.user}>!`
    });
  });
  
  (async () => {
    // Start your app
    await app.start();
  
    console.log('⚡️ Bolt app is running!');
  })();