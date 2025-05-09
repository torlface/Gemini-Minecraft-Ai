const { GoogleGenerativeAI } = require('@google/generative-ai');
const config = require('./config.json');
const genAI = new GoogleGenerativeAI(config.gemini_key);

async function ask(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

module.exports = { ask };
