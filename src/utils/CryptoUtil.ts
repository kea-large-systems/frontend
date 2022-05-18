import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = process.env["REACT_APP_ENCRYPTION_KEY "] || "";

export const encryptObj = (obj: any): string => {
  return CryptoJS.AES.encrypt(JSON.stringify(obj), ENCRYPTION_KEY).toString();
};

export const decryptObj = (objEncrypted: string): any  => {
  const bytes = CryptoJS.AES.decrypt(objEncrypted, ENCRYPTION_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}