const db=require('../database');

const transfer = {
    debitTransfer(dTransfer, callback){
        return db.query("call debit_transfer(?,?,?)", [dTransfer.sender_id, dTransfer.recipient_id, dTransfer.amount], callback);
    },
    creditTransfer(cTransfer,callback){
        return db.query("call credit_transfer(?,?,?)", [cTransfer.sender_id, cTransfer.recipient_id, cTransfer.amount], callback);
    }
}

module.exports=transfer;



