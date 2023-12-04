import {expect, test} from '@oclif/test'

describe('deploy:production', () => {
  test
  .stdout()
  .command(['deploy:production'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['deploy:production', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
