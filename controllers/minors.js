const Minor = require('../models/minors');
const multer = require('multer');
const MongoClient = require('mongodb').MongoClient;



const allMinors = async (req, res) => {
    const client =await  MongoClient.connect(process.env.MONGODB_URI, function(err, dbo) {
        var db =  dbo.db('minor-database')
        //db.listCollections().toArray().then(cols => console.log("Collections", cols))
        var cursor =  db.collection('minor-collection').find();
        cursor.toArray().then(cols => res.send(JSON.stringify(cols)));
    });
}

const byName = (req, res ) => {
    Minor.find({}, (err, data)=>{
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    })
    //res.send(JSON.stringify("all minors"));
}

module.exports = {allMinors,byName};