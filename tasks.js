module.exports = {
  async run(bot, message) {
    if (message.includes('follow')) {
      const player = bot.players[Object.keys(bot.players)[0]];
      if (player) bot.followPlayer(player.username);
    } else if (message.includes('mine')) {
      bot.chat('Starting to mine...');
      // Implement mining logic
    } else if (message.includes('build')) {
      bot.chat('Building structure...');
      // Implement building logic
    } else if (message.includes('fight')) {
      bot.chat('Entering combat mode...');
      // Implement fight logic
    }
  }
};
