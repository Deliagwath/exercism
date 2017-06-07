var Cipher = function(manualKey) {
    this.key = manualKey || generateKey();
}

Cipher.prototype.encode = function(toEncode) {

}

function distance(key, str) {
    let shorter = Math.min(key.length, str.length);
    let keyArray = toIntArray(key);
    let strArray = toIntArray(str);
    let distance = [];
    for (let i = 0; i < shorter; i++) {
        distance.push(keyArray[i] - strArray[i]);
    }
    return distance;
}

function toIntArray(str) {
    let intArray = [];
    for (let c of str) {
        intArray.push(c.charCodeAt(0));
    }
    return intArray;
}

function ccArrayToString(ccArray) {
    let str = '';
    for (let cc of ccArray) {
        str += String.fromCharCode(cc);
    }
    return str;
}

function generateKey() {
    let keys = []
    for (let i = 0; i < 100; i++) {
        keys.push(97 + Math.floor(Math.random() * 26));
    }
    return ccArrayToString(keys);
}

module.exports = Cipher;