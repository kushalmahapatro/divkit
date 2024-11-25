const fs = require('fs');
const { execSync } = require('child_process');

const installDependencies = (file) => {
    const dependencies = JSON.parse(fs.readFileSync(file, 'utf8'));
    const deps = Object.entries(dependencies).map(([key, value]) => `${key}@${value}`).join(' ');
    execSync(`npm install ${deps}`, { stdio: 'inherit' });
};


console.log('Installing client dependencies...');
installDependencies('./dependencies-client.json');

console.log('Installing server dependencies...');
installDependencies('./dependencies-server.json');

const installDevDependencies = (file) => {
    const devDependencies = JSON.parse(fs.readFileSync(file, 'utf8'));
    const devDeps = Object.entries(devDependencies).map(([key, value]) => `${key}@${value}`).join(' ');
    execSync(`npm install --save-dev ${devDeps}`, { stdio: 'inherit' });
};

console.log('Installing client dev dependencies...');
installDevDependencies('./devDependencies-client.json');

console.log('Installing server dev dependencies...');
installDevDependencies('./devDependencies-server.json');