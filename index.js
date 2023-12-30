const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const corsOptions = {
  optionsSuccessStatus: 200, // For legacy browser support
  credentials: true, // This is important.
  origin: "*",
};

dotenv.config();

const connectDB = async () => {
  await mongoose
    .connect(process.env.DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(
      () => {
        console.log("Database is connected");
      },
      (err) => {
        console.log("Can not connect to the database" + err);
      }
    );
};
connectDB();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const imageRoutes = require("./routes/image.routes.js");
app.use("/album", imageRoutes);
const uploadRoutes = require("./routes/upload.routes.js");
app.use("/upload", uploadRoutes);
const alexaRoutes = require("./routes/alexa.routes.js");
app.use("/alexa", alexaRoutes);
app.use("/", (req, res) => {
  res.send("Hello World 2023!");
});

const port = 1506;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
