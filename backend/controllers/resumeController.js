const { buildResume } = require('../services/resumeService');

exports.generateResume = async (req, res) => {
  try {
    // Expecting { name, email, phone, location, summary, skills[], experience[], education[] }
    const profile = req.body || {};
    const resume = await buildResume(profile); // returns structured resume + html
    return res.json({ ok: true, resume });
  } catch (err) {
    console.error('generateResume error:', err);
    return res.status(500).json({ ok: false, error: 'Resume generation failed' });
  }
};
