const express = require("express");
const router = express.Router();
const comentarioSchema = require('../models/comentarios.models');

//crear comentario para el curso
router.post('/Comentarios',(req, res) => {
    const comentario = comentarioSchema(req.body);
    comentario.save()
    .then((data) => res.json(data))
    .catch((e) => res.json({message:e}));
});

//peticion de obtencion de todos los comentarios del curso
router.get('/Comentarios',(req, res) => {
    comentarioSchema
    .find()
    .then((data) => res.json(data))
    .catch((e) => res.json({message:e}));
});

//peticion de modificar el comentario del curso
router.put('/Comentarios/:id',(req, res) => {
    const {id} = req.params;
    const { comentario, comentario_Id, tipoComentario } = req.body;
    comentarioSchema
    .updateOne({_id: id},{$set:{comentario, comentario_Id, tipoComentario}})
    .then((data) => res.json(data))
    .catch((e) => res.json({message:e}));
});

//peticion de obtencion de todos los comentarios del curso
router.get('/Comentarios/:id',(req, res) => {
    const {id} = req.params;
    comentarioSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((e) => res.json({message:e}));
});

module.exports = router;