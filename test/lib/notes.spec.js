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

test('NotesLib.getNoteById should return a promise', t => {
  let params = {
    id: 1
  };

  NotesLib.getNoteById(1)
  .then(note => {
    t.ok(params.id == note.id);
    t.end();  
  });
  
});

// test('NotesLib.update should return a promise', t => {
//   let params = {
//     id: 1,
//     title: 'alsdkajsdkl',
//     body: 'Lorem Ipsum Ipsum' 
//   };
//   let obj = NotesLib.update(params);

//   t.ok(obj && obj.then == 'function');
//   t.end();
// });