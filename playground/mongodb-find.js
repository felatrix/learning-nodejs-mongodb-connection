const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MongoDB server');
  } 
  console.log('Connected to MongoDB Server');
  db.collection('data_user').find({jenisKelamin:'Perempuan'}).toArray().then((docs)=>{
    console.log('data_user');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('unable to fetch todos',err)
  });

  // db.close();
});
