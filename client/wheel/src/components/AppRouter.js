import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes"; 
import { SHOP_ROUTE } from "../utils/consts"; 
import { Context } from "../index"; 

const AppRouter = () =>{
    const {user} = useContext(Context); // Получение данных пользователя из контекста

    return(
        <Routes>
            {/* Маппинг маршрутов, доступных только авторизованным пользователям */}
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}

            {/* Маппинг публичных маршрутов, доступных всем пользователям */}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />
            )}
        </Routes>
    );
};

export default AppRouter;
