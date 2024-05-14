const {Orders} = require('../models/models')
const ApiErorr = require('../errors/ApiErorr')
class OrderController {
    async getAll(req,res){
        const orders = await Orders.findAll()
        return res.json(orders)

    }
}

module.exports = new OrderController()