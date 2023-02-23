const express = require('express')
const router =express.Router()
const casasController = require('../controller/casas.controller')

router.get('/', casasController.getALL)
router.get('/:id', casasController.getById)
router.post('/',casasController.create)
router.put('/:id', casasController.update)
router.delete('/:id', casasController.delete)


module.exports = router