var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = `CREATE TABLE customers 
    (
        id int NOT NULL AUTO_INCREMENT,
        name VARCHAR(255), 
        address VARCHAR(255),
        PRIMARY KEY (id)
    )`;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});