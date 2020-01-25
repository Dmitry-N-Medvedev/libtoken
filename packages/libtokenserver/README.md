# libtokenserver

## purpose of the library

1. generate secret (SK) and public (PK) key pair (via a standalone console program)
2. generate certificate (CERT) using the `SK` (?)
3. authenticate `CERT`
4. generate `token` for a `CERT`

## installation

Run from this directory: `pnpm link` to make the `gen-root-keys` command available in terminal.

## how to generate the SK/PK keypair

To generate private and public keys into files run `gen-root-keys --destination ./keys --prefix token-server`

`NB`: both the `--destination` and `--prefix` parameters are required.
