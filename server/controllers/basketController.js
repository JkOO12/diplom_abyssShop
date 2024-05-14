const { json, where } = require('sequelize');
const ApiError = require('../errors/ApiErorr');
const { Basket, BasketProduct, Product, Orders } = require('../models/models');

class BasketController {
   
    // Метод для добавления товаров в корзину
    async addToBasket(req, res, next) {
        try {
            const { productId, quantity, size } = req.body.item;
            const userId = req.user.id;

            // Поиск корзины пользователя или создание новой, если она отсутствует
            let basket = await Basket.findOne({ where: { userId } });
            if (!basket) {
                basket = await Basket.create({ userId });
            }

            // Добавление товара в корзину
            await BasketProduct.create({ basketId: basket.id, productId, quantity, userId, size });
            
            res.status(201).json({ message: "Товары успешно добавлены в корзину" });
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }

    // Метод для получения содержимого корзины пользователя
    async getBasketContent(req, res, next) {
        try {
            const userId = req.user.id;
            const basket = await Basket.findOne({ where: { userId }, include: [Product] });

            res.json(basket.products);
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }

    // Метод для удаления товара из корзины
    async removeFromBasket(req, res, next) {
        try {
            const { productId } = req.body;
            const userId = req.user.id;

            // Поиск корзины пользователя
            const basket = await Basket.findOne({ where: { userId } });

            // Удаление товара из корзины
            await BasketProduct.destroy({ where: { basketId: basket.id, productId } });

            res.json({ message: "Товар удален из корзины" });
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }

    // Метод для оформления заказа
    async checkout(req, res, next) {
        try {
            const userId = req.user.id;
            const basketId = await Basket.findOne({ where: { userId } });
            const { productIds, phone, index, city, links, totalPrice } = req.body;

            // Получение информации о товарах в корзине
            const basketProducts = await BasketProduct.findAll({
                where: { userId },
                include: [{ model: Product }] 
            });

            // Создание заказа
            const order = await Orders.create({ 
                basketId: basketId.id, 
                goods: productIds.join(','),
                userId: userId,
                phone,
                index, 
                city,
                links,
                totalPrice,
                checkout: 1
            });

            // Обновление статуса заказа и его стоимости
            await order.update({ checkout: true, coast: totalPrice });

            // Очистка корзины после оформления заказа
            await BasketProduct.destroy({ where: { basketId: basketId.id } });

            res.json("Заказ оформлен");
        } catch (error) {
            next(ApiError.internal(error.message));
        }
    }
}

module.exports = new BasketController();
