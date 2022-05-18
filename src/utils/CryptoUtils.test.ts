import { decryptObj, encryptObj } from "./CryptoUtil";

describe("checks if the encrypting utilities work as expected", () => {
  test("checks that the an object can be encrypted and properly returned as an encrypted string", () => {
    const testUserDetails = { role: "GUEST" };
    const expectedEncryptionSignature = "U2FsdGVkX1";

    const encryption = encryptObj(testUserDetails);

    /*  TODO: Look into this
        const expectedEncryption =
          "U2FsdGVkX1+bHDW5IC9gC8T2y7uDG9+Jni8yX8RGh6+sQ439ustGbPoWNT/mNqKW";

        I would like to do something like this, but this fails because the encryption is always different
        expect(encryption).toEqual(expectedEncryption);
    */

    // I can instead, do smth like this, cuz I saw that all encryptions start with the same signature
    expect(encryption).toContain(expectedEncryptionSignature);
  });

  test("checks that the an object can be encrypted and properly returned as an encrypted string", () => {
    const testUserDetailsEncryption =
      "U2FsdGVkX1+bHDW5IC9gC8T2y7uDG9+Jni8yX8RGh6+sQ439ustGbPoWNT/mNqKW";
    const expectedDecryption = { role: "TEACHER" };

    const decryption = decryptObj(testUserDetailsEncryption, "");

    expect(decryption).toEqual(expectedDecryption);
  });
});
