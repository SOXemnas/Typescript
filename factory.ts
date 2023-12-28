interface ComputerModel {
    ram: Number,
    hdd: Number,
    cpu: Number,
    type: String,
}

class PC implements ComputerModel {
    ram: Number
    hdd: Number
    cpu: Number
    type: String
    constructor (ram: Number, hdd: Number, cpu: Number, type: String) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = type;
    }
}
class Server implements ComputerModel {
    ram: Number
    hdd: Number
    cpu: Number
    type: String
    constructor (ram: Number, hdd: Number, cpu: Number, type: String) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = type;
    }
}

class ComputerFactory {
    createComputer (objct: any) {
        if (objct.type === 'PC') {
            return new PC (objct.ram, objct.hdd, objct.cpu, objct.type)
        } else if (objct.type === 'Server') {
            return new Server (objct.ram, objct.hdd, objct.cpu, objct.type) 
        }
    }
}

const objctReceived = {
    ram: 8,
    hdd: 300,
    cpu: 3.5,
    type: 'PC'
}

const factory = new ComputerFactory ();

console.log(factory.createComputer(objctReceived));




