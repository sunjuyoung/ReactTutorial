const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port  = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
            'id' : 1,
            'image' : 'http://placeimg.com/64/64/any',
            'name' : '홍길동',
            'region' : '서울'
          },
          {
            'id' : 2,
            'image' : 'http://placeimg.com/64/64/any',
            'name' : '나상욱',
            'region' : '경기'
          },
          {
            'id' : 3,
            'image' : 'http://placeimg.com/64/64/any',
            'name' : '유재석',
            'region' : '서울'
          }
    ]);
})

app.listen(port,()=>{
    console.log(`Listen port ${port}`);
})