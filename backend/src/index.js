const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rotas / Recurso
 * 
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end.
 * POST: Criar uma informação no back-end.
 * PUT: Alterar uma informação no back-end.
 * DELETE: Deletar uma informação no back-end.
 */

 /**
  * 
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros utilizados na rota após "?" (Filtros, páginação)
  * Route Params: Parâmetros utilizados para identificar recursos. 
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos.
  */

  /**
   * SQL, SQLite, PosgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT / FROM users
    * Query Builder: table('user').select('*').where()
    */

app.listen(3333);