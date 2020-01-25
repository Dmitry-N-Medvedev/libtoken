const sodium = require('sodium-native');

const sk = Buffer.alloc(sodium.crypto_sign_SECRETKEYBYTES);
const pk = Buffer.alloc(sodium.crypto_sign_PUBLICKEYBYTES);

module.exports = {
  gen: async () => {
    sodium.crypto_sign_keypair(pk, sk);

    return Promise.resolve({
      sk,
      pk,
    });
  },
};
