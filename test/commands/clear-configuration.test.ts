import {expect, test} from '@oclif/test'

describe('clear-configuration', () => {
  test
  .stdout()
  .command(['clear-configuration'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['clear-configuration', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
