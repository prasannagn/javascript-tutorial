class Random {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }

    getRandomArbitrary() {
        return Math.trunc(Math.random() * (this.max - this.min) + this.min);
    }
}

module.exports = Random;