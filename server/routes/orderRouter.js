const Router = require('express');
const router = new Router();
const authMiddleware = require('../middleware/authMiddleWare');
const OrderController = require('../controllers/orderController')
const authMiddleWare = require('../middleware/authMiddleWare');
const chekRoleMiddleware = require('../middleware/chekRoleMiddleware');

router.get('/',authMiddleWare,OrderController.getAll, authMiddleWare,chekRoleMiddleware)


module.exports = router