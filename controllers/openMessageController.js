const { messages } = require("../routes/indexRouter");
const Crypto = require("node:crypto");
function openMessageController(req, res) {
  console.log("openmessage been called");
  const id = req.params.messageId;
  console.log(id);
  console.log(messages);
  const message = messages.filter((current) => current.id === id)[0];
  console.log(message);
  res.render("message", { message });
}
module.exports = openMessageController;
