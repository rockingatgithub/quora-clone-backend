const mongoose = require('mongoose');

const url = "mongodb+srv://nazimnn459:JM1tu8xJ8O7ThXVm@cluster0.kurvfdu.mongodb.net/?retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };