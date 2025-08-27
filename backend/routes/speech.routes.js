const router = require('express').Router();
const { transcribe } = require('../controllers/speechController');

router.post('/', transcribe);    // POST /api/speech
module.exports = router;
