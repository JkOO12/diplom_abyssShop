const Router = require('express')
const router = new Router()
const specialProductConroller = require('../controllers/specialProductController')

router.get('/',specialProductConroller.getSpecialProducts)

module.exports = router