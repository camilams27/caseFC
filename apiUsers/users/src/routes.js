const express = require('express');

//responsável por realizar a busca em uma rota
const routes = express.Router();
/*  get:pegar; 
    post:envia; put:editar por compelto; 
    patch: modifica uma parte; 
    delete: exclui;    
*/
const userController = require('./controllers/userController');
const userMiddleware = require('./middlewares/userMiddleware');

/*  req - o que esta mandando pro back
    res - o que o back estao mandando*/
routes.get('/', (req, res)=> res.send('hi world'))

routes.get('/users', userController.index);
routes.post('/users', userController.createUser);
routes.put('/users/:login', userMiddleware.validateLogin, userController.updateUser);
routes.delete('/users/:login', userMiddleware.validateLogin, userController.deleteUser)

module.exports = routes