// import http from "http";
import app from "./src/app.js";
import dotenv from 'dotenv';
dotenv.config();

const appName = process.env.APP_NAME;
let port = process.env.PORT;

const rotas = {
    "/": "Curso de Express API",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
};

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(rotas[req.url]);
// })

app.listen(port, () => {
    console.log("Servidor escutando, na porta: ", port)
})