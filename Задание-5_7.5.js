class Device {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
}

class Lamp extends Device {
    constructor(name, brand, batteryCapacity) {
        super(name);
        this.brand = brand;
        this.batteryCapacity = batteryCapacity;
    }
}

class Computer extends Device {
    constructor(name, brand, batteryCapacity) {
        super(name);
        this.brand = brand;
        this.batteryCapacity = batteryCapacity;
    }
}



const light = new Lamp ("Desk lamp", "Ikea", "no", 34);
const computer = new Computer ("Сomputer", "Mac", 2500, 50);

console.log(light, computer)
