const Router = require('express')
const router = new Router()
const usersRouter = require('./usersRouter')
const typeRouter = require('./typeRouter')
const prodctRouter = require('./productRouter')
const basketRouter = require('./basketRouter')
const specialProductRouter = require('./specialProductRouter')
const orderRouter = require('./orderRouter')

router.use('/user', usersRouter)
router.use('/type',typeRouter)
router.use('/product',prodctRouter)
router.use('/basket',basketRouter)
router.use('/specialProduct',specialProductRouter)
router.use('/orders',orderRouter)

module.exports = router