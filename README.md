# rolldown-watch-issue-repo1

This repo is reporoduction, that when we run `rolldown --watch`, `closeBundle` is not called. 

## Reproduction Steps

```sh
# setup
pnpm install

# run `rollup` command with `-w` option
pnpm run rollup

# run `rolldown` command with `-w` option
pnpm run rolldown

# display `dist` directory
ls dist
rolldown-entry.js  rollup-entry.js  rollup.txt

```

When `rolldown` command with `-w`, `closeBundle` is not call.