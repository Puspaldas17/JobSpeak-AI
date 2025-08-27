const { simpleTranscribe } = require('../services/speechService');

exports.transcribe = async (req, res) => {
  try {
    // MVP: accept plain text as "spokenText" to keep demo moving;
    // later replace with real audio upload + Whisper API
    const { spokenText = '' } = req.body || {};
    const text = await simpleTranscribe(spokenText);
    return res.json({ text });
  } catch (err) {
    console.error('transcribe error:', err);
    return res.status(500).json({ error: 'Transcription failed' });
  }
};
