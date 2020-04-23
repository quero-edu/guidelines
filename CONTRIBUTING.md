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

Bump the **major version** if:
- a rule that can't be fixed with the `--fix` command was added or changed;

Bump the **minor version** if:
- a rule was added and it is fixable with the `--fix` command;
- a rule was removed;
- a dependency was upgraded;

Bump the **patch version** if:
- any rule options were changed but they are fixable with the `--fix` command;
