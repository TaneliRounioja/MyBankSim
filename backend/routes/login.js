const express=require('express');
const router=express.Router();
const login=require('../models/login_model');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();

router.get('/', function(request, response){
    response.send('GET-pyyntö vastaanotettu');
});

router.post('/',function(request, response){
    if(request.body.idCard && request.body.pin){
        login.checkPin(request.body.idCard, function(err,result){
            if(err){
                console.log(err.errno);
                response.json(err.errno);
            }
            else{
                if(result.length > 0){
                    bcrypt.compare(request.body.pin, result[0].pin, function(err, compareResult){
                        if(compareResult){
                            console.log('Kirjauduttu onnistuneesti');
                            const token=genToken({idCard: request.body.idCard});
                            response.send(token);
                        }
                        else {
                            console.log("Väärä pin koodi");
                            response.send(false);
                        }
                    })
                }
                else {
                    console.log("Tunnusta ei ole");
                    response.send(false);
                }

            }
        });
    }
    else {
        console.log("Tunnus tai pin koodi puuttuu")
        response.send(false);
    }
});

function genToken(idCard){
    dotenv.config();
    return jwt.sign(idCard, process.env.MY_TOKEN, {expiresIn: '1800s'});
}

module.exports=router;
