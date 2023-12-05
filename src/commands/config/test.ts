import {Args, Command, Flags} from '@oclif/core'
import {testConfig} from "../../parser";
import fs from "fs";
import chalk from 'chalk';

export default class ConfigTest extends Command {
    static description = 'describe the command here'

    static examples = [
        '<%= config.bin %> <%= command.id %>',
    ]

    static flags = {}

    static args = {
        file: Args.string({description: 'config file to read'}),
    }

    public async run(): Promise<void> {
        const {args, flags} = await this.parse(ConfigTest)

        if (args.file && !fs.existsSync(args.file)) {
            console.error(chalk.red("The config file at the specified location does not exist."));
            process.exit(1);
        }

        if (!args.file && !fs.existsSync(process.cwd() + "/tspace.json")) {
            console.error(chalk.red("The config file in current working directory does not exist."));
            process.exit(1);
        }

        // @ts-ignore
        testConfig(args.file || process.cwd() + "/tspace.json")
            .then((d) => {
                console.log("\n    " + chalk.green("✔") + chalk.white(" Config is valid\n"))
            })
            .catch((e) => {
                console.error(chalk.red("\n    ✖") + chalk.white(" Invalid config"));
                console.error(chalk.gray("\t→ " + e.message + "\n"));
                process.exit(1);
            });
    }
}
