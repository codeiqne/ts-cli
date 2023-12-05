import {Args, Command, Flags, ux} from '@oclif/core';

import chalk from 'chalk';
import Listr from 'listr';
import {execa} from "execa";


const Conf = require('conf');
const config = new Conf();

export default class DeployStage extends Command {
    static description = 'deploy to staging server'

    static examples = [
        '<%= config.bin %> <%= command.id %>',
    ]

    static flags = {
        // flag with no value (-f, --force)
        force: Flags.boolean({char: 'f'}),
    }

    static args = {
//    file: Args.string({description: 'file to read'}),
    }

    public async run(): Promise<void> {
        const {args, flags} = await this.parse(DeployStage)

        console.log(chalk.cyan("\n    Deploying your project to the staging server. Press " + chalk.white.bold("^C") + " to cancel.\n"))

        let host = config.get("stage_host");
        let user = config.get("stage_username");
        let password = config.get("stage_password");
        let port = config.get("stage_port");

        let reg = config.get("registry")

        if (!host) {
            host = await ux.prompt("Staging server's SSH hostname");
            config.set("stage_host", host);
        }
        if (!user) {
            user = await ux.prompt("Staging server's SSH username");
            config.set("stage_username", user);
        }
        if (!password) {
            password = await ux.prompt("Staging server's SSH password", {type: "hide"});
            config.set("stage_password", password);
        }
        if (!port) {
            port = await ux.prompt("Staging server's SSH port", {default: "22"});
            config.set("stage_port", port);
        }
        if (!reg) {
            reg = await ux.prompt("Docker registry URL");
            config.set("registry", reg);
        }

//        const tasks = new Listr([{
//            title: 'Git',
//            task: (_, task) => {
//                execa('which', ['git']).then(result => {
//                    if (result.stderr == "git not found") {
//                        task.skip("Git not installed")
//                    }
//                })
//
//                execa('git', ['status']).then(result => {
//                    if (result.stderr == "fatal: not a git repository (or any of the parent directories): .git") {
//                        task.skip("Not in a git directory")
//                    }
//                })
//                return new Listr([
//                    {
//                        title: 'Checking git status',
//                        task: () => execa('git', ['status', '--porcelain']).then(result => {
//                            if (result.stdout !== '') {
//                                throw new Error('Unclean working tree. Commit or stash changes first.');
//                            }
//                        })
//                    },
//                    {
//                        title: 'Checking remote history',
//                        task: () => execa('git', ['rev-list', '--count', '--left-only', '@{u}...HEAD']).then(result => {
//                            if (result.stdout !== '0') {
//                                throw new Error('Remote history differ. Please pull changes.');
//                            }
//                        })
//                    }
//                ], {concurrent: true});
//    }
//}
//])
//;

//        try {
//            await tasks.run();
//        } catch {
//        }
    }
}
