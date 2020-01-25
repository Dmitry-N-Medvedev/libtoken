/* eslint-env node */

const {
  statSync,
  mkdtempSync,
  rmdirSync,
} = require('fs');
const {
  join,
} = require('path');
const {
  tmpdir,
} = require('os');
const {
  describe,
  it,
} = require('mocha');
const {
  expect,
} = require('chai');
const {
  generate,
} = require('../lib/libcli');

describe('libcli', () => {
  it('should write SK/PK files to an existing directory', async () => {
    const output_path = mkdtempSync(join(tmpdir(), 'libcli-'));
    try {
      const prefix = 'test';
      const {
        secret,
        public,
      } = await generate({
        destination: output_path,
        prefix,
      });

      expect(statSync(secret).isFile()).to.be.true;
      expect(statSync(public).isFile()).to.be.true;
    } finally {
      rmdirSync(output_path, {
        recursive: true,
      });
    }

    return Promise.resolve();
  });
});
