'use strict';

let NotesCollection = require('../collections/notes');
let NotesModel = require('../models/notes');
let moment = require('moment');
let Promise = require('bluebird');

module.exports = {
  getAllNotes: () => {
    return NotesCollection.forge().fetch();
  },
  create: (params) => {
    if (params.title.length > 0 && params.body.length > 0) {
      let data = {
        title: params.title,
        body: params.body,
        created_at: moment().format('YYYY-MM-DD HH:mm:ss').toString(),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss').toString()
      };

      return NotesModel.forge(data).save();
    }
    else {
      return Promise.reject({errorNo: 400, message: 'Invalid Input'});
    }
  },
  getNoteById: (id) => {
    if (id == null || id === '') {
      return Promise.reject({errorNo: 400, message: 'Invalid id'});
    }
    return NotesModel.forge({id: id}).fetch();
  },
  update: (note, params) => {
    return note.save({
      title: params.title || note.get('title'),
      body: params.body || note.get('body')
    });
  },
  delete: (note) => {
    if (note && note.hasOwnProperty('destroy')) {
      return note.destroy();  
    }
    else {
      return Promise.reject({errorNo: 400, message: 'Invalid note object'});  
    }
  }
};