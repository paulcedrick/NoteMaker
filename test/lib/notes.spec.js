'use strict';

let test = require('tape');
let sinon = require('sinon');
let NotesLib = require('../../lib/notes');
let noteId = 1;

test('NotesLib.getAllNotes', t => {
  let obj = NotesLib.getAllNotes();
  t.ok(obj && typeof obj.then == 'function', 'should return a promise');
  t.end();
});

test('NotesLib.create', t => {
  let params = {
    title: 'ASkljasdklj',
    body: 'Lorem Ipsum'
  };

  let obj = NotesLib.create(params)
  .then(note => {
    noteId = note.get('id');
  });

  t.ok(obj && typeof obj.then == 'function', 'should return a promise');

  params = {
    title: '',
    body: ''
  };

  NotesLib.create(params)
  .catch(err => {
    t.ok(err.errorNo === 400, 'should validate the input');
    t.end();
  });
});

test('NotesLib.getNoteById', t => {
  let params = {
    id: 1
  };
  let obj = NotesLib.getNoteById(params.id);
  t.ok(obj && typeof obj.then == 'function', 'should return a promise');

  params.id = null;
  NotesLib.getNoteById(params.id)
  .catch(e => {
    t.equal(e.errorNo, 400, 'should validate the parameter');
    t.end();
  });
  
});

test('NotesLib.update', t => {
  let params = {
    id: 1,
    title: 'alsdkajsdkl',
    body: 'Lorem Ipsum Ipsum' 
  };
  let obj = {};
  let fakenote = {};
  fakenote.save = sinon.spy();

  NotesLib.update(fakenote, params);
  t.ok(fakenote.save.calledOnce, 'should call the save function of note object');


  NotesLib.getNoteById(params.id)
  .then(note => {
    obj = NotesLib.update(note, params);
    return obj;
  })
  .then((note) => {
    t.ok(obj && typeof obj.then == 'function', 'should return a promise');
    t.ok(note.get('id') === params.id, 'should return the edited item');
    t.end();
  });
});