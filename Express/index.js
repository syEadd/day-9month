const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

app.listen(7000, function(){
  console.log('7000번 포트')
})

app.get('/', function(requests, response){
  response.send('Helldddo1');
})

app.get('/login', function(requests, response){
  response.sendFile(__dirname + '/login.html')
})


const MongoClient = require('mongodb').MongoClient;
let db;

MongoClient.connect('mongodb+srv://admin:1234@cluster0.zcoilvp.mongodb.net/?retryWrites=true&w=majority',function(error,client){
  if(error){
    return console.log(error)
  }
  
  db = client.db('eggUp');

  app.listen('7070',function(){
    console.log('dgsfv')
  })
})



app.post('/add', function(requests, response){
  console.log(requests.body)
  response.send('전송 완료')
  // eggUp.eggDown

  db.collection('eggDown').insertOne({_id : 1 ,아이디 : requests.body.id, 비밀번호 : requests.body.pw}, function(error, result){
    console.log('저장 완료')
  })

  // 오른쪽
  db.collection('total').updateOne({name : 'dataLength'},{ $inc : {toatalData : 1}},function(error, result){
    if(error) {
      return console.log(error)
    }
  })
})


// post 라는 cllection 이름 아래쪽. 
app.set('views engine', 'ejs');

app.get('/add', function(requests, response){
  // post라는 collection에 저장된 데이터를 꺼낸다.
  db.collection('eggDown').find().toArray(function(error, result){
    console.log(error)
    console.log(result)
    response.render('data.ejs', {log : result})
  })
})

