const express = require('express')
const router = express.Router()
const todosController = require('../controllers/afterLogin') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth)
router.get('/', ensureAuth, todosController.getTodos)




module.exports = router