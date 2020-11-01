
/*
var capsula = 15

if (capsula == 16){
    console.log("@_joseliot")
}
else {
    console.log("salve")
}
*/


//=======================================================================================================

/* validado algo com if\

var nome = "João"
var idade = 17

if ( idade >= 18) {
    console.log("Olá, João!")
    console.log("Você passou no nosso teste e já pode dirigir!")
}
if (idade < 18) {
    console.log("Olá, NOME_DO_USUARIO_AQUI")
}

*/

//=======================================================================================================

/* validando algo com if 

var idade = 17
// Sua validação aqui
if ( idade >= 18 ) {
    console.log("Você é obrigado a votar")
}
if ( idade >= 16 ) {
    console.log("Seu voto é opcional")
} 

*/

//=======================================================================================================

/* aprendendo array, if e else

var diaSemana = [ "sabado", "domingo"]

// Seu código aqui

if (diaSemana == ) {
    console.log("O banco está fechado, tente outro dia")
}
else {
    console.log("Você pode ir ao banco")
}

*/

//=======================================================================================================

/* contador

var relogio = 1
for (var relogio = 10; relogio <= 100; relogio++) {
    console.log(relogio)
}*/

//=======================================================================================================

/* calculadora de tabuada

var i = 7
var multi = 1
for (var multi; multi <= 10; multi++) {
    console.log("7 x", multi + " =", i * multi)
}

*/

//=======================================================================================================

/* loop pela variavel

var robo = "Bom dia, grupo!"
var i = 1

for (var i = 1; i <= 7; i++) {
    console.log(robo)
}

*/

//=======================================================================================================

/* loop pelo console

var i = 1

for (var i = 1; i <= 7; i++) {
    console.log("Bom dia, grupo!")
}

*/

//=======================================================================================================

/* lista de carros

var listaDeCarros = ["Fox", "Uno", "Gol", "Astra", "Fiesta"]

// Seu loop aqui:

for (var i = 0; i < listaDeCarros.length; i++) {
    console.log("Nome do Carro: " + listaDeCarros[i])
}

*/

//=======================================================================================================

/* mostrar o lenght do array

var testedesoma = [20, 30]
var soma = testedesoma
    for(i = 0; i < testedesoma.length; i++){
console.log(i) 
    }
*/

//=======================================================================================================

/* 

Uma empresa separou em uma lista, os valores dos lucros mensais. Com isso você terá no código um array com o seguinte nome: listaDeLucro contendo em cada posição o valor de recebido de cada mês!

var listaDeLucro = [100, 30, 300, -10, 600, 10]


Seu trabalho será criar um loop que calcule o valor total baseado nessa lista, e coloque o valor em uma variável já existente no código chamada: lucroTotal

*/

//=======================================================================================================

/* lista de ganhos da empresa com saldo total

var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;

//seu loop aqui

//repetiçao
for(i = 0; i < listaDeLucro.length; i++){
    lucroTotal += listaDeLucro[i]
}
console.log(lucroTotal)

*/

//=======================================================================================================

/* entrar na array, e identificar os numeros negativos e contabilizar 

var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0
for ( var i = 0;  i < listaDeGanhos.length; i++){
        if ( listaDeGanhos[i] < 0 )
        totalNegativos++
    }

    console.log(totalNegativos)
*/

//=======================================================================================================

/* entrar num array e identificar um objeto especifico

var listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]
var busca = "Cajá"

//seu loop aqui

for ( var i = 0; i < listaDeFrutas.length; i++ ) {
    listaDeFrutas[i]
    if (listaDeFrutas[i] == busca){
        console.log("Sim, temos a fruta banana disponível")
    }
    }

*/

//=======================================================================================================

/* achar o numero sorteado na cartela e imprimilo

var cartela = [8, 13, 18, 22, 42, 49]
  var numeroSorteado = 42
  for ( i = 0; i < cartela.length; i++){
    if (cartela[i] == numeroSorteado){
      console.log("Encontrei o número!")
      break
    }
  }

*/

//=======================================================================================================

/* listar e imprimir apenas numeros pares

for ( i = 0; i <= 20; i++){
    if ( i % 2 == 0) {
        console.log(i)
    }
}

*/

//=======================================================================================================

/* DAR UM SOBRENOME PARA TODOS, MAS APENAS UM DA LISTA TEM QUE TER OUTRO SOBRENOME

var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]

for ( i = 0; i < familia.length; i++){

    if (familia[i] == "Pedro") {
        console.log(familia[4] + " Sousa")
        continue
    }
console.log(familia[i] + " Macedo")

    }
*/

