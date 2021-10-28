var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "newpos",
    password: "newpos123",
    database: "nodejs"
});

//db.connect(function(err) {
   // if (err) throw err;
   // console.log("Connected!");
//});

module.exports = db;
