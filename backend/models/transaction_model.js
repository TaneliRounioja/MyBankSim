const db=require('../database');

const transaction = {   
    getAllTransactions(callback){   // Retrieves all transactions from the database //
        return db.query("SELECT * FROM transaction", callback);
    },
    getTransactionsByAccount(id, callback){     // Retrieves transactions associated with a specific amount //
        return db.query("SELECT * FROM transaction WHERE idaccount=?", [id], callback);
    },
    addTransaction(newTransaction, callback){   // Adds a new transaction to the database //
        return db.query("INSERT INTO transaction(idaccount, transaction_date, transaction, amount, account_number) VALUES(?,?,?,?,?)",
            [newTransaction.idaccount, newTransaction.transaction_date, newTransaction.transaction, newTransaction.amount, newTransaction.account_number], callback);
    },
    updateTransaction(id, updateTransaction, callback) {    // Updates an existing transaction in the database
        return db.query(
            "UPDATE transaction SET idaccount=NULL, transaction_date=NULL, transaction=NULL, amount=NULL, Account_Number=NULL WHERE idAccount=?",
            [updateTransaction.idaccount, updateTransaction.transaction_date, updateTransaction.transaction, updateTransaction.amount, updateTransaction.account_number, id],
            callback);
    },
    deleteTransaction(id, callback) {
        return db.query("DELETE FROM transaction WHERE idAccount =1",[id], callback);
    }
}

module.exports = transaction;