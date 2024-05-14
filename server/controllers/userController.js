const ApiError = require('../errors/ApiErorr') // Подключение модуля для создания кастомных ошибок
const bcrypt = require('bcrypt') // Подключение модуля для хеширования паролей
const {User,Basket} = require('../models/models') // Подключение моделей данных пользователя и корзины
const jwt = require('jsonwebtoken') // Подключение модуля для создания и проверки JWT-токенов

// Функция для генерации JWT-токена
const generateJwt = (id, login, role,email) => {
    return jwt.sign({id,login,role,email}, 
        process.env.SECRET_KEY, // Секретный ключ для подписи токена, хранится в переменной окружения
        {expiresIn: '24h'} // Время жизни токена - 24 часа
    )
}

// Класс UserController, который содержит методы для регистрации, входа и проверки аутентификации пользователя
class UserController{
    
    // Метод для регистрации нового пользователя
    async registration(req, res){
        const {login, password,role, name,surname,patronomic, email, gender } = req.body
        if(!login || !password){
            return next(ApiError.badRequest('Некорректный логин или пароль')) 
        }
        const candidate = await User.findOne({where: {login}})
        if(candidate){
            return next(ApiError.badRequest('Логин или пароль уже существуют')) 
        }
        const hashPassword = await bcrypt.hash(password, 4) // Хеширование пароля
        // Создание нового пользователя и корзины для него
        const user = await User.create({login,password:hashPassword,role,name,surname,patronomic, email, gender})
        const basket = await Basket.create({userId:user.id})
        const token = generateJwt(user.id, user.login, user.role,user.email) // Создание JWT-токена для пользователя
        return res.json(token) 
    }
   
    // Метод для входа пользователя
    async login(req, res,next){
        const{login, password} = req.body
        const user = await User.findOne({where:{login}})
        if(!user){
            return next(ApiError.badRequest('Данного пользователя не существует')) // Если пользователя с таким логином не существует, возвращается ошибка
        }
        let comparePassword = bcrypt.compareSync(password, user.password) // Проверка пароля
        if(!comparePassword){
            return next(ApiError.internal('Указан неверный пароль')) 
        }
        const token = generateJwt(user.id, user.login, user.role, user.email) // Создание JWT-токена для пользователя
        return res.json({token}) 
    }
   
    // Метод для проверки аутентификации пользователя
    async chek_auth(req, res,next){
         const token = generateJwt(req.user.id, req.user.login, req.user.role, req.user.email) // Создание JWT-токена для пользователя
         return res.json({token}) 
    }
}

module.exports = new UserController() 
