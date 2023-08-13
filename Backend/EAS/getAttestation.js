import { EAS } from "@ethereum-attestation-service/eas-sdk";

const eas = new EAS(EASContractAddress);
eas.connect(provider);

// https://optimism.easscan.org/schema/view/0x6e4aac984526217158e863fcaba742cb2afc4d7cbda489e29e728221b3464d96
const uid = "0x6e4aac984526217158e863fcaba742cb2afc4d7cbda489e29e728221b3464d96";

const attestation = await eas.getAttestation(uid);

console.log(attestation);