const mongoose = require('mongoose');

const comentarioSchema = mongoose.Schema({
    comentario:{
        type: String,
        require:true,
    },
    comentario_Id:{
        type:Number,
        require:true
    },
    tipoComentario:{
        type:Number,
        require:true
    }
});

module.exports = mongoose.model('comentario', comentarioSchema);