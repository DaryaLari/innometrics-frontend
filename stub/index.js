const express = require('express')
const app = express()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const activities = require('../___mocks___/activities')

var users = [
  {
    email: 'this@ya.ru',
    password: '12345',
    name: 'this',
    surname: 'this'
  }
]

app.use(express.static('dist'))

app.listen(8090, () => console.log('Listening on port 8090!'))

app.post('/user', upload.fields([{ name: 'email' }, { name: 'password'}, { name: 'name'}, { name: 'surname'}]), (req, res) => {
  console.log(req.body)
  if(!req.body.email || !req.body.password || !req.body.name || !req.body.surname)
    res.status(400).send({message: 'Parameters are not correct'})
  let user = users.find(u => u.email === req.body.email)
  if(user != null){
    res.status(409).send({message: 'User with the email already exists'})
  }
  else{
    users.push({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      surname: req.body.surname
    })
    res.status(200).send({message: 'Success'})
  }
})

app.post('/login', upload.fields([{ name: 'email' }, { name: 'password'}]), (req, res) => {
  console.log(req.body)
  if(!req.body.email || !req.body.password)
    res.status(400).send({message: 'Parameters are not correct'})
  let user = users.find(u => u.email === req.body.email)
  if(user != null){
    if(user.password === req.body.password) {
      res.status(200).send({message: 'Success'})
    }
    else
      res.status(401).send({message: 'Credentials provided are incorrect'})
  }
  else{
    res.status(404).send({message: 'User was not found'})
  }
})

app.post('/logout', (req, res) => {
  console.log(req.body)
  res.status(200).send({message: 'Success'})
})

app.get('/activity', (req, res) => {
  console.log(req.query)
  res.send(activities)
})

module.exports = app
