const express = require("express");
const { port } = require("./config/serverConfig");
const body_parser = require("body-parser");
const { urlencoded } = require("body-parser");
const ConnectDatabase = require("./config/db");
const ApiRouter = require("./config/serverConfig");

// const db = require("./models/index");
const ApiRoutes = require("./Routes/index");

const StartServer = async () => {
  // create Express Object
  const app = express();

  // app.use("/api", ApiRouter);
  ConnectDatabase();

  app.use(body_parser.json());
  app.use(body_parser.urlencoded({ extended: true }));

  // start the server
  app.listen(port, () => {
    console.log(`Server started on Port:${port}`);
  });
};

StartServer();
