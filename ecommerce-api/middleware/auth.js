const jwt=require('jsonwebtoken')

// The purpose of this middleware is to check if a request has a valid JWT before allowing access to a protected route. If the token is valid, the request proceeds. If not, it returns an unauthorized error.


// req: Represents the request object. It contains information about the HTTP request, such as headers, body, parameters, and more.

// res: Represents the response object. It is used to send a response back to the client.

// next: A function that is called to pass control to the next middleware function in the stack.

const protect=(req,res,next)=>
{
    let token=req.headers.authorization;
    if(token &&token.startswith('Bearer'))
    {
        try{
            token=token.split(' ')[1];
            const decode=jwt.verify(token,process.env.JWT);
            req.user=decode;
            next();
        }
        catch(error)
        {
            res.status(401).json({message:"NOT AUTHORIZED"})
        }
    }
    else{
        res.status(401).json({message:"NO TOKEN PROVIDED"})
    }
}

module.exports=protect;