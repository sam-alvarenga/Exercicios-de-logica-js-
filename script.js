
function algIdade() {
    console.log('teste');

    let nome, idade;
    /* prompt= comando utilizado para solicitar informações */
    nome = prompt('Digite seu nome');


    alert(nome);

    /* string= é uma cadeia de caracteres ou seja uma sequencia texto podendo conter númros, letras e caracteres especiais */

    /* Number= converter um valor para número */
    idade = Number(prompt('Digite sua idade'));

    alert('Olá ' + nome + ' você tem ' + idade + ' anos. ');
}

/* algIdade() */

function calcTerreno() {
    let largura,comprimento,area;

    largura = Number(prompt('Digite a largura do terreno'));

    comprimento = Number (prompt('Digite o comprimento do terreno'))

    area = largura * comprimento

    alert('A área do terreno é '+ area)

}

/* calcTerreno(); */

function calcHaras(){
    
    let cavalos,total;

    cavalos = Number(prompt('Digite a quantidade de Cavalos'));

    total = cavalos * 4

    alert(' A quantidade de ferraduras necessária será '+ total)
}

/* calcHaras() */

function calcPago(){
    
    let litros,valor,total;

    litros = Number(prompt('Digite a quantidade em litro'));

    valor = Number(prompt('Digite o valor da gasolina'));

    total = litros * 5.80

    alert(' Valor total a pagar '+ total)

}

/* calcPago() */

calcPao(){
    
    let frances,broa,total;

    frances = Number(prompt(' Digite a quantidade de frances'));
    
    broa = Number(prompt(' Digite a quantidade de broa '));

    total = 

    alert('Valor total a pagar '+ total)

}

calcPao()


/* function calcPao() {
    let paofranc, broa, totalpaofranc, totalbroa, total;
    paofranc = Number(prompt('Digite quantos pães'));
    broa = Number(prompt('Digite a quantas broas'));
    totalpaofranc = paofranc * 0.12;
    totalbroa = broa * 1.50;
    total = totalpaofranc + totalbroa;
    alert('Quantidade de pães vendidas? ' + total)); */