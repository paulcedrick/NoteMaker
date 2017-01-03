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
    return NotesModel.forge({id: id}).fetch();
  },
  // update: (note, params) => {
  //   return note.save({
  //     title: params.title || note.get('title'),
  //     body: params.body || note.get('body')
  //   });
  // },
  // delete: (params, callback) => {
  //   let success = true;
  //   if (params.hasOwnProperty('id')) {
  //     NotesModel.forge({id: params.id})
  //     .fetch({require: true})
  //     .then(note => {
  //       note.destroy()
  //       .then(() => {
  //         callback(success, {message: 'note is deleted'});
  //       })
  //       .catch(err => {
  //         success = false;
  //         callback(success, {data: err});
  //       });
  //     })
  //     .catch(err => {
  //       success = false;
  //       callback(success, {data: err});
  //     });
  //   }
  //   else {
  //     success = false;
  //     callback(success);
  //   }
  // },
  // get: (params, callback) => {
  //   let success = true;

  //   NotesModel.forge({id: params.id})
  //   .fetch()
  //   .then(note => {
  //     if (!note) {
  //       success = false;
  //       callback(success, {data: {}, errNo: 404});
  //     }
  //     else {
  //       callback(true, {
  //         data: {
  //           title: note.get('title'),
  //           body: note.get('body'),
  //           updated_at: note.get('updated_at')
  //         }
  //       });
  //     }
  //   })
  //   .catch(err => {
  //     success = false;
  //     callback(success, {data: err});
  //   });
  // }
};