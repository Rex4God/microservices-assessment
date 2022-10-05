
const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')



const auth = async(req, res, next) => {
    //check header
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
    throw new UnauthenticatedError('You are not Authorize to Access this Resources!!!');
    }
    const token = authHeader.split(' ')[1]
    try{
    const payload =  await jwt.verify(token, process.env.JWT_SECRET)
    //attach the user to the job routes
    
    req.user ={email: payload.email}
    next()
    }catch(err){
    throw new UnauthenticatedError('Authentication invalid')

    }
}


module.exports =auth;