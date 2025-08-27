// Placeholder resume builder (no AI yet). Keeps you unblocked for the demo.
// Later: call GPT to enhance summary, bullet points, and format.

exports.buildResume = async (profile) => {
  const {
    name = 'Puspal Das',
    email = 'user@example.com',
    phone = '0000000000',
    location = 'Bangalore',
    summary = 'Motivated candidate seeking opportunities.',
    skills = ['Communication', 'Teamwork'],
    experience = [],   // [{ role, company, duration, points[] }]
    education = []     // [{ degree, institute, year }]
  } = profile;

  const html = `
    <h1>${name}</h1>
    <p>${location} · ${phone} · ${email}</p>
    <h3>Summary</h3><p>${summary}</p>
    <h3>Skills</h3><ul>${skills.map(s=>`<li>${s}</li>`).join('')}</ul>
    <h3>Experience</h3>
    ${experience.length ? experience.map(e=>`
      <div><strong>${e.role}</strong> — ${e.company} (${e.duration})
      <ul>${(e.points||[]).map(p=>`<li>${p}</li>`).join('')}</ul></div>`).join('') : '<p>—</p>'}
    <h3>Education</h3>
    ${education.length ? education.map(ed=>`
      <div>${ed.degree} — ${ed.institute} (${ed.year})</div>`).join('') : '<p>—</p>'}
  `;

  return {
    name, email, phone, location, summary, skills, experience, education,
    html // for preview; later render this to PDF
  };
};
