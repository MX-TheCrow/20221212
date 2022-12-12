// https://www.npmjs.com/package/express

const express = require('express')
const app = express()
var cors = require('cors');
const PORT = process.env.PORT || 3030;
app.use(cors());

app.get('/', function (req, res) {
  res.send('I\'m Runing')
})

app.get('/Data', function (req, res) {
    var data = [
        {id:51830583, name:'Mohamad'},
        {id:59871982, name:'Ahmad'},
        {id:51830588, name:'Farah'}
    ]
    res.send(data)
  })

app.listen(PORT)