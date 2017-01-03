let express = require('express');
let router = express.Router();
let NotesController = require('../controllers/notes');
let NotesApi = require('../api/notes');


router.get('/', NotesController.getListOfNotes);
router.get('/edit', NotesController.getEditFormPage);
router.get('/create', NotesController.getCreateFormPage);
router.get('/:id', NotesController.getNote);

router.post('/', NotesApi.createNote);
router.put('/:id', NotesApi.updateNote);
// router.delete('/:id', NotesApi.deleteNote);

module.exports = router;
