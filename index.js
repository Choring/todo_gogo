var express = require('express') // node_modules 내 express 관련 코드를 가져온다
var app = express()

app.get('/hello', (req, res) => { // URL 응답 테스트
    res.send('hello world !')
})
//맨 밑에 놓기
app.listen(5000, () => { // 5000 포트로 서버 오픈
    console.log('server is running on port 5000 ...')
})