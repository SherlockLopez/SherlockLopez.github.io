import * as CryptoJS from "crypto-js";

let encrypto = (text: string, key: string, iv: string) => {
    let encrypted = CryptoJS.AES.encrypt(text, key, {
        iv: CryptoJS.enc.Utf8.parse(key),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding,
    })
    return encrypted.toString();
}

let decrypto = (text: string, key: string, iv: string) => {
    let decrypted = CryptoJS.AES.decrypt(text, key, {
        iv: CryptoJS.enc.Utf8.parse(key),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding,
    })
    return decrypted.toString(CryptoJS.enc.Utf8);
}

console.log(decrypto(encrypto('12121', '113sas1', 'auha87sa'), '113sas1', 'auha87sa'));