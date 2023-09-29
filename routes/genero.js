const { Router } = require('express')
const { 
    createGenero, 
    getGeneros, 
    deleteGeneroByID } = require('../controllers/genero')

const router = Router()

/**
 * Crear una genero
 */
router.post('/', createGenero)

/**
 * Consultar todos los géneros
 */
router.get('/', getGeneros)

/**
 * Consultar un género por su ID
 */

/**
 * Actualizar un género
 */

/**
 * Borra un genero por su ID
 */
router.delete('/:id', deleteGeneroByID)

module.exports = router
