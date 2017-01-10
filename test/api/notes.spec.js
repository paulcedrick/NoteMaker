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

  let toJson = sinon.spy();
  let statusObj = {
    json: toJson
  };
  let status = sinon.stub().returns(statusObj);
  let req = {
    body: {
      title: 'Test',
      body: 'test',
    }
  };

  let res = {
    status: status
  };
  NotesApi.createNote(req, res);

  t.equal(create.callCount, 1, 'should call create function of NotesLib');
  setTimeout(() => {
    t.ok(toJson.calledOnce, 'should return json');
    t.end();
  }, 300);
});

test('NotesApi.updateNote', t => {
  let update = sinon.stub().returns(Promise.resolve());
  let getNoteById = sinon.stub().returns(Promise.resolve());
  let NotesApi = proxyquire('../../api/notes', {
    '../lib/notes': {getNoteById: getNoteById, update: update}
  });

  let req = {
    body: {
      id: 1,
      title: 'Test',
      body: 'test'
    }
  };

  let toJson = sinon.spy();
  let statusObj = {
    json: toJson
  };
  let status = sinon.stub().returns(statusObj);

  let res = {
    status: status
  };

  NotesApi.updateNote(req, res);
  setTimeout(() => {
    t.equal(update.callCount, 1, 'should call update function');
    t.equal(getNoteById.callCount, 1, 'should call getNoteById of NotesLib');
    t.ok(toJson.calledOnce, 'should return json');
    t.end();
  }, 300);
});

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