const { json } = require('express');
const express =require('express');

const app = express();

app.get('/me', (request, response) => {
    response.status(200).json({
        name: 'Douglas',
        Age: 32,
        country: 'Colombia'
    })
    verb:request.method
});


app.post('/metas', (request, response) => {
    response.status(200).json({
        message:['me gusta ver series que inspiren a seguir adelante', 'compartir with my family', 'play soccer']
    })
    verb: request.method
});

app.patch('/metas', (request, response) => {
    response.status(200).json({
        message:['quiero convertirme en un programador exitos', 'quiero ser millonario']
    })
    verb: request.method
});

app.put('/business', (request, response) => {
    response.status(200).json({
        message:['Facebook', 'Google', 'amazon']
    })
    verb: request.method
    
});

app.listen(8000, () =>{
  console.log('server started at port 8000');
});