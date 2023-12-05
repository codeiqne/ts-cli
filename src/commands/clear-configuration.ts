import {Args, Command, Flags, ux} from '@oclif/core'

const Conf = require('conf');
const config = new Conf();

export default class ClearConfiguration extends Command {
    static description = 'clear your configuration'

    static examples = [
        '<%= config.bin %> <%= command.id %>',
    ]

    static flags = {
        yes: Flags.boolean({char: "y", description: "continue without asking"})
    }

    static args = {}

    public async run(): Promise<void> {
        const {args, flags} = await this.parse(ClearConfiguration)

        if (!flags.yes && !(await ux.confirm("Are you sure you want to clear the configuration? (y/n)"))) {
            console.warn("Aborted");
            process.exit();
        }

        config.clear();
    }
}
