const { App } = require('@slack/bolt');

require("dotenv").config();

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000,
});

// Listens to incoming messages that contain "hello"
app.message(/^(hi|hello|hey).*/, async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `hola compadre <@${message.user}>!`
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