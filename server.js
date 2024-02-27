const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 3001;
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:4200', // URL de angular
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static('assets'));

const filePath = path.join(__dirname, 'src', 'assets/datos.json');

app.get('/clientes', async (req, res) => {
    try {
        const contenido = await fs.promises.readFile(filePath);
        res.json(JSON.parse(contenido));
    } catch (error) {
        console.error('Error al leer el archivo JSON: ', error);
        res.status(500).send('Error interno del servidor');
    }
});

app.post('/formulario', async (req, res) => {
    const peticionesFormulario = req.body;
    let data;
    try {
        data = JSON.parse(await fs.promises.readFile(filePath));
    } catch (err) {
        data = [];
    }
    data.push(peticionesFormulario);
    try {
        await fs.promises.writeFile(filePath, JSON.stringify(data));
        res.status(200).send('Datos guardados correctamente');
    } catch (error) {
        console.error('Error al escribir en el archivo JSON: ', error);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
