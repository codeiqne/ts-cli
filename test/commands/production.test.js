"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@oclif/test");
describe('production', () => {
    test_1.test
        .stdout()
        .command(['production'])
        .it('runs hello', ctx => {
        (0, test_1.expect)(ctx.stdout).to.contain('hello world');
    });
    test_1.test
        .stdout()
        .command(['production', '--name', 'jeff'])
        .it('runs hello --name jeff', ctx => {
        (0, test_1.expect)(ctx.stdout).to.contain('hello jeff');
    });
});
