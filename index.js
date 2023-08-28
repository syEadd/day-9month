const express = require('express');
const app = express();






app.get('/', function(requests, response){
  response.send('/inddfg');
})

app.listen(7000, function(){
  console.log('7000번 포트')
})
// app.get('/test', function(requests, response){
//     response.send('Test 페이지 입니다.')
//   })