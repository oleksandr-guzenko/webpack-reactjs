var path = require("path");
var express = require("express");
var cors = require('cors')
var DIST_DIR = path.join(__dirname, "build");
var PORT = 3000;
var app = express();
app.use(cors())
app.options('*', cors()) // include before other routes
//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(process.env.PORT || 5100, () => {
  console.log('http://localhost:5100')
});