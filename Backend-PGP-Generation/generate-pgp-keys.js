const openpgp = require('openpgp');

// Call the function
generate('Jon Smith', 'jon@example.com', 4096, 'super long and hard to guess secret');

async function generate(name, email, rsaBits, passphrase) {
    try {
        const keyResult = await openpgp.generateKey({
            type: 'rsa', 
            rsaBits: rsaBits,
            userIDs: [{ name: name, email: email }],
            passphrase: passphrase 
        });

        console.log("Key Result:", keyResult);

        const privateKeyArmored = keyResult.privateKeyArmored;
        const publicKeyArmored = keyResult.publicKeyArmored;

        console.log('Private Key:\n', privateKeyArmored);
        console.log('Public Key:\n', publicKeyArmored);
    } catch (error) {
        console.error("Error generating PGP keys:", error);
    }
}
