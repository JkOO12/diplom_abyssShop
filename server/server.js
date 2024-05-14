const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const errorHandler = require('./middleware/ErorrHandingMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')

const app = express()

app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, 'static')))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors())

app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ alter: true })
        app.listen(5000, () => console.log('server run'))


    } catch (e) {
        console.log(e)

    }
}
start()



app.use('/api', routes)



