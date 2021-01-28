const Usuario = require('../models/usuarios');
const { response } = require('express');

const getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find({}, 'nombre email role google');

    res.status(200).json({
        ok: true,
        usuarios
    })
};

const createUsuarios = async (req, res = response) => {
    const { nombre, email, password } = req.body;
    const usuario = new Usuario(req.body);

    try {
        await usuario.save();

        res.status(200).json({
            ok: true,
            usuario
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: error.code == 11000 ? 'This email is already registered!' :'Unexpected error, check logs.'
        });
    }
};

module.exports = {
    getUsuarios,
    createUsuarios,
};