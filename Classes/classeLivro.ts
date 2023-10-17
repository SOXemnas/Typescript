class Livro {
    titulo: string;
    autor: string;
    ano: number;
    constructor (titulo: string, autor: string, ano:number) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    detalhes () {
        console.log(`
        ----------Detalhes do livro----------
        Título: ${this.titulo}
        Autor: ${this.autor}
        Ano: ${this.ano}
        -------------------------------------`)
    }
}

const u = new Livro ('As aventuras', 'edu', 1998)

console.log(u.detalhes());


