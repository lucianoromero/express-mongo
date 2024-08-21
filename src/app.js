import express from 'express';
import conectaNaDatabase from "./config/dbConnect.js";
import livro  from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.log("Erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
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

export default app;