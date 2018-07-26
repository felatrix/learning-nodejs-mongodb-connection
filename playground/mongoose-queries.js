const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b5949e84a4716666fd7f432';

if(!mongoose.Types.ObjectId.isValid(id)){
    console.log('Id is not valid');
} else {Todo.find({_id:id}).then((todos)=>{
    console.log('Todos',todos);
});}


// Todo.findOne({
//     _id:id,
//     }).then((todo)=>{
//         console.log('Todo',todo);
//     }); 

// Todo.findById(id).then((todo)=>{
//     console.log('Todo By Id',todo);
// }); 