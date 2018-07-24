const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MongoDB server');
  } 
  console.log('Connected to MongoDB Server');
  db.collection('data_user').insertOne({
  _id :003,
  namaUser:'Alesha',
  jenisKelamin:'Perempuan',
  kotaAsal:'Jakarta',
  umur:10

  },(err,result)=>{
    if(err){
      return console.log('unable to insert to do',err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
