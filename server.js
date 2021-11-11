const mysql = require("mysql");


const db = mysql.createConnection({
        host:"sql6.freesqldatabase.com",
        user:"sql6450306",
        password:"8sxx5bzMcv",
        database:"sql6450306",
        port:3306,
    })

    db.connect((err) => {
        if (err){
            throw err;
        }
        console.log("mysql connected")

    })