//=======================================================================================================

/* ENCONTRAR UM OBJETO NO ARRAY DAR UM BREAK LOGO APÓS ANUNCIAR O ACHADO

var baralho = ["Ás", "Dama", "Rei", "Valete"]
  
//Seu código aqui

for (i = 0; i < baralho.length; i++) {
  if (baralho[i] == "Rei"){
    console.log("Encontrei o Rei!")
    break

*/

//=======================================================================================================

/* TABUADA DO 7 COM FUNCTION

function tabuadaDoSete(){

    var sete = 7

    for( i = 1; i <= 10; i++)
    console.log("7 x " + i + " = " + sete * i)
}

*/

//=======================================================================================================

/* FUNÇÃO QUE COMPARA O VALOR DE A E B E RETORNA A CASO SEJA MENOR QUE B

    var a = 10
    var b = 30
function menorNumero(a, b){
    
    if(a < b ){
        return a
    }
}

*/ 

//=======================================================================================================

/* CALCULAR A AUTONOMIA DO COMBUSTIVEL

function autonomia(quantidadeDeCombustivel, rendimento){
	return quantidadeDeCombustivel * rendimento
}

*/

//=======================================================================================================

/* CALCULAR PREÇO DA ROUPA SUJA

function calculaValorDevido(pesoDaRoupaSuja) {
	return pesoDaRoupaSuja * 5.00
}

*/

//=======================================================================================================

/* CALCULAR PREÇO DA ROUPA SUJA

function calculaValorDevido(pesoDeRoupaSuja){
	return pesoDeRoupaSuja * 3.00 + 10.00 
}

*/

//=======================================================================================================

/* IDENTIFICANDO LETRAS MAIUSCULAS E MINUSCULAS COM UMA FUNCTION

function comecaComMaiuscula(palavras){
    return /^[A-Z]/.test(palavras)
 }
  
 var palavras = ["Amor", "copo", "Bolacha", "biscoito"];
 resultado = comecaComMaiuscula(palavras)
  
 // Seu código vem aqui embaixo.
 
 for (i = 0; i < palavras.length; i++ ) {
    if (comecaComMaiuscula(palavras[i])){
        console.log(palavras[i] + " " + "Começa com maiúscula")
    }
    else {
        console.log(palavras[i] + " " + "Não começa com maiúscula")
    }
 }
 comecaComMaiuscula()

*/

//=======================================================================================================

/* NAO GOSTEI. VALIDAR UM CPF, SENDO QUE A FUNCTION JÁ ESTAVA PRONTA, BASICAMENTE NAO FIZ NADA

if (validaCPF()){
    console.log("CPF válido")
}
else {
    console.log("CPF inválido")
}

*/

//=======================================================================================================

/* COLETAR A DATA DE NASCIMENTO E VERIFICAR SE PODE ENTRAR NA SESSÃO DO CINE

// A função a seguir (calculaIdade) não precisa ser alterada
// A sua função deve ser escrita logo abaixo desta
function calcularIdade(dataDeNascimento) {
    var [dia, mes, ano] = dataDeNascimento.split('/');
    var d = new Date();
    var anoAtual = d.getFullYear();
    var mesAtual = d.getMonth() + 1;
    var diaAtual = d.getDate();
    ano = +ano; mes = +mes; dia = +dia;
    var quantosAnos = anoAtual - ano;
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
 }
 // Escreva aqui sua função

 function deixaEntrar(dataDeNascimento, censura){
    var dataDeNascimento = 11/07/2000
    var censura = 18
    return calcularIdade() >= 18
    }
 }

 */ 

//=======================================================================================================

/* COMPARAR PREÇOS

//MENORES PREÇOS
function maisBaratosQue(valor, precos) {
    return precos.filter(p => p <= valor);
 }

//MAIORES PREÇOS
 function maisCarosQue(valor, precos){
    return precos.filter(p => p >= valor);
 }

 function precosEntre(valorMenor, valorMaior, precos) {

    return maisCarosQue(valorMenor, maisBaratosQue(valorMaior, precos));
 
 }
 console.log(precosEntre(5, 10, [1,2,3,4,5,6,7,8,9,10]));

*/

//=======================================================================================================

