const { findJobs } = require('../services/jobService');

exports.listJobs = async (req, res) => {
  try {
    const skills = (req.query.skills || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
    const location = (req.query.location || '').trim();
    const jobs = await findJobs({ skills, location });
    return res.json(jobs);
  } catch (err) {
    console.error('listJobs error:', err);
    return res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};
