const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/', eventController.addEvent);
router.get('/', eventController.getAllEvents);

module.exports = router;