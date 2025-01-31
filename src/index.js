import express from 'express';
import  router  from '../src/Route/principalRoute.js';
import bodyParser from 'body-parser';
//import cors from 'cors';
const app= express();

const Port=3000;

//app.use(cors({origin: 'http://localhost:5173',}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/principal", router);

app.use((req, res) =>{
    res.send('Lo siento, busqueda sin suerte')
});


app.listen(Port, ()=>{
    console.log(`corriendo en el puerto: ${Port}`);
});

