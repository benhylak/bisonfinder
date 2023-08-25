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
    
    playFartSound() {
        let audio = new Audio('fartSound.mp3');
        audio.play();
    }
    
    playFartSoundWithCount() {
        this.incrementFartCount();
        let audio = new Audio('fartSound.mp3');
        audio.play();
        console.log(`Fart count: ${this.fartCount}`);
    }
}
