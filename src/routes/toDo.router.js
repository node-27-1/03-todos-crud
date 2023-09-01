const { getAll, create, remove } = require('../controllers/toDo.controllers');
const express = require('express');

const toDoRouter = express.Router();

toDoRouter.route("/")
  .get(getAll)
  .post(create);

toDoRouter.route("/:id")
  .delete(remove);

module.exports = toDoRouter;
