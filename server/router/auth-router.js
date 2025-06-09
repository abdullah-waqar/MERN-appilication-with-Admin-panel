const express = require('express')

const router = express.Router()
const {home , register , login} = require('../controllers/auth-controller')
const validate  = require('../middlewares/validate-middleware')
const {signupSchema , loginSchema} = require('../validators/auth-validator')

// router.get("/", (req, res) =>{
//     res.status(200).send("Hello world!")
// })

router.route('/').get(home)

router.route("/register").post(   register)
router.route("/login").post(validate(loginSchema) ,  login)


module.exports = router
