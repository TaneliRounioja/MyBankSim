const db=require('../database');

const account={
    getAllAccounts(callback){
        return db.query("SELECT * FROM account", callback);
    },
    getOneAccount(id, callback){
        return db.query("SELECT * FROM account WHERE idcustomer=?", [id], callback);
    },
    getBalance(id, callback){
        return db.query("SELECT account_balance FROM account WHERE idcustomer=?", [id], callback);
    },
    addAccount(newAccount, callback){
        return db.query("INSERT INTO account(fname, account_balance, idcustomer) VALUES(?,?,?)", [newAccount.fname, newAccount.account_balance. newAccount.idcustomer],callback);
    },
    updateAccount(id, updateAccount,callback){
        return db.query("UPDATE account SET fname=?, account_balance=?, idcustomer=? WHERE idaccount=?", [updateAccount.fname, updateAccount.account_balance, updateAccount.idcustomer, id], callback)
    },
    deleteAccount(id,callback){
        return db.query("DELETE FROM account WHERE idaccount=?", [id], callback);
    }
}

module.exports=account;
