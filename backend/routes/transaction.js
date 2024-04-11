const express = require('express');
const router = express.Router();
const transaction = require('../models/transaction_model');

router.get('/transactions', (request, response) => {
    transaction.getAllTransactions((err, result) => {
        if (err) {
            response.send(err);
        } else {
            response.json(result);
        }
    });
});

router.get('/transactions/:id', (request, response) => {
    transaction.getTransactionsByAccount(request.params.id, (err, result) => {
        if (err) {
            response.send(err);
        } else {
            response.json(result);
        }
    });
});

router.post('/transactions', (request, response) => {
    transaction.addTransaction(request.body, (err, result) => {
        if (err) {
            response.send(err);
        } else {
            response.json(result.affectedRows);
        }
    });
});

router.put('/transactions/:id', (request, response) => {
    transaction.updateTransaction(request.params.id, request.body, (err, result) => {
        if (err) {
            response.send(err);
        } else {
            response.json(result.affectedRows);
        }
    });
});

router.delete('/transactions/:id', (request, response) => {
    transaction.deleteTransaction(request.params.id, (err, result) => {
        if (err) {
            response.send(err);
        } else {
            response.json(result.affectedRows);
        }
    });
});

module.exports = router;