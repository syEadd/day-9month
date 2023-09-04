
app.get('/add', function(requests, response){
  // post라는 collection에 저장된 데이터를 꺼낸다.
  db.collection('eggDown').find().toArray(function(error, result){
    console.log(error)
    console.log(result)
    response.render('data.ejs', {log : result})
  })
})

app.get('/add',function(){
  db.collection('eggDown').insertOne().toArray(function(error, result){
    console.log(error)
    console.log(result)
    response.render('data.ejs', {_id : result})
  })

}).insertOne