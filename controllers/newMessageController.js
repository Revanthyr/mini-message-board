const { messages } = require("../routes/indexRouter");
const Crypto = require("node:crypto");
function newMessageController(req, res) {
  const name = req.body.name;
  const message = req.body.message;
  messages.push({
    text: message,
    user: name,
    added: new Date(),
    id: Crypto.randomUUID(),
  });
  console.log("MESSAGE ADDED");

  console.log(messages);
  res.redirect("/");
  res.end();
}
module.exports = newMessageController;
