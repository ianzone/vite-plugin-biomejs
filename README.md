# Toolchain

[![semantic-release](https://img.shields.io/badge/semantic-e10079?logo=semantic-release&labelColor=grey)](https://semantic-release.gitbook.io/semantic-release)

# Commands

## Getting started

```bash
pnpm install -g @antfu/ni nx
ni
```

## Package management

```bash
# Create a package
mkdir <pkgDir>
cd <pkgDir>
pnpm init
```

| Management        | Root            | Local package                     |
| ----------------- | --------------- | --------------------------------- |
| Add from registry | `ni -w <deps>`  | `ni <deps> -F <pkg>`              |
| Add from local    |                 | `ni --workspace <deps> -F <pkg>`  |
| Update            | `nu`            | `nu -F <pkg>`                     |
| Update All        | `nu -r`         | `nu -F <pkg> -r`                  |
| Remove            | `nun -w <deps>` | `nun --workspace <deps> -F <pkg>` |

## Build

| Build    | command             |
| -------- | ------------------- |
| one      | `nx build <pkg>`    |
| all      | `nr build:all`      |
| affected | `nr build:affected` |

## Test

## Publish

```
    // "login": "npm login --registry=https://registry.npmjs.org",
    // "publish": "npm publish --access=public --registry=https://registry.npmjs.org",
    // "unpublish": "npm unpublish --force --registry=https://registry.npmjs.org"
```

# Reference

[Tutorial: Getting Started with Package-Based Repos](https://www.youtube.com/watch?v=hzTMKuE3CDw)

[Setup a monorepo with PNPM workspaces and add Nx for speed](https://www.youtube.com/watch?v=ngdoUQBvAjo)

# nx.json

```json
{
  "namedInputs": {
    // exclude markdown files from caching
    "noMarkdown": ["!{projectRoot}/**/*.md"]
  },
  "targetDefaults": {
    "build": {
      // exclude markdown files from caching for the package and its dependencies
      "inputs": ["noMarkdown", "^noMarkdown"],
      // when build a package, build all packages that it's depended on
      "dependsOn": ["^build"]
    }
  }
}
```
