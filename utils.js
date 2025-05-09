module.exports = {
  delay(ms) {
    return new Promise(res => setTimeout(res, ms));
  },
  log(message) {
    console.log(`[UTILS] ${message}`);
  }
};
