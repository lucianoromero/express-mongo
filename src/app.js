import express from 'express';

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        título: "O Senhor dos Anéis"
    },
    {
        id: 2,
        título: "O Hobbit"
    }
];

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
})

app.get("/livros/:id", (req, res) => {
    res.status(200).json(buscaLivro(req.params.id));
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivroIndex(req.params.id);
    livros[index].titulo = req.body.titulo;
    //TODO melhorar esse retorno aqui para retornar o livro atualizado
    res.status(201).json(buscaLivro(req.params.id));
})

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivroIndex(req.params.id);
    livros.splice(index, 1);
    res.status(200).send('Livro removido com sucesso.');
});

function buscaLivroIndex(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}


function buscaLivro(id) {
    const livro = livros.find(livro => livro.id === Number(id));
    return livro || "Livro não encontrado";
}

export default app;