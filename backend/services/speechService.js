// Placeholder for STT. For now, just echoes text so frontend flow works.
// Later: accept audio and call Whisper / Google STT.

exports.simpleTranscribe = async (spokenText = '') => {
  // simulate light cleanup
  return String(spokenText).trim();
};
