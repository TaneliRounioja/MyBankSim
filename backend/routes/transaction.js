const express = require('express');
const router = express.Router();
const transaction = require('../models/transaction_model');

router.get('/', function(request, response) {
    console.log("GET request received for /transaction");
    
    transaction.getAllTransactions(function(err, result) {
        if (err) {
            console.error("Error retrieving transactions:", err);
            response.status(500).json({ error: "Failed to retrieve transactions", errorMessage: err.message });
        } else {
            console.log("Transactions retrieved successfully:", result);
            response.status(200).json({ Transactions: result });
        }
    });
});


router.get('/:id', function(request, response) {
    const accountId = request.params.id;

    transaction.getTransactionsByAccount(accountId, function(err, result) {
        if (err) {
            console.error("Error retrieving transactions for account ID:", accountId, err);
            response.status(500).json({ error: "Failed to retrieve transactions", errorMessage: err.message });
        } else {
            console.log("Transactions retrieved successfully for account ID:", accountId);
            console.log("Transactions:", result);
            response.status(200).json({ Transactions: result });
        }
    });
});


router.post('/', (request, response) => {
    const transactionData = request.body;
 
    if (!transactionData.idaccount) {
        return response.status(400).json({ error: "idaccount is required" });
    }


    transaction.addTransaction(transactionData, (err, result) => {
        if (err) {
            console.error("Error adding transaction:", err);
            response.status(500).json({ error: "Failed to add transaction" });
        } else {
            console.log("Transaction added successfully");
            response.status(200).json(result.affectedRows);
        }
    });
});

router.put('/:id', (request, response) => {
    const transactionId = request.params.id;
    transaction.updateTransaction(transactionId, request.body, (err, result) => {
        if (err) {
            console.error("Error updating transaction:", err);
            response.status(500).json({ error: "Failed to update transaction" });
        } else {
            if (result.affectedRows === 0) {
                console.log("Transaction not found or already updated");
                response.status(404).json({ message: "Transaction not found or already updated" });
            } else {
                console.log("Transaction updated successfully");
                response.status(200).json({ message: "Transaction updated successfully" });
            }
        }
    });
});

router.delete('/:id', function(request, response) {
    const transactionId = parseInt(request.params.id);
    transaction.deleteTransaction(transactionId, function(err, result) {
        if (err) {
            console.error("Error deleting transaction:", err);
            response.status(500).json({ error: "Failed to delete transaction" });
        } else {
            if (result.affectedRows === 0) {
                console.log("Transaction not found or already deleted");
                response.status(404).json({ message: "Transaction not found or already deleted" });
            } else {
                console.log("Transaction deleted successfully");
                response.status(200).json({ message: "Transaction deleted successfully" });
            }
        }
    });
});


module.exports = router;