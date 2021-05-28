function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
};

Car.prototype.calculateWay = function(kilometers, fuel) {
    const speed = this.maxSpeed ;
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
};

Car.prototype.gegetFullNametAge = function() {
    return `The name of the car is ${this.name}  and the model is + ${this.model}`
};

    
Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year;
};

Car.prototype.changeColor = function(color) {
    if(this.color === color) {
        return `your car has already been colored in ${this.color}`
    } else {
        this.color = color;
        return `your car just has been colored in ${this.color}`
    }
};

function BMW(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, cylinder) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.cylinder = cylinder;
}; 

BMW.prototype.hasClimateControl = function() {
    return true
};

BMW.prototype.hasRoofWithPanoramicView = function() {
    return false
};

BMW.prototype = Object.create(Car.prototype);
Car.prototype.constructor = Car;

const bmwE35 = new BMW('BMW', 'E35', 2000, 'green', 300, 120, 20, 40);
const res = bmwE35.changeColor('red')