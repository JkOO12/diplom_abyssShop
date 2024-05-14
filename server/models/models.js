const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    login:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    surname:{type:DataTypes.STRING},
    patronomic:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    gender:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue:"USER"}

})

const Basket = sequelize.define('basket',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true}

})

const BasketProduct = sequelize.define('basket_product',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    quantity:{type:DataTypes.INTEGER},
    size:{type:DataTypes.STRING}
})

const Product = sequelize.define('product',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    price:{type:DataTypes.INTEGER},
    rating:{type:DataTypes.INTEGER},
    img:{type:DataTypes.STRING},
    collection:{type:DataTypes.STRING}
})

const ProductInfo = sequelize.define('product_info',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.STRING},
    description:{type:DataTypes.STRING}
})

const Type = sequelize.define('type',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING}
})

const Rating = sequelize.define('rating',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    rate:{type:DataTypes.INTEGER}
})

const Sizes = sequelize.define('size',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING}
})

const Orders = sequelize.define('order',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    coast:{type:DataTypes.INTEGER},
    phone:{type:DataTypes.STRING},
    index:{type:DataTypes.INTEGER},
    city:{type:DataTypes.STRING},
    links:{type:DataTypes.STRING},
    checkout:{type:DataTypes.BOOLEAN},
    goods:{type:DataTypes.STRING}
})

User.hasOne(Basket,{indexes: []})
Basket.belongsTo(User,{indexes: []})

User.hasMany(Rating,{indexes: []})
Rating.belongsTo(User)

Basket.hasMany(BasketProduct,{indexes: []})
BasketProduct.belongsTo(Basket,{indexes: []})

Type.hasMany(Product,{indexes: []})
Product.belongsTo(Type,{indexes: []})

Product.hasMany(Rating,{indexes: []})
Rating.belongsTo(Product,{indexes: []})

Product.hasMany(BasketProduct,{indexes: []})
BasketProduct.belongsTo(Product,{indexes: []})

Product.hasMany(ProductInfo, {as:'info'},{indexes: []})
Product.belongsTo(Product,{indexes: []})

Product.hasMany(Sizes,{indexes: []})
Sizes.belongsTo(Product,{indexes: []})

Product.hasMany(Orders)
Basket.hasMany(Orders)

BasketProduct.belongsTo(User);

module.exports = {
    User, 
    Rating,
    Type,
    ProductInfo,
    Product,
    BasketProduct,
    Basket,
    Sizes,
    Orders
}