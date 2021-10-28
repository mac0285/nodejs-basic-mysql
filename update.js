var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    // kita akan mengubah alamat Starbucks
    let sql = `UPDATE customers
               SET address='LEM Lantai 1'
               WHERE id=1`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});