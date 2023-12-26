const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Camila Ferrari',
        imagem: 'https://avatars.githubusercontent.com/u/88910225?v=4',
        minibio: 'Farmacêutica em transição de carreira para Desenvolvedora'
    },
    {
        nome: 'Nicolle Meirelles',
        imagem: 'https://www.imagenspng.com.br/wp-content/uploads/2017/03/moana-01-920x1024.png',
        minibio: 'Desenvolvedora e estudante de Computação'
    }
,
{
    nome: 'Ada Lovelace',
    imagem: 'https://s2-techtudo.glbimg.com/7YOBBhghbMF9wsUuBP7UcUh2yXI=/0x342:2439x2307/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/3/FbrmyhQneVYWGUPIe8vA/adalovelace.jpg',
    minibio: 'Matemática e programadora'
}
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)