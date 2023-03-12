const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/auth_routes");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb://Ahsan:4iRgfJwCvCoEPekn@ac-ddorca6-shard-00-00.nrzyvdu.mongodb.net:27017,ac-ddorca6-shard-00-01.nrzyvdu.mongodb.net:27017,ac-ddorca6-shard-00-02.nrzyvdu.mongodb.net:27017/?ssl=true&replicaSet=atlas-au53ul-shard-0&authSource=admin&retryWrites=true",
  { useNewUrlParser: true }
);

app.use("/api", userRoutes);

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
