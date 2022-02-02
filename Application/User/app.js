var user = require('./user.js');
var user1 = new user('John', 'Smith');
module.exports = function() {
    return user1.fullName();
};