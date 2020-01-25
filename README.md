# libtoken

Create/validate/read authorization token.

## token types

1. JWT
2. Google Macaroons

## before you start

1. install/upgrade [pnpm](https://pnpm.js.org/en/installation): `curl -L https://unpkg.com/@pnpm/self-installer | PNPM_VERSION=next node`
2. from the repository root folder run: `./bin/install-deps` to install/up(dat|grad)e dependencies
3. install google `flatbuffers` via your package manager (current `flatc --version` gives `1.11.0`)

## dramatis personae

1. a Client (`CLI`) application that requires access to a protected Resource (`PRES`)
2. a protected Resource (`PRES`) which is usually an HTTPS or Secure WebSocket server
3. a Token Server (`TS`) which is responsible for giving out `Tokens` to a `CLI` for it to be able to authenticate/authorize itself at `PRES`
4. a Certificate (`CERT`) of some kind with which the `CLI` authenticates at the `TS` to obtain a new Token

## crypto algorithms

1. digital signature: [ECDSA](http://bit.ly/2tO1hDa), [EdDSA](http://bit.ly/38FpCtP)

## claims format

1. JWT: JSON
2. Google Macaroons: [flatbuffers](http://bit.ly/37tTwB1)
