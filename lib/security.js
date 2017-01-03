let bcrypt = require('bcrypt');

let cryptPassword = function(password, callback) {
   bcrypt.genSalt(10, function(err, salt) {
    if (err)
      return callback(err);

    bcrypt.hash(password, salt, function(err, hash) {
      return callback(err, hash);
    });

  });
};

let generatePassword = function (rawPassword, salt, callback) {
  bcrpyt.hash(rawPassword, salt, function (err, hash) {
      if (err)
        return callback(err);

      return callback(hash);
  });
}

let comparePassword = function(password, userPassword, callback) {
   bcrypt.compare(password, userPassword, function(err, isPasswordMatch) {
      if (err)
        return callback(err);
      return callback(null, isPasswordMatch);
   });
};

module.exports = {
  cryptPassword,
  generatePassword,
  comparePassword
}
