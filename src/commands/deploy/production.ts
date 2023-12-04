import {Args, Command, Flags} from '@oclif/core'

export default class DeployProduction extends Command {
  static description = 'deploy to production server'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = {
    file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(DeployProduction)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /home/adam/tsctl/src/commands/deploy/production.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
