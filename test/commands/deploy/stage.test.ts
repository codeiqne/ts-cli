import {expect, test} from '@oclif/test'

describe('deploy:stage', () => {
  test
  .stdout()
  .command(['deploy:stage'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['deploy:stage', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
