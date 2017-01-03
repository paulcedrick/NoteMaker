'use strict';

let NotesLib = require('../lib/notes');

module.exports = {
  getEditFormPage: (req, res) => {
    res.render();
  },
  getNote: (req, res) => {
    res.render();
  },
  getListOfNotes: (req, res) => {
    NotesLib.getAllNotes()
    .then(notes => {
      res.render('notes/index', {
        title: 'NoteMaker | List of Notes',
        notes: notes.toJSON()
      });
    })
    .catch(err => {
      res.status(500).json({error: true, message: err});
    });
  },
  getCreateFormPage: (req, res) => {
    res.render('notes/create', {
      title: 'NoteMaker | Create Note'
    });
  }

};
