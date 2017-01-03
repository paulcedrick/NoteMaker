let NotesLib = require('../lib/notes');


module.exports = {
  createNote: (req, res) => {
    let title = req.body.title,
      body = req.body.body,
      params = {
        title,
        body
      };

    NotesLib.create(params)
    .then(note => {
      res.status(201).json(note.toJSON);
    })
    .catch(err => {
      res.status(err.errorNo).json(err);
    });
  },
  updateNote: (req, res) => {
    let id = req.body.id;
    let title = req.body.title;
    let body = req.body.body;
    let params = {
      id,
      title,
      body
    };

    NotesLib.update(params)
    .then(note => {
      res.status(201).json(note.toJSON());
    })
    .catch(err => {
      res.status(err.errorNo).json(err);
    });
        
  },
  deleteNote: (req, res) => {
    let id = req.body.id;
    let params = {
      id: id
    };
    NotesLib.delete(params, (success, response) => {
      if (success) {
        res.status(201).json(response.data);
      }
      else {
        res.status(500).json({data: response.data});
      }
    });
  }
};