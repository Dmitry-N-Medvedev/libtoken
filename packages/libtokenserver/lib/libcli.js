// const debuglog = (require('util')).debuglog('LIBCLI');

const {
  resolve,
} = require('path');
const {
  existsSync,
  mkdirSync,
  statSync,
  writeFileSync,
} = require('fs');
const {
  gen,
} = require('./libgen');

module.exports = {
  generate: async ({ destination = null, prefix = null } = {}) => {
    if (destination === null || prefix === null) {
      return Promise.reject(new Error('either the destination or prefix are undefined'));
    }
    if (existsSync(destination)) {
      if (statSync(resolve(destination)).isDirectory() === false) {
        return Promise.reject(new Error(`Not a directory: ${destination}`));
      }
    } else {
      mkdirSync(destination, { recursive: true });
    }

    const {
      sk,
      pk,
    } = await gen();
    const files = {
      secret: resolve(destination, `${prefix}.sk.key`),
      public: resolve(destination, `${prefix}.pk.key`),
    };

    await writeFileSync(files.secret, sk);
    await writeFileSync(files.public, pk);

    return Promise.resolve(files);
  },
};
