const express=require('express');
const router=express.router();
const student=require('..models/card_model');

router.get('/',function(request, response){
    card.getAllCard(function(err, result){
        if(err){
            response.send(err);
        }
        else{
            console.log(result);
            response.json(result);
        }
    })
});

router.get('/:usern',function(request, response){
    card.GetOneCard(request.params.usern,function(err, result){
        if(err){
            response.send(err);
        }
        else{
            console.log(result);
            response.json(result[0]);
        }
    })  
});

router.post('/',function(request,response){
    card.addCard(request.body, function(err,result){
        if(err){
            response.send(err);
        }
        else{
            response.json(result);

        }
    });
});

router.put('/:usern', function(request, response){
    card.updateCard(request.params.usern, request.body, function(err, result){
        if(err){
            response.send(err);
        }
        else{

            console.log(result.affectedRows);
            response.json(result.affectedRows);
        }
    });
});

router.delete('/:usern', function(request, response){
    card.deleteCard(request.params.usern, function(err,result){
        if(err){
            response.send(err);
        }
        else{

            console.log(result.affectedRows);
            response.json(result.affectedRows);
        }
    });
});


module.exports=router;