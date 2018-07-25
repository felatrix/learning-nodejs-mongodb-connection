const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MongoDB server');
  } 
  console.log('Connected to MongoDB Server');
  //deleteMany
  // db.collection('data_user').deleteMany({jenisKelamin:'Perempuan'}).then((result)=>{
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('data_user').deleteOne({jenisKelamin:'Pria'}).then((result)=>{
  //   console.log(result);
  // });
  //findOneAndDelete
  // db.collection('data_user').findOneAndDelete({jenisKelamin:'Pria'}).then((result)=>{
  //   console.log(result);
  // });
  db.collection('data_user').delete
  // db.close();
});
