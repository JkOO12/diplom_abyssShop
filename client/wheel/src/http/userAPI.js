import { $server, $authServer } from "./main";
import { jwtDecode } from "jwt-decode";

export const registration = async (login, password, name, surname, patronomic, gender, mail) => {
    const { data } = await $server.post('/api/user/registration', { login, password, role: 'USER', name, surname, patronomic, gender, mail })
    localStorage.setItem('token', data.token)
    return jwtDecode(data);
}

export const auth = async (login, password) => {
    const { data } = await $server.post('/api/user/login', { login, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token);
}

export const check = async () => {
    try {
        const { data } = await $authServer.get('/api/user/auth')
        const token = data.token
        localStorage.setItem('token', data.token)
        return jwtDecode(token);
    }
    catch (error) {
        console.error('Ошибка', error)
        return null
    }

}