const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const helmet = require("helmet"); 

const userRoutes = require("./routes/user");
const profilRoutes = require("./routes/profil");
const articleRoutes = require("./routes/article");
const commentaireRoutes = require("./routes/commentaire");


const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );

  next();
});

app.use (helmet()); 
app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use("/api/profil", profilRoutes);
app.use("/api/article", articleRoutes);
app.use("/api/commentaire", commentaireRoutes);


module.exports = app;