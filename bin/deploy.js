#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("github-commit && github-push");
