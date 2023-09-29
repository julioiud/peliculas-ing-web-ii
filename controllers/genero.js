const Genero = require('../models/genero')
const { request, response } = require('express')

// CRUD: Crear, Read, Update, Delete
/**
 * Crear un género
 */
const createGenero = async (req = request, res = response) => {
    console.log(req.body)

    const { nombre, descripcion } = req.body
    try{
        const generoDB = await Genero.findOne({ nombre })
        if(generoDB) {
            return res.status(400).json({ msj: 'Ya existe nombre'})
        }// select * from generos WHERE nombre = ?
        
        const datos = {
            nombre,
            descripcion
        }

        const genero = new Genero(datos)

        await genero.save()

        return res.status(201).json(genero)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }

}

/**
 * Consultar todos los géneros
 */
const getGeneros = async (req = request, res = response) => {
    
    try{
        const { estado } = req.query

        const generos = await Genero.find({ estado })

        return res.json(generos)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }

}

/**
 * Consultar un género por su ID
 */

/**
 * Actualizar un género
 */

/**
 * Borra un genero por su ID
 */
const deleteGeneroByID = async (req = request, res = response) => {
    try{
        const { id } = req.params
        await Genero.findByIdAndDelete({ _id : id })
        return res.status(204).json({})
    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

module.exports = {
    createGenero,
    getGeneros,
    deleteGeneroByID
}