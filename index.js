#!/usr/bin/env node

console.log("Creating .vscode configuration for RN project.");

const path = require('path');
const fs = require('fs');

const filesToCopy = [
    '/.vscode/extensions.json', 
    '/.vscode/launch.json', 
    '/.vscode/settings.json',
    '/.vscode/vscode-project-react-native.code-snippets'
];

const moduleRoot = __dirname;
const projectRoot = process.cwd();

const destVSCode = projectRoot + '/.vscode/';

if (!fs.existsSync(destVSCode)) {
    fs.mkdirSync(destVSCode);
}

filesToCopy.forEach((file) => {
    fs.copyFileSync(moduleRoot + file, projectRoot + file);
});

console.log("Done!");
