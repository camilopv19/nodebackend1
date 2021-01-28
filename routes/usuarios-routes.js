const { Router } = require('express');
const { getUsuarios, createUsuarios } = require('../controllers/usuarios-controller');

const router = Router();

/* 
    GET: /api/usuarios/ 
*/
router.get('/', getUsuarios);

/* 
    POST: /api/usuarios/ 
*/
router.post('/', createUsuarios);

module.exports = router;