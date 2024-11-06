const { Router } = require("express");
const Crypto = require("node:crypto");
const indexRouter = Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: Crypto.randomUUID(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: Crypto.randomUUID(),
  },
];
indexRouter.get("/", (req, res) => res.render("index", { messages }));

module.exports = { indexRouter, messages };
