import { ReadLine } from "readline";
import { Readline } from "readline/promises";
const readline = require('readline-sync')

class SistemaDeSegurança {
    private static senha: number = 332254;

    private constructor(senha: number) {
        SistemaDeSegurança.senha = senha;
    }

    public static acessarBase() { 
        let senha = readline.question('insira a senha: ');
        if (senha == SistemaDeSegurança.senha) {
            console.log('entrando no sistema...')
        } else {console.log('acesso negado. X')}
    }
}


SistemaDeSegurança.acessarBase()


