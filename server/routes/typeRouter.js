const Router = require('express')
const typeController = require('../controllers/typeController')
const chekRole = require('../middleware/chekRoleMiddleware')
const router = new Router()

router.post('/', chekRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)


module.exports = router