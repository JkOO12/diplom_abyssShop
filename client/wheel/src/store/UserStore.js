import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        // Инициализация переменных состояния хранилища
        this._isAuth = false; // Флаг авторизации пользователя
        this._user = {}; // Данные пользователя
        makeAutoObservable(this); // Создание наблюдаемых свойств и методов автоматически
    }

    // Методы для установки значений переменных состояния
    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    // Геттеры для доступа к переменным состояния
    get user() {
        return this._user;
    }

    get isAuth() {
        return this._isAuth;
    }
}