/* FUNÇÕES NATIVAS

FUNÇÕES PARA ARRAYS -------------------------------------------------------------------------------------

array.pop() - remove o ultimo elemento de um array e devolve o valor.

array.push("string") - adiciona elementos ao array.

array.indexOf("string") - procura o valor do parâmetro dentro do array e retorna a sua posição.

Math.random() * número - retorna um número aleatorio entre 0 e o numero escolhido. obs: ele vai retornar um número quebrado.

Math.round(Math.random() * numero) - retorna um número aleatorio entre 0 e o numero escolhido. obs: agora o numero será inteiro.

Math.min(parâmetro) - vai passar pelo array e dizer qual é o menor valor.

Math.max(parâmetro) - vai passar pelo array e dizer qual é o maior valor.

FUNÇÕES PARA STRINGS ------------------------------------------------------------------------------------

string.repeat(quantidade de vezes a repetir) - repete a string quantas vezes você definir. obs: pode ser variáveis também.

string.toUpperCase() - DEIXA TUDO DA STRING MAIÚSCULO. obs: pode ser em variaveis tipo string também.

*/ 

//=======================================================================================================

/* VERIFICA SE O ALUNO EM QUESTÃO ESTAVA PRESENTE, CASO ESTEJA, RETORNA TRUE

function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
var nomeDoAluno = "Caio"
var nomesDosPresentes = ["Matheus", "Leticia", "Caio"]

nomesDosPresentes.indexOf(nomeDoAluno)
return true
 
}

*/

//=======================================================================================================

/* PADRONIZAR EM LETRAS MAIÚSCULAS

var palavras = ["gato", "cachorro", "tartaruga"]
 
    function transformaParaMaiusculo(palavras) {  

        var array = Array()
       
        for(var i=0;i<palavras.length;++i)
       
            array.push(palavras[i].toUpperCase())
       
        return array    
}

*/

//=======================================================================================================

/* FUNÇÃO PARA GERAR DEZENAS

function gerarDezenas() {
    Math.round(Math.random() * 60)
    return 
}

*/

//=======================================================================================================

/* RETORNAR UM ARRAY COM O VALOR MAXIMO E MINIMO

function maxmin(a, b, c, d, e){
var a = 1
var b = 5
var c = 2
var d = 3
var e = 4

Math.min(a, b, c, d, e)
Math.max(a, b, c, d, e)
return

}

*/

//=======================================================================================================

/* VERIFICAR O "NUMERO DO AP" E, CASO SEJA PAR, DIZER QUE PODE USAR O ELEVADOR 

var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]
for ( i = 0; i < moradores.length; i++){

    if (i % 2 == 0){
       console.log("O morador " + moradores[i] + " pode usar o elevador")
    }
    else{
      
    }
   
}

*/

//=======================================================================================================

/* ESSE É O CÓDIGO EM QUE PERCEBI QUE NÃO PRECISO CRIAR UMA VAR PARA UM PARÂMETRO. ESSA FUNÇÃO MANIPULA A IDADEE A ALTURA, COM O INTUITO DE DEFINIR QUEM PODE ENTRAR OU NÃO

var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]

    function maiorAlto(usuario) {

        if (usuario[1] >= 18 && usuario[2] >= 170) {
            return true;
    
        }
        else {
            return false;
        }
    
    }

*/
  
//=======================================================================================================

/* BUSCAR NUMA ARRAY DETERMINADOS NUMEROS E PASSÁ-LOS PARA ARRAY DE GRUPAMENTO

var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = [159, 151, 156, 154]
var grupoB = [165,167,169,160] // OBS: MESMO SEM ESSES VALORES DENTRE DOS ARRAYS A FUNCTION PUSH IRIA COLOCAR ELES DENTRO.
var grupoC = [170,187,191,171,170]

function diferirTamanhos()
{
    for ( i = 0; i < alunos.length; i++){

        if ( alunos[i] >= 150 && alunos[i] <= 159 )
        {
            grupoA.push(alunos[i])
        }

        if ( alunos[i] >= 160 && alunos[i] <= 169 )
        {
            grupoB.push(alunos[i])
        }
    
        if ( alunos[i] >= 170)
        {
            grupoC.push(alunos[i])
        }
    
    }
}

console.log(grupoA)
console.log(grupoB)
console.log(grupoC)

*/ 

//=======================================================================================================

