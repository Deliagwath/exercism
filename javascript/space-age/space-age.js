var SpaceAge = function(s) {
    this.seconds = s;
    let dict = {
        "onMercury": 0.2408467,
        "onVenus": 0.61519726,
        "onMars": 1.8808158,
        "onJupiter": 11.862615,
        "onSaturn": 29.447498,
        "onUranus": 84.016846,
        "onNeptune": 164.79132
    }
    Object.keys(dict).forEach(planet => {
        this[planet] = function() {
            return round(this.onEarth() / dict[planet]);
        }
    })
}

SpaceAge.prototype.onEarth = function() {
    return round(this.seconds / 31557600.0);
}

function round(num) {
    return parseFloat(num.toFixed(2));
}

module.exports = SpaceAge;