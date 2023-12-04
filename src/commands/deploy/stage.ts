import {Args, Command, Flags} from '@oclif/core'

export default class DeployStage extends Command {
  static description = 'deploy to staging server'

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
    const {args, flags} = await this.parse(DeployStage)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /home/adam/tsctl/src/commands/deploy/stage.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
