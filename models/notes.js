let bookshelf = require('../bookshelf');

let Notes = bookshelf.Model.extend({
  tableName: 'notes'
});

module.exports = Notes;
