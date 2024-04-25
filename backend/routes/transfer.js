const express = require('express');
const router = express.Router();
const transfer = require('../models/transfer_model');

router.post('/debittransfer', function(request,response){
    transfer.debitTransfer(request.body, function(err,dbResult){
        if(err){
            response.json(err);
        }
        else{
            console.log(dbResult);
            response.json(dbResult);
        }
    })
});

router.post('/credittransfer', function(request,response){
    transfer.creditTransfer(request.body, function(err,dbResult){
        if(err){
            response.json(err);
        }
        else{
            console.log(dbResult);
            response.json(dbResult);
        }
    })
});

module.exports=router;
