'use strict';

let test = require('tape');
let sinon = require('sinon');
let proxyquire = require('proxyquire');
// let request = require('supertest');

test('NotesController.getCreateFormPage', t => {
  let req = {};
  let res = {};
  let next = {};

  let spy = res.render = sinon.spy();

  let NotesController = require('../../controllers/notes');

  NotesController.getCreateFormPage(req, res, next);

  t.ok(spy.calledOnce, 'must call render function');
  t.end();
});

test('NotesController.getListOfNotes', t => {
  let req = {};
  let res = {};
  let next = {};
  let spy = res.render = sinon.spy();

  // let getAllNotes = sinon.stub().yields(true, '{a:b}');

  let NotesController = require('../../controllers/notes');
  // let NotesController = proxyquire('../../controllers/notes', {
  //   '../services/notes': {getAllNotes: getAllNotes}
  // });

  NotesController.getListOfNotes(req, res, next);
  setTimeout(function (){
    t.ok(spy.calledOnce, 'must call render function');
    t.end();
  }, 300);

});

test('NotesController.getEditFormPage', t => {
  let req = {}, res = {}, next = {};

  let spy = res.render = sinon.spy();

  let NotesController = require('../../controllers/notes');

  NotesController.getEditFormPage(req, res, next);

  setTimeout(function (){
    t.ok(spy.calledOnce, 'must call render function');
    t.end();
  }, 300);
});

test('NotesController.getNote', t => {
  let req = {}, res = {}, next = {};

  let spy = res.render = sinon.spy();

  let NotesController = require('../../controllers/notes');

  NotesController.getNote(req, res, next);

  setTimeout(function (){
    t.ok(spy.calledOnce, 'must call render function');
    t.end();
  }, 300);
});
