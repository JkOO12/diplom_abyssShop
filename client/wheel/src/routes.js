import Admin from "./page/Admin"
import Basket from "./page/Basket"
import Auth from "./page/Auth"
import Product from "./page/ProductPage"
import Shop from "./page/Shop"
import {ADMIN_ROUTE, PRODUCT_ROUTE, BASKET_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE, ABOUT_ROUTE} from "./utils/consts"
import About from "./page/About"
import Registration from "./page/Registration"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
    
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    }, 
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Product
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    }
  

]