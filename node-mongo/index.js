const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { log } = require('console');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url).then((client) => {

    //assert.equal(err, null);
    console.log("Connected correctly to the server");

    const db = client.db(dbname);

    dboper.insertDocument(db,{name:"blah balh",description:"testing again"},'dishes')
    .then((result)=>{
        console.log("insert document:\n", result.ops);

        return dboper.findDocuments(db,'dishes');
    })    
    .then((docs)=>{
        console.log("found documents :\n",docs);

        return dboper.updateDocument(db,{name:"blah balh"},{ description:"test done"},'dishes');
    })
    .then((result)=>{
        console.log("updated document:\n",result.result);

        return dboper.findDocuments(db,'dishes');
    })
    .then((docs)=>{
        console.log("found documents :\n",docs);
        return db.dropCollection('dishes');
    })
    .then((result)=>{
        console.log("dropped collection: ",result);
        client.close();
    })
    .catch((err)=> console.log(err));
})
.catch((err)=> console.log(err));

// MongoClient.connect(url,(err,client) => {

//     assert.equal(err, null);
//     console.log("Connected correctly to the server");

//     const db = client.db(dbname);

//     dboper.insertDocument(db,{name:"blah balh",description:"testing again"},'dishes',(result)=>{
//         console.log("insert document:\n", result.ops);

//         dboper.findDocuments(db,'dishes',(docs)=>{
//             console.log("found documents :\n",docs);

//             dboper.updateDocument(db,{name:"blah balh"},{ description:"test done"},'dishes',(result)=>{
//                 console.log("updated document:\n",result.result);

//                 dboper.findDocuments(db,'dishes',(docs)=>{
//                     console.log("found documents :\n",docs);
//                     db.dropCollection('dishes',(result)=>{
//                         console.log("dropped collection: ",result);
//                         client.close();
//                     });
//                 });
//             });
//         });
//     });
// });
    // const collection = db.collection('dishes');

    // collection.insertOne({name:"pratyush",description:"test"}, (err, result)=>{
    //     assert.equal(err, null);
    //     console.log('after insert:\n');
    //     console.log(result.ops);

    //     collection.find({}).toArray((err,docs)=>{
    //         assert.equal(err, null);
    //         console.log('found');
    //         console.log(docs);

    //         db.dropCollection('dishes',(err, result)=>{
    //             assert.equal(err, null);

    //             client.close();
    //         });
    //     });
    // });
//});
