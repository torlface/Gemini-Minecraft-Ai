const fs = require('fs');
const gemini = require('./gemini');
const memoryPath = './memory.json';

let memory = {};

function loadMemory() {
  if (fs.existsSync(memoryPath)) {
    memory = JSON.parse(fs.readFileSync(memoryPath));
  }
}

function saveMemory() {
  fs.writeFileSync(memoryPath, JSON.stringify(memory, null, 2));
}

async function think(bot, user, input) {
  memory[user] = memory[user] || [];
  memory[user].push(input);
  if (memory[user].length > 10) memory[user].shift();

  const context = memory[user].join('\n');
  const reply = await gemini.ask(`Context:\n${context}\n\nUser: ${input}`);
  memory[user].push(reply);
  saveMemory();
  return reply;
}

module.exports = { think, loadMemory };
