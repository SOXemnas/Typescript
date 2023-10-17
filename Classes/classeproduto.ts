class Produto {
    nome: string;
    preco: number;
    quantidade: number;
    constructor (nome: string, preco: number, quantidade: number) {
        this.nome = nome
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularTotal (): number {
        return this.preco * this.quantidade;
    }
}

const aldo = new Produto ('Aldo', 9.99, 10);

console.log(aldo.calcularTotal());




 

