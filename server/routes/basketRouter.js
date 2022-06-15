const Router = require('express')
const basketController = require('../controllers/basketController')
const router = new Router()
const chekRole = require('../middleware/chekRoleMiddleware')

router.post('/', chekRole('ADMIN'), basketController.add)
router.post('/', chekRole('ADMIN'), basketController.deleteAll)
router.post('/', chekRole('ADMIN'), basketController.deleteOne)
router.get('/:id', chekRole('ADMIN'), basketController.getAll)


module.exports = router