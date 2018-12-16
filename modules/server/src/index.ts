import * as express from 'express'
import items from './items'

const app = express()

app.use(express.static('public'))
app.use('/items', items)

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.listen(3000)
