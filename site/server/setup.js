// setup.js

const { exec } = require('child_process');

// Function to install MongoDB
function installMongoDB() {
    return new Promise((resolve, reject) => {
        console.log("Installing MongoDB...");
        const command = process.platform === 'darwin'
            ? 'brew tap mongodb/brew && brew install mongodb-community && brew services start mongodb/brew/mongodb-community && brew install mongosh'
            : 'wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add - && echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list && sudo apt update && sudo apt install -y mongodb-org && sudo systemctl start mongod';

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error installing MongoDB: ${stderr}`);
                return reject(error);
            }
            console.log(stdout);
            console.log("MongoDB installed and started.");
            resolve();
        });
    });
}

// Function to install Redis
function installRedis() {
    return new Promise((resolve, reject) => {
        console.log("Installing Redis...");
        const command = process.platform === 'darwin'
            ? 'brew install redis && brew services start redis'
            : 'sudo apt update && sudo apt install -y redis-server && sudo systemctl start redis';

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error installing Redis: ${stderr}`);
                return reject(error);
            }
            console.log(stdout);
            console.log("Redis installed and started.");
            resolve();
        });
    });
}

// Function to verify installations
function verifyInstallations() {
    return new Promise((resolve, reject) => {
        // Wait for a few seconds to ensure MongoDB has started
        setTimeout(() => {
            exec('mongosh --eval "db.runCommand({ ping: 1 })"', (error, stdout, stderr) => {
                if (error) {
                    console.error("MongoDB is not running.");
                    return reject(error);
                }
                console.log("MongoDB is running.");
                resolve();
            });
        }, 5000); // Wait for 5 seconds
    }).then(() => {
        return new Promise((resolve, reject) => {
            exec('redis-cli ping', (error, stdout, stderr) => {
                if (error || stdout.trim() !== 'PONG') {
                    console.error("Redis is not running.");
                    return reject(error);
                }
                console.log("Redis is running.");
                resolve();
            });
        });
    });
}

// Run the setup functions
async function setup() {
    try {
        await installMongoDB();
        await installRedis();
        await verifyInstallations();
    } catch (error) {
        console.error("Setup failed:", error);
    }
}

setup();