const db = require('../database');

const card = {
    getAllCards(callback) {
        return db.query("SELECT * FROM card", callback);
    },
    getOneCard(id, callback) {
        return db.query("SELECT * FROM card WHERE card_id=?", [id], callback);
    },
    addCard(newCard, callback) {
        return db.query("INSERT INTO card(card_number, card_holder_name) VALUES(?,?)", [newCard.card_number, newCard.card_holder_name], callback);
    },
    updateCard(id, updateCard, callback) {
        return db.query("UPDATE card SET card_number=?, card_holder_name=? WHERE card_id=?", [updateCard.card_number, updateCard.card_holder_name, id], callback);
    },
    deleteCard(id, callback) {
        return db.query("DELETE FROM card WHERE card_id=?", [id], callback);
    }
};

module.exports = card;
