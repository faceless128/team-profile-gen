// Generate team member profile cards
const getTheTeam = teamMembers => {
    return `
            <section class="my-3" id="profile">
                <div class="flex-row justify-space-around">
        ${teamMembers
            .filter(({ role }) => role === 'Manager')
            .map(({ name, id, email, office, role }) => {
                return `
                    <div class="col-12 col-md-4 mb-2 bg-dark text-light p-3 flex-column">
                    <h3 class="profile-item-title">${name}
                        <br><i class="fas fa-coffee mr-2"></i>${role}</h3>
                    <h5 class="profile-special">
                        ID: ${id}
                    </h5>
                    <h5 class="profile-special">
                        Email: <a href="mailto:${email}" class="btn">${email}</a>
                    </h5>
                    <h5 class="profile-special">
                        Office Number: ${office}
                    </h5>
                    </div>
                `;
            })
            .join('')}
        ${teamMembers
            .filter(({ role }) => role === 'Engineer')
            .map(({ name, id, email, github, role }) => {
                return `
                    <div class="col-12 col-md-4 mb-2 bg-dark text-light p-3 flex-column">
                    <h3 class="profile-item-title">${name}
                        <br><i class="fas fa-glasses mr-2"></i>${role}</h3>
                    <h5 class="profile-special">
                        ID: ${id}
                    </h5>
                    <h5 class="profile-special">
                        Email: <a href="mailto:${email}" class="btn">${email}</a>
                    </h5>
                    <h5 class="profile-special">
                        Github: <a href="https://www.github.com/${github}" class="btn">${github}</a>
                    </h5>
                    </div>
                `;
            })
            .join('')}
        ${teamMembers
            .filter(({ role }) => role === 'Intern')
            .map(({ name, id, email, school, role }) => {
                return `
                    <div class="col-12 col-md-4 mb-2 bg-dark text-light p-3 flex-column">
                    <h3 class="profile-item-title">${name}
                        <br><i class="fas fa-graduation-cap mr-2"></i>${role}</h3>
                    <h5 class="profile-special">
                        ID: ${id}
                    </h5>
                    <h5 class="profile-special">
                        Email: <a href="mailto:${email}" class="btn">${email}</a>
                    </h5>
                    <h5 class="profile-special">
                        School: ${school}
                    </h5>
                    </div>
                `;
            })
            .join('')}
                </div>
            </section>
    `
}

// Generate HTML for My Team page
module.exports = pageHTML  => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <!-- head -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equic="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <!-- body -->
    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            </div>
        </header>
        <main class="container my-5">
    ${getTheTeam(teamMembers)}
        </main>
        <footer class="container text-cnter py-3">
            <h3 class="text-dark">&copy; 2022 by Kaijam J</h3>
        </footer>
    </body>
    </html>
    `
};