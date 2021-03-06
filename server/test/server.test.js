const expect = require('expect');
const supertest = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done)=>{
    Todo.remove({}).then(()=>done());
});

describe('POST /todos',()=>{
    it('should creat the now todo',(done)=>{
        var text = 'Test todo text';

      request(app)
      .post('./todos')
      .send({text})
      .expect(200)
      .expect((res)=>{
          expect(res.body.text).toBe(text);
      })
      end((err,rest)=>{
          if(err){
              return done(err);
          }
          Todo.find().then((todos)=>{
              expect(todos.length).toBe(1);
              expect(todos[0].text).toBe(text);
              done();
          }).catch((e)=>done(e));
      })
    });
});