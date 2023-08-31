const express = require('express');
const app = express();

// port : 컴퓨터에는 외부 네트워크랑 통신을 할 수 있는 여러개의 구멍이 있는데,
//  그 중에 몇 번째 port로 접속할건지 지정 해줘야 한다.

// listen이라는 함수로 서버를 열어준다.
// listen(para1, para2)
// para1 : 서버를 띄울 포트 번호
// para2 : 실행 할 코드

// 내 컴퓨터에서 7000번 포트로 진입 했을 때,
// 콜백함수 안에 있는 코드 실행
// localhost:7000(port number)
app.listen(7000, function(){
  console.log('7000번 포트')
})