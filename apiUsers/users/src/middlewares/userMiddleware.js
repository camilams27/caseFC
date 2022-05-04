const User = require('../models/User');

module.exports = {
    async validateLogin(request, response, next){
        try{
            const { login } = request.params;
            const users = await User.find({ login });

            if(!login){
                return response.status(400).json({error: 'campos inválidos'})
            }
            
            if(!users){
                return response.status(404).json({error: 'login nao encontrado'})
            }
        
        }catch (error){
            return responde.status(500).json({error: error.message})
        }
        //pula a função
        return next();
    }
}

