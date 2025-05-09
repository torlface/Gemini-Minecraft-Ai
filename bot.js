const mineflayer = require('mineflayer');
const brain = require('./brain');
const tasks = require('./tasks');
const afk = require('./afk');
const config = require('./config.json');

const bot = mineflayer.createBot({
  host: config.host,
  port: config.port,
  username: config.username
});

bot.once('spawn', () => {
  console.log(`[BOT] Spawned as ${bot.username}`);
  brain.loadMemory();
  afk.start(bot);
});

bot.on('chat', async (username, message) => {
  if (username === bot.username) return;
  const response = await brain.think(bot, username, message);
  if (response) bot.chat(response);
  await tasks.run(bot, message);
});
