const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'user.json');


function loadUser() {return JSON.parse(fs.readFileSync(filePath, 'utf8'));}
function saveUser(user) {
    fs.writeFileSync(filePath, JSON.stringify(user, null, 2), 'utf8');
    console.log("User data saved successfully.");
}


function addLanguage(title, level) {
    const user = loadUser();
    user.languages.push({ title, level });
    saveUser(user);
}
function removeLanguage(title) {
    const user = loadUser();
    user.languages = user.languages.filter(lang => lang.title !== title);
    saveUser(user);
}
function listLanguages() {
    const user = loadUser();
    console.log("Languages:");
    user.languages.forEach(lang => {
        console.log(`${lang.title}: ${lang.level}`);
    });
}
function readLanguage(title) {
    const user = loadUser();
    const language = user.languages.find(lang => lang.title === title);
    if (language) {
        console.log(`${language.title}: ${language.level}`);
    } else {
        console.log(`Language '${title}' not found.`);
    }
}

const command = process.argv[2];
const title = process.argv[4];
const level = process.argv[6];

switch (command) {
    case 'add':
        addLanguage(title, level);
        break;
    case 'remove':
        removeLanguage(title);
        break;
    case 'list':
        listLanguages();
        break;
    case 'read':
        readLanguage(title);
        break;
    default:
        console.log("Invalid command. Use 'add', 'remove', 'list', or 'read'.");
}
