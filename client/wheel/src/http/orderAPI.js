import { $server, $authServer } from "./main";
import { jwtDecode } from "jwt-decode";

export const fetchOrders = async (order) => {
    const { data } = await $authServer.get('api/orders', order)
    return data
}