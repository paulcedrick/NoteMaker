'use strict';

let test = require('tape');
let sinon = require('sinon');
let proxyquire = require('proxyquire');
let Promise = require('bluebird');

test('NotesApi.createNote', t => {
  let create = sinon.stub().returns(Promise.resolve());
  let NotesApi = proxyquire('../../api/notes', {
    '../lib/notes': {create: create}
  });

  let req = {
    body: {
      title: 'Test',
      body: 'test',
    }
  };

  let res = {
    status: function () {
      return {
        json: function () {}
      };
    }
  };
  NotesApi.createNote(req, res);

  t.equal(create.callCount, 1, 'should call create function of NotesLib');
  t.end();
});

// test('updateNote function in api should call update function of note service', t => {
//   let update = sinon.spy();
//   let NotesApi = proxyquire('../../api/notes', {
//     '../services/notes': {update: update}
//   });

//   let req = {
//     body: {
//       id: 1,
//       title: 'Test',
//       body: 'test'
//     }
//   };

//   let res = {};
//   NotesApi.updateNote(req, res);

//   t.equal(update.callCount, 1);
//   t.end();
// });

// test('deleteNote function in api should call delete function of note service', t => {
//   let del = sinon.spy();
//   let NotesApi = proxyquire('../../api/notes', {
//     '../services/notes': {delete: del}
//   });

//   let req = {
//     body: {
//       id: 1,
//       title: 'Test',
//       body: 'test'
//     }
//   };

//   let res = {};
//   NotesApi.deleteNote(req, res);

//   t.equal(del.callCount, 1);
//   t.end();
// });