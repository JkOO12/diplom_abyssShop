import { $authServer } from "./main";

export const addToBasket = async (item) => {
    const { data } = await $authServer.post('/api/basket/add', { item });
    return data;
}

export const getBasketContent = async () => {
    const { data } = await $authServer.get('/api/basket/');
    return data;
}

export const removeFromBasket = async (productId, quantity) => {
    const { data } = await $authServer.delete('api/basket/remove/' + { productId })
    return data
}

export const checkout = async (productIds, totalPrice, phone, index, city, links) => {
    const { data } = await $authServer.post('/api/basket/checkout', { productIds, totalPrice, phone, index, city, links });
    return data;
}

