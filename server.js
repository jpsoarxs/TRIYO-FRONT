const express = require("express");
var history = require("connect-history-api-fallback");
const serverStatic = require("serve-static");
const path = require("path");

const app = express();

app.use(history());
app.use("/", serverStatic(path.join(__dirname, "dist")));

const port = process.env.PORT || 8080;
app.listen(port);

console.log("Servidor rodando na porta:", port);
