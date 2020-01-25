/* eslint-env node */

const {
  describe,
  it,
} = require('mocha');
const {
  expect,
} = require('chai');
const {
  gen,
} = require('../lib/libgen');

describe('libgen', () => {
  it('should generate SK/PK key pair', async () => {
    const {
      sk,
      pk,
    } = await gen();

    expect(sk).to.exist;
    expect(sk).to.be.an.instanceOf(Buffer);
    expect(sk).to.have.lengthOf.above(0);

    expect(pk).to.exist;
    expect(pk).to.be.an.instanceOf(Buffer);
    expect(pk).to.have.lengthOf.above(0);
  });
});
