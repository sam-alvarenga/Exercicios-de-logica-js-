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

    comprimento = Number(prompt('Digite o comprimento do terreno'));

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

    alert(' Valor total a pagar ' + total);

}

/* calcPago() */

function calcPao() {

    let frances, broa, total;

    frances = Number(prompt(' Digite a quantidade de francês'));

    broa = Number(prompt(' Digite a quantidade de broa '));

    total =

        alert('Valor total a pagar ' + total);

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

        alert('Apto para tirar habilitação');
    }

    if (idade < 18) {

        alert('Não está apto para tirar habilitação');
    }
}

/* verHab() */

/* function verHab() {
    let idade;

    idade = Number(prompt('Digite sua idade'));

    if (idade >= 18) {

        alert('Apto para tirar habilitação');

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

    if (qtdkg > 8 || total > 25) {
        total = total - (total * 10 / 100)
    }

    alert('A quantidade de kg comprados foi de ' + qtdkg + ' e o valor total foi de ' + total);

    /* codigo simplificado  */
    /* if (macaskg > 5 || morangokg)>5 
        total = (macaskg *1.5) + (morangokg * 2.2);

        }else{
            total = (macakg * 1.8) + (morangokg * 2.5);
        }
    */
}

/* calcFeira() */

function escola() {
    let media;

    media = Number(prompt('Digite a média do aluno'));
    /* if= Si */
    if (media < 5) {
        alert('Conceito D')

        /* else if= else:senão if: Si. Usa quando tem mais de duas opçoes a serem verificada */
    } else if (media >= 5 && media < 7) {
        alert('Conceito C')
    }
    if (media >= 7 && media < 9) {
        alert('Conceito B');

    } else if (media >= 9 && media <= 10) {
        alert('Conceito A')
    }

}
/* escola() */

function calcImc() {

    let altura, peso, imc;

    altura = Number(prompt('Digite sua altura'));

    peso = Number(prompt('Digite seu peso'));

    imc = peso / (altura * altura);

    /* só vai entrar no if se for verdeiro se tiver acontecendo, senão entrará no else */
    if (imc < 18.5) {
        alert('Abaixo do peso')
        /* tudo que for falso */
    } else if (imc >= 18.5 && imc < 25) {
        alert('Peso Normal')
        /*  */
    } else if (imc >= 25 && imc < 30) {
        alert('Acima do peso')
        /* }else{
            alert('Obeso')  
        } */
    } else if (imc >= 30) {
        alert('Obeso')
    }
}

/* calcImc() */

function aluguelCarro() {
    let categoria, km, diarias, total;

    categoria = (prompt('Digite a categoria do carro'));

    diarias = Number(prompt('Digite quantos dias o carro foi alugado'));

    km = Number(prompt('Digite quantos km foram percorridos'));

    if (categoria == 'popular') {
        if (km > 100) {
            total = km * 0.1
        } else {
            total = km * 0.2
        }
        total = total + diarias * 90
    } else if (categoria == 'luxo') {
        if (km > 200) {
            total = km * 0.25
        } else {
            total = km * 0.3
        }
        total = total + diarias * 150
    } else {
        alert('Digite a categoria correta');
    }

    alert('O total a ser pago será de ' + total)
}


/* aluguelCarro() */

function atividadeFisica() {
    let pontos, horas, dinheiro;

    horas = Number(prompt('Digite quantas horas você treinou no mês '))

    if (horas < 10) {
        pontos = horas * 2
    } else if (horas >= 10 && horas < 20) {
        pontos = horas * 5
    } else if (horas > 20) {
        pontos = horas * 10
    }
    dinheiro = pontos * 0.05

    alert(dinheiro)

}

atividadeFisica();







