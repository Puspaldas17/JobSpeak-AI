const router = require('express').Router();
const { generateResume } = require('../controllers/resumeController');

router.post('/', generateResume); // POST /api/resume
module.exports = router;
