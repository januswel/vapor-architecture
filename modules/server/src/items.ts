import * as express from 'express'
import * as bodyParser from 'body-parser'

import { Item } from 'vapor-domain'

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

const items = Item.getAll()
const table = { Item }
Object.keys(items).forEach(id => {
  const item = items[id]
  table[id] = {
    ...item,
    count: 0,
  }
})

router.post('/', (req, res) => {
  console.log(req.body)
  const { itemId } = req.body.payload
  if (!(itemId in table)) {
    throw new Error(`non-exist id: ${itemId}`)
  }
  table[itemId].count++
  res.status(200).end()
})

router.get('/', (req, res) => {
  res.json(JSON.stringify(table))
})

export default router
