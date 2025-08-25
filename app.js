require('dotenv').config()
const express = require('express')
const app = express()

// ERROR HANDLERS
const NotFoundMiddleware = require('./middleware/notfound')
const errorHandlerMiddleware = require('./middleware/errorhandler')
const stripeController = require('./controllers/stripeController')

app.use(express.json())

// ROUTES
app.post('/stripe', stripeController)

app.use(NotFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async() => {
    try {
        app.listen(port, () => console.log(`On server ${port}`))
    } catch (error) {
        console.log(error);

    }
}

start()