const app = require("./app");
const mongoose = require("mongoose");

const PORT = 5000;
const DB_URL = "mongodb://127.0.0.1:27017/campus_events";

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error("DB Connection Error:", err));
