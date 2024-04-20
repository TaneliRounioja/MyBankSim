const db = require('../database');

const login={
  checkPin: function(idCard, callback) {
      return db.query('SELECT pin FROM card WHERE idCard = ?',[idCard], callback); 
    }
};
          
module.exports = login;
