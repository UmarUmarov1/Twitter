const { Router } = require('express');
const router = Router();
const TwittController = require('../controllers/twitts.controller');

router.post('/twitts', TwittController.addNewTwitt);
router.patch('/twitts/:id', TwittController.changeTwitts);
router.get('/twitts', TwittController.getAllTwitts);

module.exports = router;