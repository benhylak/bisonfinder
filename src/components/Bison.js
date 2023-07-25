class Bison {
    constructor(name, weight, coolFactor, govWatchListRank) {
        this.name = name;
        this.weight = weight;
        this.coolFactor = coolFactor;
        this.govWatchListRank = govWatchListRank;
        this.fartCount = 0;
    }
    
    incrementFartCount() {
        this.fartCount++;
    }
    
    getFartCount() {
        return this.fart;
    }
    getDetails() {
        return `Name: ${this.name}, Weight: ${this.weight} lbs, Cool Factor: ${this.coolFactor}, Government Watch List Rank: ${this.govWatchListRank}`;
    }
}
