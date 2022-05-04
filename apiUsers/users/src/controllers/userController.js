const { response } = require('express');

const User = require('../models/User');

module.exports = {
    async index(request, response){
        try{
            const users = await User.find();
            return response.status(200).json( {users} )
        }catch (err){
            response.status(500).json( {error: err.message})
        }
    },
    async createUser(request, response){
        const { 
            login, 
            password, 
            name,
            email,
            telephone,
            cpf,
            birthDate,
            nameMother
        } = request.body;

        const includeDate = new Date();
        const alterDate = new Date();

        if( !login || !password || !name){
            return response.status(400).json({ error: 'login ou senha inválidos'})
        }

        const user = new User({
            name,
            login,
            password,
            email,
            telephone,
            cpf,
            birthDate,
            nameMother,
            includeDate,
            alterDate
        })

        try{
            await user.save();
            return response.status(201).json({message: 'usuário adicionado'})
        }catch (error){
            response.status(500).json({error: error.message})
        }
    },
    async updateUser(request, response){
        try{
            const { password, name } = request.body;
            const { login } = request.params;
        if(!login && !password && !name){
            return response.status(400).json({error: 'informe os campos'});
        }

        await User.findOneAndUpdate({ login }, { name, password })
        return response.status('200').json({message: 'usuário editado'})
        
        } catch (error) {
            response.status(500).json({error: error.message})
        }
        
    },
    async deleteUser(request, response){
        try{
            const { login } = request.params;
            await User.remove({ login })
            return response.status(200).json({message : 'usuário deletado.'})
        }catch(error){
            response.status(500).json({error: error.message})
        }
    }
}