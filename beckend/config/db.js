const mongoose = require("mongoose");

const DatabaseConnection = async () => {
  const URL = `mongodb://Ahsan:4iRgfJwCvCoEPekn@ac-ddorca6-shard-00-00.nrzyvdu.mongodb.net:27017,ac-ddorca6-shard-00-01.nrzyvdu.mongodb.net:27017,ac-ddorca6-shard-00-02.nrzyvdu.mongodb.net:27017/?ssl=true&replicaSet=atlas-au53ul-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Connection Created");
  } catch (error) {
    console.log("Something went wrong in database Connection");
    throw { error };
  }
};

module.exports = DatabaseConnection;

// Ahsan
// 4iRgfJwCvCoEPekn
