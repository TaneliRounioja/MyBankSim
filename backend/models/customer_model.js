const db = require('../database');

const card = {
    getAllCards(callback) {
        return db.query("SELECT * FROM card", callback);
    },
    getOneCard(id, callback) {
        return db.query("SELECT * FROM card WHERE card_id=?", [id], callback);
    },
    addCard(newCard, callback) {
        
        return db.query("INSERT INTO card(idCard, pin, idOwner, idaccount) VALUES(?,?,?,?)", [newCard.idCard, cryptedPin, newCard.idOwner, newCard.idaccount], callback);

        
    },
    updateCard(id, updateCard, callback) {
       

        return db.query("UPDATE card SET pin=?, idOwner=?, idaccount=? WHERE idCard=?", [cryptedPin, updateCard.idOwner, updateCard.idaccount, id], callback);
      
    },
    deleteCard(id, callback) {
        return db.query("DELETE FROM card WHERE card_id=?", [id], callback);
    }
};

module.exports = card;
