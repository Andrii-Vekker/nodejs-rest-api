const express = require('express');
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const schema = require("../../schemas/contacts")

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/', validateBody(schema.schema),  ctrl.addCont)

router.delete('/:id', ctrl.deleteContact)

router.put('/:id', ctrl.updContact);

module.exports = router
