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
