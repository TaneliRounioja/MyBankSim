const db = require('../database');
const bcrypt = require('bcryptjs');
const card = {
    getAllCards(callback) {
        return db.query("SELECT * FROM card", callback);
    },
    getOneCard(id, callback) {
        return db.query("SELECT * FROM card WHERE idCard=?", [id], callback);
    },
    addCard(newCard, callback) {
        bcrypt.hash(newCard.pin,10,function(err,cryptedPin){
        return db.query("INSERT INTO card(idCard, pin, idOwner, idaccount) VALUES(?,?,?,?)", [newCard.idCard, cryptedPin, newCard.idOwner, newCard.idaccount], callback);

        });
    },
    updateCard(id, updateCard, callback) {
        bcrypt.hash(updateCard.pin,10,function(err,cryptedPin){

        return db.query("UPDATE card SET pin=?, idOwner=?, idaccount=? WHERE idCard=?", [cryptedPin, updateCard.idOwner, updateCard.idaccount, id], callback);
        });
    },
    deleteCard(id, callback) {
        return db.query("DELETE FROM card WHERE idCard=?", [id], callback);
    }
};

module.exports = card;
