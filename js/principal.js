console.log("atquivo acessado extenamente");

var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "Nutricionista";


// calcular o IMC do paciente //

var paciente = document.querySelector("#primeiro-paciente");
var tdNome = paciente.querySelector(".info-nome");
var nome = "Ricardo";
tdNome.textContent = nome;
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");
var IMC = peso / (altura * altura);
tdImc.textContent = IMC;
alert(IMC);

console.log(paciente);
console.log(nome);
console.log(peso);
console.log(altura);
console.log(IMC);


var paciente = document.querySelector("#segundo-paciente");
var tdNome = paciente.querySelector(".info-nome");
var nome = "Souza";
tdNome.textContent = nome;
var tdPeso = paciente.querySelector(".info-peso");
var peso = 75;
tdPeso.textContent = peso;
var tdAltura = paciente.querySelector(".info-altura");
var altura = 1.71;
tdAltura.textContent = altura;
var tdImc = paciente.querySelector(".info-imc");

console.log(paciente);
console.log(nome);
console.log(peso);
console.log(altura);
console.log(IMC);

var pesoEhValido = true;
var alturaEhValido = true;

if (peso <= 0 || peso >= 300) {
    console.log('peso inválido!');
    pesoEhValido = false;
    tdPeso.textContent = ('Peso é inválido!');
}
if (altura <= 0 || altura >= 3) {
    console.log('altura inválida!');
    alturaEhValido = false;
    tdAltura.textContent = ('Altura é inválida!');
}
if (pesoEhValido && alturaEhValido) {
    var IMC = peso / (altura * altura);
    tdImc.textContent = IMC;
    alert(IMC);
}