let bookshelf = require('../bookshelf');

let Users = bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = Notes;
