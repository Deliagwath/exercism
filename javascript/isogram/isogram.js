var Isogram = function(input) {
    this.word = input.toLowerCase();//.replace(/[\W\d]/g,'');
    //Regex doesn't work for some unicode characters, too lazy to investigate
}

Isogram.prototype.isIsogram = function() {
    let check = {}
    for (let c of this.word) {
        let index = c.charCodeAt(0);
        if (check[index] && index >= 48) { return false; }
        //So I hardcode in seperators instead :D
        else { check[index] = true; }
    }
    return true;
}

module.exports = Isogram;