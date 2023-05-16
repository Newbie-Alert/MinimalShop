// 라이브러리 객체 생성
// express
const express = require('express');
const app = express();
// 정적파일 경로
app.use(express.static(__dirname + '/public'));

//ejs 렌더러
app.set('view engine', 'ejs');

// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


// 서버 오픈 안내
app.listen(8080, () => {
  console.log('listening on 8080');
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})