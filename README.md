# Decenteralised-PGPKeys-with-attestation


## EAS PGP attestator schema

```
{
    "PGPFingerprint": "abcd1234...",
    "PGPPublicKey": "-----BEGIN PGP PUBLIC KEY BLOCK----- ... -----END PGP PUBLIC KEY BLOCK-----",
    "AttesterAddress": "0x1234567890abcdef...",
    "AttestationTimestamp": "1659183725",
    "Signature": "0xabcdef...",
    "ExpiryDate": "1661788725",
    "RevocationStatus": false,
    "AttestationSchemaUID": "0x9876543210...",
    "Comments": "I personally verified the identity of the PGP key owner."
}

```
## Schema on Optimism Mainnet

https://optimism.easscan.org/schema/view/0x6e4aac984526217158e863fcaba742cb2afc4d7cbda489e29e728221b3464d96<img width="1326" alt="Screenshot 2023-08-13 at 1 02 59 PM" src="https://github.com/pranshurastogi/Decenteralised-PGPKeys-with-attestation/assets/12568291/b0e362f5-4f89-41a7-80d8-406699ff8d91">

## Deployed on Optimism Goerli Testnet
https://goerli-optimism.etherscan.io/tx/0xec4d3e42f0f9de7c1e9450d8896e273a142d7dae8433cdf3bc64e8d6cae4823f

## Deployed on Base Goerli Testnet
https://goerli.basescan.org/tx/0x611a97bcdf125cff7c7c8f3ec6dd37dec10e7a9b02681b9529f56170d543ca71
