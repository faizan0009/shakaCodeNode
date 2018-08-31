var mysql = require('../config/mysql.config');

var signupModel = {};

signupModel.signUp = (email, password, userType, callback) => {
    const sql = `INSERT INTO users(email, password, userType) Values (\'${email}\' , \'${password}\' , \'${userType}\')`;
    mysql.query(sql, function(err, result) {
        if(err) {
            callback(err);
        }
        callback(null, "success");
    });
};


signupModel.edit = (email, password, userType, id, callback) => {
    const sql = `UPDATE users SET email=\'${email}\' , password=\'${password}\' , userType=\'${userType}\' WHERE id=\'${id}\'`;
    mysql.query(sql, function(err, result) {
        if(err) {
            callback(err);
        }
        callback(null, "success");
    });
};

module.exports = signupModel;