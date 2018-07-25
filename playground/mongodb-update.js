const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MongoDB server');
  } 
  console.log('Connected to MongoDB Server');
  db.collection('data_user').findOneAndUpdate({_id:2},{
    $set:{namaUser:'Siti Aisyah',
          jenisKelamin:'Wanita',
          kotaAsal:'Jakarta',
          umur:28}},
        {
          returnOriginal:false
        }).then((result)=>{
          console.log(result);
        }); 

});
