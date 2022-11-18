const { Router } = require('express');
const router = Router();
const SaveController = require('../controllers/saves.controller');

router.post('/saves', SaveController.addSaveBase);

module.exports = router;