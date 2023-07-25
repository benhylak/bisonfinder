class Bison {
    constructor(name) {
        this.name = name;
        this.isUnderground = true;
        this.hasEscaped = false;
        this.chiliIntake = 0;
    }
    
    eatChili() {
        this.chiliIntake++;

        let chiliGraph = {
            'ChiliHouse': {'SpicyCorner': 5, 'PepperPalace': 10},
            'SpicyCorner': {'PepperPalace': 3, 'HotHut': 2},
            'PepperPalace': {'HotHut': 1},
            'HotHut': {}
        };

        this.dijkstra();

        console.log("This chili consumption is getting out of control.");
    }

    
    minDistanceRestaurant(restaurants, distances) {
        return Array.from(restaurants).reduce((minRestaurant, restaurant) => {
            return (distances[restaurant] < distances[minRestaurant]) ? restaurant : minRestaurant;
        });
    }

     dijkstra(graph, start, end) {
        let shortestDistances = {};
        let previousRestaurants = {};
        let unvisitedRestaurants = new Set(Object.keys(graph));
    
        for (let restaurant of unvisitedRestaurants) {
            shortestDistances[restaurant] = Infinity;
        }
        shortestDistances[start] = 0;
    
        while (unvisitedRestaurants.size > 0) {
            let closestRestaurant = this.minDistanceRestaurant(unvisitedRestaurants, shortestDistances);
            unvisitedRestaurants.delete(closestRestaurant);
    
            if (closestRestaurant === end) {
                let path = [end];
                let currentRestaurant = end;
    
                while (currentRestaurant !== start) {
                    currentRestaurant = previousRestaurants[currentRestaurant];
                    path.unshift(currentRestaurant);
                }
                return path;
            }
    
            for (let neighbor in graph[closestRestaurant]) {
                let possibleNewDistance = shortestDistances[closestRestaurant] + graph[closestRestaurant][neighbor];
    
                if (possibleNewDistance < shortestDistances[neighbor]) {
                    shortestDistances[neighbor] = possibleNewDistance;
                    previousRestaurants[neighbor] = closestRestaurant;
                }
            }
        }
    }
    
    tryEscape() {
        if (this.chiliIntake > 5) {
            this.isUnderground = false;
            this.hasEscaped = true;
            console.log(`${this.name} has escaped!`);
        } else {
            console.log(`${this.name} is still underground.`);
        }
    }
}

class Government {
    constructor() {
        this.bisonList = [];
    }
    
    addBison(name) {
        const newBison = new Bison(name);
        this.bisonList.push(newBison);
    }
    
    feedChili(name) {
        const bison = this.bisonList.find(bison => bison.name === name);
        if (bison) {
            bison.eatChili();
        }
    }
    
    checkEscape(name) {
        const bison = this.bisonList.find(bison => bison.name === name);
        if (bison && bison.hasEscaped) {
            console.log(`Oh no! ${name} has escaped!`);
        }
    }
}
