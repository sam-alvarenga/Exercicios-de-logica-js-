/* > maior
< menor
>= maior ou igual
<= menor ou igual
== igual
!= diferente */


function algIdade() {
    console.log('teste');

    /* Variaveis */
    /* let= */
    let nome, idade;
    /* prompt= comando utilizado para solicitar informações */
    nome = prompt('Digite seu nome');


    alert(nome);

    /* string= é uma cadeia de caracteres ou seja uma sequencia texto podendo conter númros, letras e caracteres especiais */

    /* Number= converter um valor para número */
    idade = Number(prompt('Digite sua idade'));

    /* Alert= informção que irá aparecer para usuario */
    alert('Olá ' + nome + ' você tem ' + idade + ' anos. ');
}

/* algIdade() */


/* function = desempenha  */
function calcTerreno() {
    let largura, comprimento, area;

    largura = Number(prompt('Digite a largura do terreno'));

    comprimento = Number(prompt('Digite o comprimento do terreno'))

    area = largura * comprimento

    alert('A área do terreno é ' + area)

}

/* calcTerreno(); */

function calcHaras() {

    let cavalos, total;

    cavalos = Number(prompt('Digite a quantidade de Cavalos'));

    total = cavalos * 4

    alert(' A quantidade de ferraduras necessária será ' + total)
}

/* calcHaras()
 */
function calcPago() {

    let litros, valor, total;

    litros = Number(prompt('Digite a quantidade em litro'));

    valor = Number(prompt('Digite o valor da gasolina'));

    total = litros * 5.80

    alert(' Valor total a pagar ' + total)

}

/* calcPago() */

function calcPao() {

    let frances, broa, total;

    frances = Number(prompt(' Digite a quantidade de francês'));

    broa = Number(prompt(' Digite a quantidade de broa '));

    total =

        alert('Valor total a pagar ' + total)

}
/* 
calcPao() */


/* function calcPao() {
    let paofranc, broa, totalpaofranc, totalbroa, total;
    paofranc = Number(prompt('Digite quantos pães'));
    broa = Number(prompt('Digite a quantas broas'));
    totalpaofranc = paofranc * 0.12;
    totalbroa = broa * 1.50;
    total = totalpaofranc + totalbroa;
    alert('Quantidade de pães vendidas? ' + total));

} */


function verHab() {
    let idade;

    idade = Number(prompt('Digite sua idade'));

    if (idade >= 18) {

        alert('Apto para tirar habilitação')
    }

    if (idade < 18) {

        alert('Não está apto para tirar habilitação')
    }
}

/* verHab() */

/* function verHab() {
    let idade;

    idade = Number(prompt('Digite sua idade'));

    if (idade >= 18) {

        alert('Apto para tirar habilitação')

    }else{
        alert('Não está apto para tirar habilitação')
    }
}

verHab() */

function calcFrutas() {
    let macas, total;

    macas = Number(prompt('Digite quantas maças deseja comprar'));

    if (macas > 12) {

        total = macas * 1.00
    } else {
        total = macas * 1.30
    }

    alert('A quantidade de maças compradas foram de ' + macas + ' e o total ser pago será de ' + total)

}

/* calcFrutas() */

function calcEleicao() {
    let anoatual, nascimento, idade;

    anoatual = 2024;

    nascimento = Number(prompt('Digite o ano de nascimento'));

    idade = anoatual - nascimento;

    if (idade >= 16) {
        alert('Você está apto a votar');

    } else {

        alert('Você não está apto a votar');
    }

}

/* calcEleicao() */

function calcFeira() {
    let macakg, morangokg, total, totalDesc, qtdkg;

    macakg = Number(prompt('Digite quantos kg de maças deseja comprar'));

    morangokg = Number(prompt('Digite quantos kg morangos deseja comprar'));

    qtdkg = macakg + morangokg;



    if (macakg > 5) {
        total = macakg * 1.50

    } else {
        total = macakg * 1.80
    }

    if (morangokg > 5) {
        total = morangokg * 2.20

    } else {
        total = morangokg * 2.50
    } 

    if ( qtdkg > 8 || total > 25){
        total = total - (total * 10/100)
    }

    alert('A quantidade de kg comprados foi de ' +qtdkg+ ' e o valor total foi de ' +total)

    /* codigo simplificado  */
    /* if (macaskg > 5 || morangokg)>5 
        total = (macaskg *1.5) + (morangokg * 2.2);

        }else{
            total = (macakg * 1.8) + (morangokg * 2.5);
        }
    */

}

calcFeira()