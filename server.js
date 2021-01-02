var path = require("path");
var express = require("express");
var cors = require('cors')
var app = express();
app.use(cors())
app.options('*', cors()) // include before other routes
//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get("*", function (req, res) {
  res.sendFile(path.join(path.join(__dirname+'/client/build/index.html')));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('http://localhost:3000')
});