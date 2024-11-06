const { Router } = require("express");
const openMessageController = require("../controllers/openMessageController");

const newMessageController = require("../controllers/newMessageController.js");
const messageRouter = Router();
messageRouter.get("/:messageId", openMessageController);
messageRouter.get("/", (req, res) => {
  res.render("form");
});
messageRouter.post("/", newMessageController);

module.exports = messageRouter;