/* VERIFICA A QUANTIDADES DE VEZES QUE DADA PLACA APARECE E CONTABILIZA NO PARAMETRO PLACA, APOS ISSO FAZ O CALCULO DO VALOR A SER PAGO DE ACORDO COM AS REGRAS ESTABELECIDAS(20 ENTRADAS 10 REAIS CADA, A PARTIR DE 20, 5 REAIS CADA)

// Esse array é utilizado dentro das funções. Cada placa neste array representa
// uma entrada do respectivo veículo no estacionamento. Não é necessário alterar
// esse array.
var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142','RXB-2525', 'AKX-3333', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',   'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333','AKX-3333', 'ORO-7142', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525'
 ]

 
 function calcularNumeroDeEntradas(placa){

      var cont = 0;
    
      for (var i = 0 ; i < placas.length ; i++) {
    
         if (placas[i] == placa) {
    
            cont++;
    
         }
    
      }
    
      return cont;
    
    }
    
     
    
    function calcularValorDevido(placa){
    
      var numEntradas = calcularNumeroDeEntradas(placa);
    
      if (numEntradas <= 20) {
    
         return 10.00 * numEntradas;
    
      } else {
    
         return (200 + (numEntradas - 20) * 5);
    
      }
    
    }
    
*/
 
//=======================================================================================================

/* PEGAR A QUANTIDADE DE AVALIACOES E OS DIFERENCIA POR VARIAVEIS E DEPOIS OS RETORNA EM .LENGTH

function calculaGostos(notas) {

    var nNaoGostaram = 0
    var nMediano = 0
    var nGostaram = 0

for (i = 0; i < notas.length; i++){
    if ( notas[i] <= 1){
        nNaoGostaram++
    }

    if ( notas[i] >= 2 && notas[i] <= 3){
        nMediano++
    }

    if ( notas[i] >= 4 && notas[i] <= 5){
        nGostaram++
    }
}
        return [nNaoGostaram, nMediano, nGostaram]
}
calculaGostos()

*/

//=======================================================================================================

/* IMPRIME OS DADOS SOBRE DADO PERSONAGEM/FILME/LANÇAMENTO DE CERTO FILME POR UM ID

function filme(personagens, filmes, lancamentos, id)
{
  // Escreva abaixo o seu código:

  if ((id > 0)&&(id <= filmes.length)) {

    var tratamento = id -1;

    return personagens[tratamento] + " é um personagem do filme " + filmes[tratamento] + " que estreou no cinema em " + lancamentos[tratamento] + ".";
  }
  else {
      return "Essa não é uma opção válida.";
  }

}
filme()

*/

//=======================================================================================================

/*  PEGA OS ITENS DOS PARAMETROS E OS COLOCA ATRAVÉS DE UMA FUNÇAO PUSH DENTRO DA VARIAVEL "RESULTADO"

function series(prefixo, array)
{

var resultado = []
    // Escreve sua função abaixo:
   for(i = 0; i < array.length; i++){

    resultado.push(prefixo + ' ' + array[i])

   }
   return resultado
}

*/

//=======================================================================================================

/*  PROCURA NUMEROS NUMA ARRAY, CASO ESSES NUMEROS SEJAM MAIOR QUE O PARAMETRO NUM, ELE OS TRANSPORTA PARA UM NOVO ARRAY

function maiorQueNum(array, num)
{
  // Escreva abaixo o seu código:
var maioresQueNum = []


  for(i = 0; i < array.length; i++){
    
    if ( array[i] > num){
        maioresQueNum.push(array[i])
    }

  }
  return maioresQueNum
}
maiorQueNum()

*/

//=======================================================================================================

/*  BUSCA DENTRO DE UM ARRAY, O PRIMEIRO DIVISOR DO NUMERO TESTE, VULGO "NUM", E O RETORNA O RESULTADO CASO SEJA DIVISIVEL

function buscarDivisivelPor(array, num){
    // Escreva abaixo o seu código:
    for( var i = 0 ; i< array.length; i++){

        if(array[i]!=0 && array[i] % num == 0){

        return array[i]


        }

            else if(i == array.length || num == 100){

            return "Nenhum número válido encontrado!"

            }
    }
}

*/

//=======================================================================================================

/*  IMPRIMIR UM VALOR DE ACORDO COM A QUANTIDADE ESTABELECIDA PELO PARAMETRO "qtd"

function repete(valor,qtd){

    for (i = 1; i <= qtd; i++){
        console.log(valor)
    }
 
}

*/  

//=======================================================================================================

/* CALCULA A COMISSÃO E RETORNA O RESULTADO

function comissao(preco,porcentagem){
  
   var resultado = preco * porcentagem / 100
   
   return resultado
}

*/