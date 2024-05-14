import axios from "axios";
const { REACT_APP_API_URL } = process.env;

// Создание экземпляра Axios для обычных запросов к API
const $server = axios.create({
    baseURL: REACT_APP_API_URL
})

// Создание экземпляра Axios для запросов с авторизацией
const $authServer = axios.create({
    baseURL: REACT_APP_API_URL,

})

// Интерсептор запроса для добавления токена авторизации
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authServer.interceptors.request.use(authInterceptor)

export {
    $server,
    $authServer
}