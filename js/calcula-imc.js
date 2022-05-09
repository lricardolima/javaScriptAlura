console.log("atquivo acessado extenamente");

var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "Nutricionista";


// calcular o IMC do paciente //

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
        paciente.classList.add("paciente-valido");
    }


    console.log(paciente);
    console.log(peso);
    console.log(altura);
    console.log(imc);
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(3);

}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 500) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}



titulo.addEventListener("click", function () {
    console.log("Oi, cliquei aqui!");
});
//var paciente = document.querySelector("#segundo-paciente");
//var tdNome = paciente.querySelector(".info-nome");
//var nome = "Souza";
//tdNome.textContent = nome;
//var tdPeso = paciente.querySelector(".info-peso");
//var peso = 75;
//tdPeso.textContent = peso;
//var tdAltura = paciente.querySelector(".info-altura");
//var altura = 1.71;
//tdAltura.textContent = altura;
//var tdImc = paciente.querySelector(".info-imc");

//console.log(paciente);
//console.log(nome);
//console.log(peso);
//console.log(altura);
//console.log(IMC);
