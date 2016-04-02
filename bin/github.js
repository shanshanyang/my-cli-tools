#! /usr/bin/env node

var shell = require("shelljs");
var yargs = require("yargs");

var argv = yargs.usage("Usage: $0 <command> [options]")
  .command("commit", "commit changes to the repo", function (yargs) {
    shell.exec("git add -A . && git commit -a -m 'update'");
  })
  .command("push", "push changes up to GitHub", function (yargs) {
    shell.exec("git push origin master");
  })
  .command("deploy", "commit and push changes in one step", function (yargs) {
    shell.exec("github commit && github push");
  })
  .demand(1, "must provide a valid command")
  .help("h")
  .alias("h", "help")
  .argv
