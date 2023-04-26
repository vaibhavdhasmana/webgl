const sqlite3 = require("sqlite3").verbose();
const debug = true;
var fs = require("fs");

const file = "users.db";
const exists = fs.existsSync(file);
const db = new sqlite3.Database(file);
let lastInsertedID;
db.serialize(function () {
  if (!exists) {
    db.run(
      "CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,pledge TEXT,email TEXT,mobile TEXT,uuid TEXT,image_path TEXT,image_name,send_whatspp TEXT,send_email TEXT,certificate_path TEXT,certificate_name, certificate_cloud_path TEXT,time TEXT,notification_status TEXT,email_response NUMBER DEFAULT 0, whatsapp_response NUMBER DEFAULT 0,t TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
    );
  }
});

module.exports = { db };
