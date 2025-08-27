// Simple in-memory dataset for hackathon demo.
// Later: replace with real job APIs / database.
const JOBS = [
  { id: 1, title: 'Frontend Developer', company: 'XYZ', location: 'Bangalore', skills: ['react', 'html', 'css'] },
  { id: 2, title: 'Junior Node.js Developer', company: 'ABC', location: 'Kolkata', skills: ['node', 'javascript'] },
  { id: 3, title: 'Full-Stack Intern', company: 'Acme', location: 'Bangalore', skills: ['react', 'node'] },
  { id: 4, title: 'Data Entry Associate', company: 'Delta', location: 'Kolkata', skills: ['typing', 'excel'] }
];

exports.findJobs = async ({ skills = [], location = '' }) => {
  const loc = location.toLowerCase();
  if (!skills.length && !loc) return JOBS;

  return JOBS.filter(job => {
    const jobSkills = job.skills || [];
    const skillMatch = !skills.length || skills.some(s => jobSkills.includes(s));
    const locationMatch = !loc || job.location.toLowerCase().includes(loc);
    return skillMatch && locationMatch;
  });
};
