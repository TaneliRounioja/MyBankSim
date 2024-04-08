const db = require('../database');

const customer = {
    getAllCustomers(callback) {
        return db.query("SELECT * FROM customer", callback);
    },
    getOneCustomer(id, callback) {
        return db.query("SELECT * FROM customer WHERE idcustomer=?", [id], callback);
    },
    addCustomer(newCustomer, callback) {
        return db.query("INSERT INTO customer(fname, lname, local_address, Pnumber) VALUES(?,?,?,?)", [newCustomer.fname, newCustomer.lname, newCustomer.local_address, newCustomer.Pnumber], callback);
    },
    updateCustomer(id, updateCustomer, callback) {
        return db.query("UPDATE customer SET fname=?, lname=?, local_address=?, Pnumber=? WHERE idcustomer=?", [updateCustomer.fname, updateCustomer.lname, updateCustomer.local_address, updateCustomer.Pnumber, id], callback);
    },
    deleteCustomer(id, callback) {
        return db.query("DELETE FROM customer WHERE idcustomer=?", [id], callback);
    }
};

module.exports = customer;
