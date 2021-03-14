const CustomError = require("../extensions/custom-error");

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {
  encrypt(message, key) {
    throw Error;
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyStr = [];
    let encryptedStr = [];

    for (let i = 0; i < message.length; i++) {
      if (keyStr.length == message.length) {
        break;
      } else if (i == key.length - 1) {
        i = 0;
      } else {
        keyStr.push(key[i]);
      }
    }

    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) == -1) {
        encryptedStr.push(i);
        continue;
      }

      let index = alphabet.indexOf(message[i]) + alphabet.indexOf(keyStr[i]);

      if (index > 26) {
        index = index - 26;
      }

      encryptedStr.push(alphabet[index]);
    }
  }    
  decrypt(message, key) {
    throw Error;
    message = message.toUpperCase();
    key = key.toUpperCase();

  }
}

module.exports = VigenereCipheringMachine;
