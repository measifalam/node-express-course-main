const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

//middle ware
app.use(express.json())

//routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)


// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - Create a new tasks
// app.get('/api/v1/tasks/:id') - get a single tasks
// app.patch('/api/v1/tasks/:id') - Update Task
// app.delete('/api/v1/tasks/:id') - delete task





const port = 5500

app.listen(port, console.log(`Server is listening on port ${port}...`))
