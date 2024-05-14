import { makeAutoObservable } from 'mobx';
import { updateBasket } from '../http/basketAPI';

export default class BasketStore {
    // Состояние корзины: массив товаров и идентификатор пользователя
    items = [];
    userId = null;

    // Конструктор класса, инициализирующий хранилище и загружающий элементы из локального хранилища
    constructor() {
        makeAutoObservable(this);
        this.loadItemsFromLocalStorage();
    }

    // Метод для вычисления общей стоимости товаров в корзине
    calculateTotalPrice() {
        this.totalPrice = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    // Метод для установки идентификатора пользователя
    setUserId(userId) {
        this.userId = userId;
        this.loadItemsFromLocalStorage();
    }

    // Метод для добавления товара в корзину
    addItem(item) {
        this.items.push(item);
        this.saveItemsToLocalStorage();
    }

    // Метод для удаления товара из корзины
    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveItemsToLocalStorage();
    }

    // Геттер для получения общей стоимости товаров в корзине
    get TotalPrice() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    // Метод для очистки корзины
    clearBasket() {
        if (this.userId) {
            localStorage.removeItem(`basketItems_${this.userId}`);
            this.items = [];
        }
    }

    // Метод для сохранения товаров в локальное хранилище
    saveItemsToLocalStorage() {
        if (this.userId) {
            localStorage.setItem(`basketItems_${this.userId}`, JSON.stringify(this.items));
        }
    }

    // Метод для загрузки товаров из локального хранилища
    loadItemsFromLocalStorage() {
        if (this.userId) {
            const storedItems = localStorage.getItem(`basketItems_${this.userId}`);
            if (storedItems) {
                this.items = JSON.parse(storedItems);
            }
        }
    }

    // Метод для увеличения количества товара в корзине
    increment(item) {
        item.quantity++;
        this.saveItemsToLocalStorage();
        this.items.reduce((total, item) => total + item.price * item.quantity, 0);
     
    }

    // Метод для уменьшения количества товара в корзине
    decrement(item) {
        if (item.quantity > 1) {
            item.quantity--;
            this.saveItemsToLocalStorage();
            this.items.reduce((total, item) => total + item.price * item.quantity, 0);
        }
       
    }
}
