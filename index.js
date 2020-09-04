#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const filesToCopy = [
    '/.vscode/extensions.json', 
    '/.vscode/launch.json', 
    '/.vscode/settings.json',
];

const moduleRoot = __dirname;
const projectRoot = path.normalize(moduleRoot + '/../..');

const destVSCode = projectRoot + '/.vscode/';

if (!fs.existsSync(destVSCode)) {
    fs.mkdirSync(destVSCode);
}

filesToCopy.forEach((file) => {
    fs.copyFileSync(moduleRoot + file, projectRoot + file);
});
