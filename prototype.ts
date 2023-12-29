interface IVeiculo {
    clone(): void | any
};

class Veiculo implements IVeiculo {
    marca: string;
    modelo: string;
    cor: string;
    numRodas: number;

    constructor(marca: string, modelo: string, cor: string, numRodas: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.numRodas = numRodas;
    } 

    clone(): void|any {
        let p1 = this.marca;
        let p2 = this.modelo;
        let p3 = this.cor;
        let p4 = this.numRodas;
        const clone = new Veiculo(p1, p2, p3, p4);
        return clone
    }
}

class Carro extends Veiculo {
    numPortas: number;
    constructor(marca: string, modelo: string, cor: string, numRodas: number, numPortas: number) {
        super(marca, modelo, cor, numRodas)
        this.numPortas = numPortas;
    }
    clone () {
        let p1 = this.marca;
        let p2 = this.modelo;
        let p3 = this.cor;
        let p4 = this.numRodas;
        let p5 = this.numPortas;
        const clone = new Carro(p1, p2, p3, p4, p5);
        return clone
    }
}

class Moto extends Veiculo {
    bagageiro: boolean;
    constructor(marca: string, modelo: string, cor: string, numRodas: number, bagageiro: boolean) {
        super(marca, modelo, cor, numRodas)
        this.bagageiro = bagageiro;
    }
    clone () {
        let p1 = this.marca;
        let p2 = this.modelo;
        let p3 = this.cor;
        let p4 = this.numRodas;
        let p5 = this.bagageiro;
        const clone = new Moto(p1, p2, p3, p4, p5);
        return clone
    }
}

let prototipos = [
    new Carro ('Volvo', 'B394', 'Azul', 4, 2),
    new Carro ('GM', 'Meriva', 'Branca', 4, 2),
    new Carro ('Ferrari', 'z1', 'Vermelha', 4, 2),
    new Carro ('Ford', 'Fiesta', 'Preto', 4, 4),
    new Moto ('Honda', 'CG', 'Amarela', 2, true),
    new Moto ('Misubish', '3001', 'Preta', 2, false),
];


class Aplicaçao {
    prototipos: Array<Veiculo>;
    constructor(lista: Array<Veiculo>) {
        this.prototipos = lista
    }
    clonarPrototipos () {
        let arr = []
        for (let i of this.prototipos) {
            arr.push(i)
        };
        return arr;
    }
}

const app = new Aplicaçao(prototipos);

console.log(app.clonarPrototipos());




