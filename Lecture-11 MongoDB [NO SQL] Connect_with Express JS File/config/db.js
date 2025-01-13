//mongodb ye syntax itni compalsary likhni he
const mongoose = require('mongoose');//mongoose express and mongodb ko connect karne ke liye
mongoose.connect(`mongodb://localhost/mydatabase`);
const db = mongoose.connection;
db.on("connected", (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`database successfully connected`);
})
module.exports = db;