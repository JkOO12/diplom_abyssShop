const ApiErorr = require('../errors/ApiErorr')
const { Product, ProductInfo } = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../errors/ApiErorr')
const { Op } = require('sequelize'); 

class ProductController {
    async create(req, res, next) {
        try {
            let { name, price, typeId, info,collection } = req.body
            const { img } = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))

            if (info) {
                info = JSON.parse(info)
                info.array.forEach(i => {
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: product.id
                    })
                });
            }
    
            const product = await Product.create({ name, price, typeId, img: filename,collection })

            return res.json(product)

        } catch (e) {
            next(ApiError.badRequest(e.message))

        }
    }

    async getAll(req, res,next) {
        try {
            let { typeId, limit, page } = req.body;
            page = page || 1;
            limit = limit || 9;
            let offset = parseInt(page) * parseInt(limit) - parseInt(limit);
            let products;
        
            if (!typeId) {
                products = await Product.findAndCountAll({
                    where: {
                        name: {
                            [Op.notLike]: '%Special%' 
                        }
                    },
                    limit,
                    offset
                });
            } else {
                products = await Product.findAndCountAll({
                    where: {
                        typeId,
                        name: {
                            [Op.notLike]: '%Special%' 
                        }
                    },
                    limit,
                    offset
                });
            }
        
            return res.json(products);
        } catch (e) {
            next(ApiError.internal(e.message));
            console.log(e);
        }
        

    }

    async getOne(req, res) {
        const { id } = req.params
        const product = await Product.findOne(
            {
                where: { id },
                include: [{ model: ProductInfo, as: 'info' }]
            },

        )
        return res.json(product)

    }
 
}

module.exports = new ProductController()