import crypto from 'crypto';

// var mykey = crypto.createCipher('aes-128-cbc', 'password');
// var mystr = mykey.update('abc', 'utf8', 'hex');
// mystr += mykey.final('hex');

// console.log(mystr); //34feb914c099df25794bf9ccb85bea72

// mykey = crypto.createDecipher('aes-128-cbc', 'password');
// mystr = mykey.update(mystr, 'hex', 'utf8');
// mystr += mykey.final('utf8');

// console.log(mystr); //abc

const ENC = 'bf3c199c2470cb477d907b1e0917c17b';
const IV = '5183666c72eec9e4'; //salt
const ALGO = 'aes-256-cbc';

function encrypt(text) {
  let cipher = crypto.createCipheriv(ALGO, ENC, IV);
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

function decrypt(text) {
  let decipher = crypto.createDecipheriv(ALGO, ENC, IV);
  let decrypted = decipher.update(text, 'base64', 'utf8');
  return decrypted + decipher.final('utf8');
}

const encrypted = encrypt('123456');
console.log(encrypted);
console.log(decrypt(encrypted));
