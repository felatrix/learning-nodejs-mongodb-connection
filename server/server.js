var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo',{
//     text:{
//         type:String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     comleted:{
//         type:Boolean,
//         default:false
//     },
//     completedAt:{
//         type:Number,
//         default:null
//     }
// });

// var newTodo = new Todo({
//     text:'Cook dinner'
// });

// var newNumberTodo = new Todo({
//     text:'nama saya younglex'
// });

// newTodo.save().then((doc)=>{
//     console.log('save todo',doc);
// },(e)=>{
//     console.log('Unable to save todo');
// });

// newNumberTodo.save().then((doc)=>{
//     console.log('save number todo',doc);
// },(e)=>{
//     console.log('unable to save todo',e);
// });  

//user
//email - require it - trim it - set type - set min of length of 1

var Todo = mongoose.model('Todo',{
    user:{
        type:String,
        required: true,
        minlength: 1,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
});

var todoEmail = new Todo({
    user:'iwan',
    email:'iwansaila@gmail.com'
});
 todoEmail.save().then((doc)=>{
     console.log(`your user is ${doc.user} and your email is ${doc.email}`);
 },(e)=>{
     console.log('this input was error ',e);
 });