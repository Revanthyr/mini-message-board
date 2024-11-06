const { indexRouter } = require("./routes/indexRouter.js");
const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
const path = require("node:path");
const messageRouter = require("./routes/messageRouter.js");
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", messageRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`my express app -listening on PORT ${PORT}`);
});
