const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    
    if(err)
    {
        
        return console.log(err);
        
    }
    
    console.log("Connecté !");
    const db = client.db('TodoApp');
    
    /* db.collection('Users').find().toArray().then((docs) => {
        
        console.log(JSON.stringify(docs, undefined, 2));
        
    }).catch((err) => {
        console.log(err);
    }); */
    
    
     db.collection('Users').updateOne({_id: new ObjectId("5bbb223c9de6b404e95af0a7")}, {
         $set: {
             completed: false
         }
     }).then((docs) => {
        
        console.log(JSON.stringify(docs, undefined, 2));
        
    }).catch((err) => {
        console.log(err);
    }); // AVEC FILTRE SUR LOBJET ID
    
    client.close();
    
});