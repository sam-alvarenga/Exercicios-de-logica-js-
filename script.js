/* > maior
< menor
>= maior ou igual
<= menor ou igual
== igual
!= diferente */

/* variáveis que tem que ser zeradas todas que vão receber resultados de operções matemáticas. Ex: números, quantidades, somatórias, acumalativas */

function algIdade() {
    console.log('teste');

    /* Variaveis */
    /* let= */
    let nome, idade;
    /* prompt= comando utilizado para solicitar informações */
    nome = prompt('Digite seu nome');


    alert(nome);

    /* string= é uma cadeia de caracteres ou seja uma sequencia texto podendo conter números, letras e caracteres especiais */

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
    /* if= Se */
    if (media < 5) {
        alert('Conceito D')

        /* else if= else:senão if: Se. Usa quando tem mais de duas opçoes a serem verificada */
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

/* atividadeFisica(); */

function calcIdade() {
    let idade, somaIdades, contIdade;

    somaIdades = 0;
    contIdade = 1;
    /* while = é enquanto é uma estrutura de repetição essencial que permite a execução contínua de um bloco de código enquanto uma condição estabelecida for verdadeira. */
    
    while (contIdade < 5) {
        idade = Number(prompt('Digite sua idade ' + contIdade + 'º Pessoa '));
        somaIdades = somaIdades + idade;
        contIdade = contIdade + 1;

    }

    alert('A soma das idades é ' + somaIdades)
}

/* calcIdade(); */


function calcMedia() {
    let idade, somaIdades, contIdade, media;

    somaIdades = 0;
    contIdade = 0;

    while (contIdade < 20) {
        idade = Number(prompt('Digite sua idade '));
        somaIdades = somaIdades + idade / 20
        contIdade = contIdade + 1;

    }

    alert('A média é ' + media)
}

/* calcMedia(); */

function idade() {
    let idade, maiorIdade, contPessoas;

    maiorIdade = 0
    contPessoas = 1

    while (contPessoas <= 5) {
        idade = Number(prompt('Digite a ' + contPessoas + 'º idade '));
        if (idade >= 18) {
            /* maiorIdade = maiorIdade +1 */
            /* maiorIdade += 1 */
            maiorIdade++
        }
        /* contPessoas = contPessoas +1 */
        /* contPessoas +=1 */
        contPessoas++

    }
    alert('A quantidade de pessoas maiores de idade é ' + maiorIdade)
}

/* idade(); */

function menorIdade() {
    let idade, menorIdade, contIdade;

    menorIdade = 0;
    contIdade = 1;
    idade = Number(prompt('Digite a ' + contIdade + 'º idade'));

    menorIdade = idade;

    while (contIdade <= 4) {
        idade = Number(prompt('Digite a ' +contIdade+ 'º idade'));
        if (idade < menorIdade) {
            menorIdade = idade
        }
        /* ele recebendo mais ele e +1 */
        contIdade++
    }
    alert ('A menor idade é ' +menorIdade)
}
/* menorIdade(); */

function racao() {
    let pesoRacao, qtdGramas, total;
    
    pesoRacao = Number(prompt('Digite o peso do saco da ração'));
    qtdGramas = Number(prompt('Digite a quantidade diária em gramas'));
    total = pesoRacao - (qtdGramas*2) *5

    alert("Sobraram " + total);    
}

/* racao() */

function calcRacao() {
    let pesoRacao, qtdGramas, total, qtGatos, qtDias;
    
    pesoRacao = Number(prompt('Digite o peso do saco da ração'));
    qtdGramas = Number(prompt('Digite a quantidade diária em gramas'));
    qtGatos = Number(prompt('Quantidade de gatos'));
    qtDias = Number(prompt('Quantidade de dias'));

    total = pesoRacao - (qtdGramas*qtGatos) *qtDias

    alert("Sobraram " + total);    
}

/* CalcRacao() */

function CalcuIdade() {
    let idade, anoAtual, nascimento;

    anoAtual = Number(prompt('Digite o ano atual'));
    nascimento = Number(prompt('Digite seu ano de nascimento'));
   
    idade = anoAtual - nascimento


    alert("sua idade é"  +idade);
    
}
/* CalcuIdade() */

function idade() {
    let question, idade = 0, contIdade = 0, media = 0, somaIdade = 0, contMaior = 0;

    question = (prompt("Deseja digitar informações de usuários? sim- para continuar e não-para parar"));

    while (question == "sim") {
        idade = Number(prompt("Digite uma idade"));
        contIdade++ 
        somaIdade += idade
        
        if (idade >=21){
            contMaior++
        } 
        question = prompt("Deseja digitar informações de usuários? sim- para continuar e não- para parar")
        
    }
    media = somaIdade / contIdade;

    alert (" Foram digitadas " +contIdade+ " Idades, a média das idades digitadas é " +media+ " e " +contMaior+  " possuem 21 anos o mais. ");
    
}

/* idade() */

function calcValue(){
    let question, values, contValues, somaValues, medValues, menorValue
    contValues = 0
    somaValues = 0
    menorValue = 0
    question = prompt('Deseja digitar valores? sim-para continuar e não-para continuar')
    while(question=='sim'){
        values = Number(prompt('Digite aqui seu valor:'))
        contValues++
        somaValues = somaValues+values
        if(values<menorValue || menorValue==0){
            menorValue = values
        }
        question = prompt('Deseja digitar valores? sim-para continuar e não-para continuar')
    }
    medValues = somaValues/contValues
    alert('O somatório final dos valores foi '+somaValues+', enquanto sua média é de '+medValues+' E o menor valor foi '+menorValue)
}

/* calcValue() */

/* function Formulario() {
    let nome, idade, genero, idMaior, idMenor, pessoaNova, pessoaVelha;

    question = prompt('Deseja digitar valores? sim-para continuar e não-para continuar');

    while (question == "sim") {
        nome = prompt("Digite seu nome");
        idade = Number(prompt("Digite sua idade"));
        genero = prompt("Digite seu genêro");

        if (idade>idMaior) {
            idMaior = idade;
            pessoaVelha = nome;
        }
        if(idade<idMenor || idMenor == 0 && genero == 'f'){
            idMenor = idade;
            pessoaNova = nome; 
        }
        question = prompt('Deseja digitar valores? sim-para continuar e não-para continuar');
    }
    alert("O nome da pessoa mais velha é " +pve);
    alert("O nome da mulher mais jovem é " +pessoaNova);
}
Formulario() */

function lerIdades() {
    let nome, idade = 0, genero, idMaior = 0, menor = 0, maisVelha =0 , mulherNova = 0, count = 0, soma = 0, qtdHomens = 0, qtdMulherMenor = 0;
    let op = prompt('deseja cadastrar um usário? (s/n)');


    while (op == 's' && op != 'n') {
        /* cadastro de dados */
        nome = prompt('Nome: ');
        idade = Number (prompt('digite a idade: '));
        genero = prompt('Gênero (M - Masculino / F - Femenino): ');

        /* verificar qual o mais velho */
        if (idade > idMaior) {
            idMaior = idade;
            maisVelha = nome;
        }
        /* verificar a mulher mais jovem e mostrar */
        if (idade < menor || menor == 0 && genero == '') {
            menor = idade;
            mulherNova = nome;
        }
        /* Quantos homens maiores que 30  */
        if (idade > 30 && genero == 'M'){
            qtdHomens++;
        
        }
        /* Quantas mulheres */
        if(idade < 18 || qtdMulherMenor == 0 && genero == 'F' ){
            qtdMulherMenor++;
        }
        count++;
        soma+=idade;

        op = prompt('deseja cadastrar um usário?(s/n)');
    }
    /* média */
    let media = soma / count;

    alert('O nome da pessoa mais velha é: ' + maisVelha);
    alert('O nome da pessoa mulher mais jovem é: ' + mulherNova);
    alert('A média das pessoas:' + media.toFixed(2));
    alert('Quantos homems com mais 30 ' + qtdHomens);
    alert('Quantas mulheres tem menos de 18 anos: ' + qtdMulherMenor);
}   
lerIdades();