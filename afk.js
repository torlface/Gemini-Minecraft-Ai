module.exports = {
  start(bot) {
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 60000); // Anti-AFK every 60s
  }
};
