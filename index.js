const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const axios = require("axios");
const corsOptions = {
  optionsSuccessStatus: 200, // For legacy browser support
  credentials: true, // This is important.
  origin: "*",
};

dotenv.config();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const connectDB = async () => {
//   await mongoose
//     .connect(process.env.DB, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     })
//     .then(
//       () => {
//         console.log("Database is connected");
//       },
//       (err) => {
//         console.log("Can not connect to the database" + err);
//       }
//     );
// };
// connectDB();

const portfolioRoute = require("./services/portfolio/portfolio.routes.js");
app.use("/album", portfolioRoute);
const uploadRoutes = require("./services/portfolio/upload.routes.js");
app.use("/upload", uploadRoutes);
// const alexaRoutes = require("./routes/alexa.routes.js");
// app.use("/alexa", alexaRoutes);

const flashcardRoutes = require("./services/flashcard/flashcard.routes.js");
app.use("/flashcard", flashcardRoutes);

// const macsRoutes = require("./routes/macs.routes.js");
// app.use("/macs", macsRoutes);

const myMoneyRoutes = require("./services/my_money/my_money.routes");
app.use("/my_money/v1", myMoneyRoutes);

app.use("/api/v2/users/me/owned-spaces", async (req, res) => {
  const response = await axios
    .get("https://api.gather.town/api/v2/users/me/owned-spaces", {
      headers: {
        apiKey: `vwd3g0OXXdEDrj9O`,
        "Access-Control-Allow-Origin": "*",
      },
    })
    .catch((error) => {
      res.send(error + "error");
    });
  res.send(response.data);
});

app.use("/api/v2/spaces/:spaceName/maps", async (req, res) => {
  const { spaceName } = req.params;
  try {
    const response = await axios.get(`https://api.gather.town/api/v2/spaces/${spaceName}/maps`, {
      headers: {
        apiKey: `vwd3g0OXXdEDrj9O`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error) + "error");
  }
});


app.use("/", (req, res) => {
  res.send("Hello World 2023!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
