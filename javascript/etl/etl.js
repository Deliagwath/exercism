var ETL = function() {};

ETL.prototype.transform = function(old) {
    let new_data = {};
    Object.keys(old).forEach(val => {
        let key = old[val];
        let int_val = parseInt(val);
        key.forEach(c => new_data[c.toLowerCase()] = int_val);
    });
    return new_data;
}

module.exports = ETL;