const express = require('express') //iniciando o express
const router = express.Router() //configurando a primeira parte da rota
const { v4:uuidv4 } = require('uuid')

const conectaBancoDeDados = require('./bancoDeDados') //ligando ao arquivo bancoDeDados
conectaBancoDeDados() //chamando a função que conecta o banco de dados

const app = express() //aqui estou iniciando o app
app.use(express.json())
const porta = 3333 //criando a porta

//criando lista inicial de mulheres 
const mulheres = [
    {
        id: '1',
        nome: 'Camila Ferrari',
        imagem: 'https://avatars.githubusercontent.com/u/88910225?v=4',
        minibio: 'Farmacêutica em transição de carreira para Desenvolvedora'
    },
    {
        id: '2',
        nome: 'Nicolle Meireles',
        imagem: 'https://www.imagenspng.com.br/wp-content/uploads/2017/03/moana-01-920x1024.png',
        minibio: 'Desenvolvedora e estudante de Computação'
    },
    {
        id: '3',
        nome: 'Ada Lovelace',
        imagem: 'https://s2-techtudo.glbimg.com/7YOBBhghbMF9wsUuBP7UcUh2yXI=/0x342:2439x2307/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/3/FbrmyhQneVYWGUPIe8vA/adalovelace.jpg',
        minibio: 'Matemática e programadora'
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)
    response.json(mulheres)
}

//PATCH
function editaMulher(request, response) {
    function encontraMulher(mulher) {
        if(mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if(request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if(request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    if(request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    response.json(mulheres)
}

//DELETE
function deletaMulher(request, response) {
    function todasMenosEla(mulher) {
        if(mulher.id !== request.params.id) {
            return mulher
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

app.use(router.get('/mulheres', mostraMulheres)) //configurando rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //configurando rota POST /mulheres
app.use(router.patch('/mulheres/:id', editaMulher)) //configurando rota PATCH /mulheres
app.use(router.delete('/mulheres/:id', deletaMulher)) //configurando rota DELETE /mulheres

//PORTA
function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.listen(porta, mostraPorta) //servidor ouvindo a porta