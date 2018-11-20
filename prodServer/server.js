const express = require('express')
const fs = require('fs')
const https = require('https')
const path = require('path')
const compression = require('compression')
const port = process.env.PORT || 8080

const app = express()
// serve static assets normally
app.use(express.static(path.join(__dirname, 'dist')))

app.use(compression())

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

// Certificate
const privateKey = fs.readFileSync(path.resolve('/etc/letsencrypt/live/innometric.guru/privkey.pem'), 'utf8');
const certificate = fs.readFileSync(path.resolve('/etc/letsencrypt/live/innometric.guru/cert.pem'), 'utf8');
const ca = fs.readFileSync(path.resolve('/etc/letsencrypt/live/innometric.guru/chain.pem'), 'utf8');

https.createServer({
  key: privateKey,
  cert: certificate,
  ca: ca
}, app)
.listen(port, function () {
  console.log('App running on port ' + port)
})