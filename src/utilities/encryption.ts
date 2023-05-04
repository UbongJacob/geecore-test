import CryptoJS from "crypto-js";

const secretPass = "secretRight?1";

export const encryptData = (data: any) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secretPass
  ).toString();

  return encryptedData;
};

export const decryptData = (data: string) => {
  const bytes = CryptoJS.AES.decrypt(data, secretPass);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
