const Router = require('express');
const router = new Router();
const authMiddleware = require('../middleware/authMiddleWare');
const basketController = require('../controllers/basketController');
const authMiddleWare = require('../middleware/authMiddleWare');

router.post('/add',authMiddleWare,basketController.addToBasket)
router.delete('/remove/:productId', authMiddleWare, basketController.removeFromBasket)
router.get('/',authMiddleWare,basketController.getBasketContent)
router.post('/checkout',authMiddleWare, basketController.checkout)


module.exports = router