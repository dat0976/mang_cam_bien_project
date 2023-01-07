// // -----------1.  TAO DATABASE -----------------
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: ""
// });
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE ok888", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// -----------2.  TAO TABLE -----------------
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ok555"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE sensors_tt (id int(10) auto_increment primary key,cb_id int(10),nhiet_do int(10),do_am int(10),gas int(10),anh_sang int(10),bui int(10), time_in TIMESTAMP)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
// -----------3. INSERT DU LIEU (VONG LAP) -----------------
// for (var i=0;i<100;i++){
//   var mysql = require('mysql');
//   var con = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "ok888"
//     });
//   con.connect(function(err) {
//         if (err) throw err;
//         console.log("Connected!");
//         var sql = "INSERT INTO sensors_tt (cb_id,nhiet_do,do_am,gas,anh_sang,bui) VALUES(FLOOR(RAND()*(5)+1),FLOOR(RAND()*(40-0+1)+0),FLOOR(RAND()*(100-0+1)+0),FLOOR(RAND()*(1000-0+1)+0),FLOOR(RAND()),FLOOR(RAND()*(100-0+1)+0))";
//         con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted");
//         });
//   });
// }
