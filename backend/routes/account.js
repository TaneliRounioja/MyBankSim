const express=require('express');
const router=express.Router();
const account=require('../models/account_model');

router.get('/', function(request, response){
    account.getAllAccounts(function(err,result){
        if(err){
            response.send(err);
        }
        else{
            response.json(result);
        }
    })
});

router.get('/:id', function(request, response){
    account.getOneAccount(request.params.id, function(err, result){
        if(err){
            response.send(err);
        }
        else{
            response.json(result[0]);
        }
    })
});

router.get('/balance/:id?', function(request,response){
    account.getBalance(request.params.id, function(err,result){
        if(err){
            response.send(err);
        }
        else{
            response.json(result[0]);
        }
    })
});

router.post('/', function(request,response){
    account.addAccount(request.body,function(err,result){
        if(err){
            response.send(err);
        }
        else{
            response.json(result.affectedRows);
        }
    })
});

router.put('/:id',function(request, response){
    account.updateAccount(request.params.id, request.body, function(err,result){
        if(err){
            response.send(err);
        }
        else{
            response.json(result.affectedRows);
        }
    })
});

router.delete('/:id',function(request, response){
    account.deleteAccount(request.params.id, function(err,result){
        if(err){
            response.send(err);
        }
        else{
            response.json(result.affectedRows);
        }
    })
});

module.exports=router;