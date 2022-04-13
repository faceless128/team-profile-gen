const Intern = require('../lib/Intern');

test('adds school number for intern', () => {
    const intern = new Intern('Michael Jackson');
    intern.school = 'Trilogy';

    expect(intern.school).toBe('Trilogy');
});

test('returns school number of intern', () => {
    const intern = new Intern('Michael Jackson');
    intern.school = 'Trilogy';
 
    expect(intern.school).toBe(intern.getSchool());
})

test('returns job role of intern', () => {
    const intern = new Intern('Michael Jackson');
    intern.role = 'Intern';

    expect(intern.role).toBe(intern.getRole());
})
