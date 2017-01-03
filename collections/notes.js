let bookshelf = require('../bookshelf');
let NotesModel = require('../models/notes');

let NotesCollection = bookshelf.Collection.extend({
  model: NotesModel
});

module.exports = NotesCollection;
