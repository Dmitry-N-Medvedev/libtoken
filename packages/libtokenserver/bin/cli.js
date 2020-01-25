#!/usr/bin/env node

const commander = require('commander');
const {
  version,
} = require('../package.json');
const {
  generate,
} = require('../lib/libcli');

(async () => {
  const program = new commander.Command();

  program.version(version);
  program
    .requiredOption('-P, --prefix <prefix>', 'file name of the key files')
    .requiredOption('-D, --destination <destination>', 'directory to output SK/PK keypair to')
    .parse(process.argv);

  return generate({
    destination: program.destination,
    prefix: program.prefix,
  });
})();
