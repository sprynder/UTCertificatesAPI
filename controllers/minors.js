const Minor = require('../models/minors');
const multer = require('multer');
const MongoClient = require('mongodb').MongoClient;



const allMinors = async (req, res) => {
    const client =await  MongoClient.connect(process.env.MONGODB_URI, async function(err, dbo) {
        var db =  dbo.db('minor-database')
        //db.listCollections().toArray().then(cols => console.log("Collections", cols))
        var cursor =  await db.collection('minor-collection').find();
        await cursor.toArray().then(cols => res.send(JSON.stringify(cols)));
        await dbo.close();
    });
}

const byName = async (req, res ) => {
    let school = req.params.name;
    let minors = [];
    console.log(school);
    await MongoClient.connect(process.env.MONGODB_URI, async function(err, dbo) {
        var db =  await dbo.db('minor-database')
        //db.listCollections().toArray().then(cols => console.log("Collections", cols))
        var cursor = await db.collection('minor-collection').find();
        await cursor.toArray().then(cols => {minors=JSON.parse(JSON.stringify(cols));
        schoolArr = minors[0][school];
        res.send(JSON.stringify(schoolArr));
        });
        await dbo.close();
    });
    //await console.log(minors);
}

module.exports = {allMinors,byName};