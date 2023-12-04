oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @tadamspace/cli
$ ts COMMAND
running command...
$ ts (--version)
@tadamspace/cli/0.0.0 linux-x64 node-v18.18.2
$ ts --help [COMMAND]
USAGE
  $ ts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ts autocomplete [SHELL]`](#ts-autocomplete-shell)
* [`ts conf [KEY] [VALUE]`](#ts-conf-key-value)
* [`ts deploy:production [FILE]`](#ts-deployproduction-file)
* [`ts deploy:stage [FILE]`](#ts-deploystage-file)
* [`ts help [COMMANDS]`](#ts-help-commands)
* [`ts plugins`](#ts-plugins)
* [`ts plugins:install PLUGIN...`](#ts-pluginsinstall-plugin)
* [`ts plugins:inspect PLUGIN...`](#ts-pluginsinspect-plugin)
* [`ts plugins:install PLUGIN...`](#ts-pluginsinstall-plugin-1)
* [`ts plugins:link PLUGIN`](#ts-pluginslink-plugin)
* [`ts plugins:uninstall PLUGIN...`](#ts-pluginsuninstall-plugin)
* [`ts plugins:reset`](#ts-pluginsreset)
* [`ts plugins:uninstall PLUGIN...`](#ts-pluginsuninstall-plugin-1)
* [`ts plugins:uninstall PLUGIN...`](#ts-pluginsuninstall-plugin-2)
* [`ts plugins:update`](#ts-pluginsupdate)

## `ts autocomplete [SHELL]`

Display autocomplete installation instructions.

```
USAGE
  $ ts autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  (zsh|bash|powershell) Shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  Display autocomplete installation instructions.

EXAMPLES
  $ ts autocomplete

  $ ts autocomplete bash

  $ ts autocomplete zsh

  $ ts autocomplete powershell

  $ ts autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v3.0.2/src/commands/autocomplete/index.ts)_

## `ts conf [KEY] [VALUE]`

manage configuration

```
USAGE
  $ ts conf [KEY] [VALUE] [-h] [-k <value>] [-v <value>] [-d] [-p <value>] [-n <value>] [-d <value>]

ARGUMENTS
  KEY    key of the config
  VALUE  value of the config

FLAGS
  -d, --cwd=<value>      config file location
  -d, --delete           delete?
  -h, --help             show CLI help
  -k, --key=<value>      key of the config
  -n, --name=<value>     config file name
  -p, --project=<value>  project name
  -v, --value=<value>    value of the config

DESCRIPTION
  manage configuration
```

_See code: [conf-cli](https://github.com/natzcam/conf-cli/blob/v0.1.9/src/commands/conf.ts)_

## `ts deploy:production [FILE]`

deploy to production server

```
USAGE
  $ ts deploy:production [FILE] [-n <value>] [-f]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  deploy to production server

EXAMPLES
  $ ts deploy:production
```

_See code: [src/commands/deploy/production.ts](https://github.com/codeiqne/ts-cli/blob/v0.0.0/src/commands/deploy/production.ts)_

## `ts deploy:stage [FILE]`

deploy to staging server

```
USAGE
  $ ts deploy:stage [FILE] [-n <value>] [-f]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  deploy to staging server

EXAMPLES
  $ ts deploy:stage
```

_See code: [src/commands/deploy/stage.ts](https://github.com/codeiqne/ts-cli/blob/v0.0.0/src/commands/deploy/stage.ts)_

## `ts help [COMMANDS]`

Display help for ts.

```
USAGE
  $ ts help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ts.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.7/src/commands/help.ts)_

## `ts plugins`

List installed plugins.

```
USAGE
  $ ts plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ts plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/index.ts)_

## `ts plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ts plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ts plugins:add

EXAMPLES
  $ ts plugins:add myplugin 

  $ ts plugins:add https://github.com/someuser/someplugin

  $ ts plugins:add someuser/someplugin
```

## `ts plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ts plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ts plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/inspect.ts)_

## `ts plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ts plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ts plugins:add

EXAMPLES
  $ ts plugins:install myplugin 

  $ ts plugins:install https://github.com/someuser/someplugin

  $ ts plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/install.ts)_

## `ts plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ts plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ ts plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/link.ts)_

## `ts plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ts plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ts plugins:unlink
  $ ts plugins:remove

EXAMPLES
  $ ts plugins:remove myplugin
```

## `ts plugins:reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ ts plugins:reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/reset.ts)_

## `ts plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ts plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ts plugins:unlink
  $ ts plugins:remove

EXAMPLES
  $ ts plugins:uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/uninstall.ts)_

## `ts plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ts plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ts plugins:unlink
  $ ts plugins:remove

EXAMPLES
  $ ts plugins:unlink myplugin
```

## `ts plugins:update`

Update installed plugins.

```
USAGE
  $ ts plugins:update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.8/src/commands/plugins/update.ts)_
<!-- commandsstop -->
