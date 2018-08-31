var mysql = require('../config/mysql.config');

var fetchUsers = {};

fetchUsers.fetch = (callback) => {
    const sql = `SELECT * FROM users`;
    mysql.query(sql, function(err, result) {
        if(err) {
            callback(err);
        }
        callback(null, result);
    });
};

module.exports = fetchUsers;