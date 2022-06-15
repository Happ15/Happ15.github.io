const Router = require('express')
const productController = require('../controllers/productController')
const chekRole = require('../middleware/chekRoleMiddleware')
const router = new Router()

router.post('/', chekRole('ADMIN'), productController.create)
router.get('/', productController.getAll)
router.get('/:id', productController.getOne)


module.exports = router
