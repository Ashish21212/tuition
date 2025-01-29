const express = require("express");
const router = express.Router();
const classController = require('../controllers/class')

router.get('/classs',classController.get_all_class)

router.post('/class',classController.create_class);

module.exports = router;