const db=require('../database');

const account={
    getAllAccounts(callback){
        return db.query("SELECT * FROM account", callback);
    },
    getOneAccount(id, callback){
        return db.query("SELECT * FROM account WHERE idcustomer=?", [id], callback);
    },
    getBalance(id, callback){
        return db.query("SELECT balance FROM account WHERE idcustomer=?", [id], callback);
    },
    addAccount(newAccount, callback){
        return db.query("INSERT INTO account(fname, balance, idcustomer) VALUES(?,?,?)", [newAccount.fname, newAccount.balance. newAccount.idcustomer],callback);
    },
    updateAccount(id, updateAccount,callback){
        return db.query("UPDATE account SET fname=?, balance=?, idcustomer=? WHERE idaccount=?", [updateAccount.fname, updateAccount.balance, updateAccount.idcustomer, id], callback)
    },
    deleteAccount(id,callback){
        return db.query("DELETE FROM account WHERE idaccount=?", [id], callback);
    }
}

module.exports=account;
