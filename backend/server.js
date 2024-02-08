const app = require("./app");
const mongoose = require("mongoose");

const DB =
  "mongodb+srv://mostafa3132004:DuXaxkJrP8RGuXR2@cluster0.tyo186d.mongodb.net/novelnest";
const port = 2003;

mongoose.set("strictQuery", false);
mongoose
  .connect(DB)
  .then(() => {
    console.log("Database connected successfully!");
    app.listen(port, () => {
      console.log(`listening to port ${port}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
