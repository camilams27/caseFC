const mongoose = require('mongoose');

function connectDatabase() {
    //conectar com o banco, configurações padrão de conexão
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    //informações de conexão do mongoose
    const bd = mongoose.connection;
    //quando acontecer um erro
    bd.on('error', (error)=> console.log(error));
    //faz uma fez, quando se conectar com bd
    bd.once('open', ()=> console.log('conectado com o banco de dados'));
};

module.exports = connectDatabase;