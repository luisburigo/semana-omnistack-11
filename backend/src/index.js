const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors({}));
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Listening in: http://localhost:3333"));


/**
 * ENTIDADES:
 * 
 * Ong:
 * 
 * Caso(Incident):
 * 
 * 
 * FUNCIONALIDADES:
 * 
 * Login da ONG
 * Logout da ONG
 * Cadastro da ONG
 * Cadastrar Casos
 * Deletar Casos
 * Listar Casos de uma ONG
 * 
 * Listar todos os casos
 * Entrar em contato com a ONG
 */