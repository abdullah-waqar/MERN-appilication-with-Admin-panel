const express = require('express')
const router = require('./router/auth-router.js')
const connectDB = require('./utils/db.js')
require('dotenv').config()

const app = express()

const PORT =5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/auth",router)


connectDB().then( ()=> {

        app.listen(PORT ,  () => {
                console.log(`Server is running on port ${PORT}`)
        });
} );
       

