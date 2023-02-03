let powerConsumption = 0;

class Device {
    constructor (name, batteryCapacity) {
        this.name = name;
        this.batteryCapacity = batteryCapacity;
    };
    
    connected() {
        console.log(` ${this.name} connected to the network`);
    }
    unconnected() {
        console.log(` ${this.name} not connected to the network`);
    }
}
    
    class MyDevice extends Device {
        constructor (name, brand, batteryCapacity, power){
        super (name, batteryCapacity);
        this.brand = brand;
        this.power = power
        }
    }

const lamp = new MyDevice ("Desk lamp", "Ikea", "no", 34);
lamp.unconnected()
console.log(lamp)

const computer = new MyDevice ("Сomputer", "Mac", 2500, 50);
computer.connected()
console.log(computer)
