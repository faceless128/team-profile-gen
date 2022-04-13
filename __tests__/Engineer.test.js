const Engineer = require('../lib/Engineer');

test('adds github username for engineer', () => {
    const engineer = new Engineer('Michael Jackson');
    engineer.github = 'thriller58';

    expect(engineer.github).toBe('thriller58');
});

test('returns office number of engineer', () => {
    const engineer = new Engineer('Michael Jackson');
    engineer.github = 'thriller58';
 
    expect(engineer.github).toBe(engineer.getGithub());
})

test('returns job role of engineer', () => {
    const engineer = new Engineer('Michael Jackson');
    engineer.role = 'Engineer';

    expect(engineer.role).toBe(engineer.getRole());
})
