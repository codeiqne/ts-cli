import {Args, Command, Flags} from '@oclif/core'
import chalk from "chalk";
import fs from "fs";

export default class ConfigGenerate extends Command {
    static description = 'describe the command here'

    static examples = [
        '<%= config.bin %> <%= command.id %>',
    ]

    static flags = {
        force: Flags.boolean({char: 'f'}),
    }

    static args = {}

    public async run(): Promise<void> {
        const {args, flags} = await this.parse(ConfigGenerate)

        if (!flags.force && fs.existsSync(process.cwd() + "/tspace.json")) {
            console.error("\n    " + chalk.red("✖") + chalk.white(" A config file in this directory already exists"));
            console.error(chalk.gray("\t→ Use -f to overwrite the existing file.\n"))
            process.exit(1);
        }

        const defaultConfigFile = `{
    "name": "",
    "version": "0.0.0",
    "dockerfile": "",
    "composefile": "",
    "ports": [],
    "volumes": [],
    "entrypoint": "",
    "type": "",
    "repo": ""
}`;

        fs.writeFileSync(process.cwd() + "/tspace.json", defaultConfigFile, {encoding: "utf8"});

        console.log("\n    " + chalk.green("✔") + chalk.white(" tspace.json has been generated\n"))
    }
}
