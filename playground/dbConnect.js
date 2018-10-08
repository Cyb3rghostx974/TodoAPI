//const mongoClient = require('mongodb').MongoClient; // La librairie npm MongoDB

const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    
    if(err)
    {
        
        return console.log(err);
        
    }
    
    console.log("Connecté !");
    const db = client.db('TodoApp');
    
    db.collection('Users').insertOne({
        
        id: '3',
        email: 'zaza@gmail.com',
        password: 'zazazoizo',
        completed: true
        
    }, (err, result) => {
        
       if(err)
        {
            
            return console.log('unable to insert todo', err);
            
        }
        
        console.log(JSON.stringify(result.ops));
        
    });
    
    
    client.close();
    
});

/*var User = {
    
  name: "Bob"  
    
};


console.log(User.name);

var {name} = User;

console.log(name);*/
