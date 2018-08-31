var mysql = require('../config/mysql.config');

var userModel = {};

userModel.findByUsername = (email, callback) => {
    const sql = `SELECT * FROM users where email = \'${email}\'`;
    mysql.query(sql, function(err, result) {
        if(err) {
            callback(err);
        }
        callback(null, result[0]);
    });
};

userModel.delete = (id, callback) => {
    const sql = `DELETE FROM users where id = \'${id}\'`;
    mysql.query(sql, function(err, result) {
        if(err) {
            callback(err);
        }
        callback(null, "success");
    });
};

module.exports = userModel;