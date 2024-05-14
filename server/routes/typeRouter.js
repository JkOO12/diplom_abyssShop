const Router = require('express')
const router = new Router()
const TypeController = require('../controllers/typeController')
const typeController = require('../controllers/typeController')
const chekRole = require('../middleware/chekRoleMiddleware')

router.post('/create',chekRole('ADMIN'),typeController.create)
router.get('/',typeController.getAll)

module.exports = router