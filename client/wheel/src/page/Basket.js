import React, { useContext } from "react";
import "../App.css"
import { observer } from 'mobx-react-lite';
import ListBasket from "../components/ListBasket";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import CheckoutModal from "../components/modal/CheckoutModal";

const Basket = observer(() => {
    let navigate = useNavigate();
    const { basket } = useContext(Context)
    const { user } = useContext(Context)

    if (!user.isAuth) {
        return (
            <div className="back-ground-non-autorise">
                <div className="non-autorise-basket">
                    Здесь ничего пока нет, <a href="" onClick={() => navigate(LOGIN_ROUTE)}>Войдите</a> или  <a href="" onClick={() => navigate(REGISTRATION_ROUTE)}>Зарегистрируйтесь</a>
                </div>
            </div>

        )
    }
    return (
        <div className="back-ground-basket">
            <div className="basket">
                <div className="basket-header">
                    Корзина
                </div>
                <div className="basket-products">
                    <ListBasket />
                    <div className="total-price-basket">
                        {basket.TotalPrice} руб
                        <CheckoutModal />
                    </div>
                </div>
            </div>

        </div>

    );
});

export default Basket;