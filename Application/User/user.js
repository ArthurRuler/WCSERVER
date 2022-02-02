module.exports = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    };
};

// Andrew Philip Mendiola
// 02/02/22
// WD - 201