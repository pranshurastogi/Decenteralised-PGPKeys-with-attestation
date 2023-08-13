import { SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';
console.log(ethers);

export const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26

// Initialize the sdk with the address of the EAS Schema contract address
const eas = new EAS(EASContractAddress);

// Gets a default provider (in production use something else like infura/alchemy)
const provider = new ethers.providers.InfuraProvider("https://goerli.infura.io/v3/api");

// console.log(ethers.Wallet);

// Connects an ethers style provider/signingProvider to perform read/write functions.
// MUST be a signer to do write operations!
eas.connect(provider);




const schemaRegistryContractAddress = "0x4200000000000000000000000000000000000020";
const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);

schemaRegistry.connect(signer);

const schema = "string PGPFingerprint, string PGPPublicKey, address AttesterAddress, string AttestationTimestamp, string Signature, string ExpiryDate, bool RevocationStatus, string AttestationSchemaUID, string comments";
const resolverAddress = ""; // Sepolia 0.26
const revocable = true;

const transaction = await schemaRegistry.register({
  schema,
  resolverAddress,
  revocable,
});

// Optional: Wait for transaction to be validated
await transaction.wait();