const router = require('express').Router();
const { listJobs } = require('../controllers/jobsController');

router.get('/', listJobs);       // GET  /api/jobs?skills=react,node&location=Bangalore
module.exports = router;
