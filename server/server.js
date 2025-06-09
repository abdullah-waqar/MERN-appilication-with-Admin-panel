const express = require('express')
const router = require('./router/auth-router.js')
const connectDB = require('./utils/db.js')
const errorMiddleware = require('./middlewares/error-middleware.js')
const cors = require('cors')
require('dotenv').config()

const app = express()

const PORT =5000

// Handling cors policy
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Allow credentials if needed
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use("/api/auth",router)
app.use("/api/form", require('./router/contact-router.js'))

// app.use(errorMiddleware)

connectDB().then( ()=> {

        app.listen(PORT ,  () => {
                console.log(`Server is running on port ${PORT}`)
        });
} );
       

