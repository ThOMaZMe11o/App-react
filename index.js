const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const soma = 100 + 1;
  res.send({soma: soma})
})

app.listen(3000)