import * as express from 'express'
import * as bodyParser from 'body-parser'

import { Drink } from 'vapor-domain'

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

const drinks = Drink.repository.getAll()
const table = {}
Object.keys(drinks).forEach(id => {
  const drink = drinks[id]
  table[id] = {
    ...drink,
    count: 0,
  }
})

router.post('/', (req, res) => {
  console.log(req.body)
  const { drinkId } = req.body.payload
  if (!(drinkId in table)) {
    throw new Error(`non-exist id: ${drinkId}`)
  }
  table[drinkId].count++
  res.status(200).end()
})

router.get('/', (req, res) => {
  res.json(JSON.stringify(table))
})

export default router
