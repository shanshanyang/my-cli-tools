## NPM CLI - Github Deploy

Note: only compatible with npm@2 due to symlink issue here: https://github.com/npm/npm/issues/10013

Config for npm CLI
```
{
  "bin": {
    "github-commit": "bin/commit.js",
    "github-push": "bin/push.js",
    "github-deploy": "bin/deploy.js"
    },
  "preferGlobal": true
}
```

run `npm link` to create symlinks
