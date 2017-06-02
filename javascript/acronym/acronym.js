var Acronyms = {
    "parse": function(str) {
        // Split the Words
        let regex = /\W/g;
        let words = str.split(regex);
        
        // Removing empty strings
        words = words.filter(word => word != '');

        // Capitalising each Word
        words = words.map(word => word[0].toUpperCase() + word.slice(1))
        console.log(words);

        // Split the Words further through Capitalisation
        let acros = words.map(word => extract(word));

        // Merge all the letters
        let acro = "";
        acros.forEach(a => acro += a.join(''));
        return acro;
    }
}

var extract = function(word) {
    let capitals = [];
    let capital = false;
    for (let c of word) {
        if (c == c.toUpperCase()) {
            if (capital) { continue; }
            capital = true;
            capitals.push(c);
        } else {
            capital = false;
        }
    }
    return capitals;
}

module.exports = Acronyms;
//([a-zA-Z0-9]+(?:'*[a-zA-Z0-9]+)*)
//([A-Z]{1,})