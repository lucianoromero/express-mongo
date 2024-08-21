import "dotenv/config"
import app from "./src/app.js";

let port = process.env.PORT;

app.listen(port, () => {
    console.log("Servidor escutando, na porta: ", port)
})