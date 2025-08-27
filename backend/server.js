// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));

// Routes
const resumeRoutes = require('./routes/resume.routes');
const jobRoutes = require('./routes/jobs.routes');
const speechRoutes = require('./routes/speech.routes');

app.get('/', (req, res) => res.send('JobSpeak AI backend running ✅'));
app.use('/api/resume', resumeRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/speech', speechRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));
