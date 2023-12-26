const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Camila Ferrari',
        imagem: 'https://avatars.githubusercontent.com/u/88910225?v=4',
        minibio: 'Farmacêutica em transição de carreira para Desenvolvedora'
    })
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)