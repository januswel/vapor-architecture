import * as express from 'express'
import drinks from './drinks'

const app = express()

app.use(express.static('public'))
app.use('/drinks', drinks)

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.listen(3000)
