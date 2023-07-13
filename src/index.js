const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const comentarioRoutes = require('./routes/comentarios.routes')

const port = process.env.PORT || 7000;

//middlewares
app.use(express.json());
app.use('/api', comentarioRoutes);
//routes
app.get('/', (req, res) =>{
    res.send("Bienvenido");
});

//mongo conenction
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("conectado a atlas"))
.catch((e) => console.log(e));

app.listen(port, () => console.log("server listening on port", port));