const express = require('express');
const app = express();

app.use(express.static(__dirname))

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

// app.post('/add', function(requests, response){
//   response.send('전송완료!')
//   console.log(requests.body)
// })


app.post('/add', function(requests, response){
  console.log(requests.body)
  response.send('전송 완료!')


  db.collection('total').findOne({name : 'dataLength'}, function(error, result){
    console.log(error)
    console.log(result.totalData) // total collection있는 총 데이터 수
    let totalDataLength = result.totalData;

    db.collection('eggDown').insertOne({_id : totalDataLength + 1 ,아이디 : requests.body.id, 비밀번호 : requests.body.pw}, function(error, result){
      console.log('db에 저장완료!')
    })
  

    db.collection('total').updateOne({name : 'dataLength'}, { $inc : { totalData : 1}},function(error, result){
      if(error) {
        return console.log(error)
      }
    })
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



app.delete('/delete', function(requests, response){
  console.log(requests.body._id)
  requests.body._id = parseInt(requests.body._id)
  
  db.collection('post').deleteOne({_id : requests.body._id}, function(error, reulst){
    if(error) {
      console.log(error)
    }
    console.log('삭제완료!!')
  })

  // 서버에서 응답코드로 요청의 상태를 표시할 수 있다.
  // 2xx => 요청 성공
  // 4xx => 고객 문제로 요청 실패
  // 5xx => 서버 문제로 요청 실패
  response.status(200).send({message : '성공적'})
})

app.get('/info/:id',function(requests, response){
db.collection('post')
})