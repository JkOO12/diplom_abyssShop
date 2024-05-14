const ApiErorr = require('../errors/ApiErorr')
const { Product, ProductInfo } = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../errors/ApiErorr')
const { Op } = require('sequelize'); 

class specialProductConroller{
    async getSpecialProducts(req, res, next) {
        try {
            let { typeId, limit, page } = req.query;
            page = page || 1
            limit = limit || 3
            let offset = (parseInt(page)-1) * parseInt(limit);
            let specialProducts;
            if(!typeId){
                specialProducts = await Product.findAll({
                    limit,
                    offset,
                    where: {
                        name: {
                            [Op.like]: '%Special%'
                        }
                    }
                });
            }
            else{
                specialProducts = await Product.findAll({
                    limit,
                    offset,
                    where: {
                        typeId,
                        name: {
                            [Op.like]: '%Special%'
                        }
                    }
                });
            }
            
            return res.json(specialProducts);
        } catch (error) {
            console.log(ApiError.internal(error.message));
        }
    }
}

module.exports = new specialProductConroller()