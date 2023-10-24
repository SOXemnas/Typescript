function saudacao (nome:string) :string {
    return `Olá, ${nome}!`;
}
console.log(saudacao ('Usuário'));

function dobro (num:number):number {
    return num * 2
}
console.log(dobro(50));

function mostrarNumero (num1:number, numn:number):number {
    while (num1 <= numn) {
        console.log(num1);
        num1++       
    }
    return numn
}
mostrarNumero (1, 5)

function verificarPar (num:number):boolean {
    if (num%2 == 0) {
        return true;
    } else {
        return false;
    } 
}
console.log(verificarPar(100));

function imprimirLista (itens: Array<string>): void {
    for (let i of itens) {
        console.log(i);
    }    
}
imprimirLista (['uva', 'maçã', 'pêra', 'mamão'])



