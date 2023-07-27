const { authController } = require('../controllers')
const { verifyToken, verifyAdmin } = require('../middleware/auth')
const { checkUsername, checkEmail, checkPassword, checkUsernameExist, checkEmailExist } = require('../middleware/authValidator')

const router = require('express').Router()

router.post('/add', checkUsername, checkEmail, checkPassword, checkUsernameExist, checkEmailExist, authController.register)
router.post('/login', checkUsername, checkPassword, authController.login)
router.get('/keep', verifyToken, authController.keeplogin)
router.put('/forgetpass', checkEmail, authController.forgetPassword)
router.patch('/resetpass', verifyToken, checkPassword, authController.resetPassword)

module.exports = router