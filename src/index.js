import express from 'express';
import router from '../src/Route/principalRoute.js';
import bodyParser from 'body-parser';
import cors from 'cors'; // Importa cors

const app = express();
const Port = 3000;

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:5173', // Permite solicitudes desde localhost:5173 (tu frontend)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite los métodos necesarios
    allowedHeaders: ['Content-Type'], // Permite el encabezado Content-Type
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usar las rutas definidas en principalRoute.js
app.use("/principal", router);

// Rutas para manejar solicitudes no definidas
app.use((req, res) => {
    res.send('Lo siento, búsqueda sin suerte');
});

app.listen(Port, () => {
    console.log(`Corriendo en el puerto: ${Port}`);
});
