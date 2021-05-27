class Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }

    getFullName() {
        return `The name of the car is ${this.name} and the model is ${this.model} `
    }

    getAge() {
        return new Date().getFullYear() - this.year;
    }

    changeColor(color) {
        if(this.color === color) {
            return `your car has already been colored in ${this.color}`
        } else {
            return  this.color = color, `your car just has been colored in ${this.color}`
        }
    }

    calculateWay(kilometers, fuel) {
        const speed = this.maxSpeed;
        const maxWay = this.fuelConsumption * this.fuelCapacity;
        const averageRoadTime = kilometers / speed;
        const refueling = Math.floor(kilometers / maxWay);
        
        if (fuel < 10) {
            alert(`please, refueling your car! Time of your way trip will be ${averageRoadTime} hours`)
        };
        if(refueling >= 1) {
            alert(`Your car have to refuel ${refueling} time(s)`)
        }
        alert(`Time of your way trip will be ${averageRoadTime.toFixed(1)} hours`)
    }
}

const volvo = new Car('volvo', 740, 1987, 'silver', 250);


class Lexus extends Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, cylinder) {
        super (name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
            this.cylinder = cylinder;
    };
    heatedSeats() {
        return true
    }
};

const lexusLC = new Lexus('lexus', 'LS', 2019, 'black', 200, 60, 15, 8);
const res = lexusLC.calculateWay(2400, 15);