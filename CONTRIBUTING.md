Contributing
============

This repository contains various packages. Check here for the common
contribution guide and don't forget to check if the package has its own
contribution file.

For lint configuration packages
-------------------------------

### Versioning

This package uses the basis of [SEMVER](https://semver.org/). You should bump
the version according to this logic:

> **COMPLETELY**: means a rule that says that **all** cases can be fixed by using `--fix`

Bump the **major version** if:
- a rule that can't be COMPLETELY fixed with the `--fix` command was added or changed;

Bump the **minor version** if:
- a `peerDependency` (on any package.json) was upgraded;
- a rule was added and it is COMPLETELY fixable with the `--fix` command;

Bump the **patch version** if:
- a rule severity was changed
- a `dependency` (on any package.json) was upgraded;
- a rule was removed;
- any rule options were changed but they are COMPLETELY fixable with the `--fix` command;
