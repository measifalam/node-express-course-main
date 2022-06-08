const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send('Task Manager App')
})

const port = 5500

app.listen(port, console.log(`Server is listening on port ${port}...`))
