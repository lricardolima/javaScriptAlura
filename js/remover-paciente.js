//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
   
   //var alvoDoEvento = event.target;
   //var paiDoAlvo = alvoDoEvento.parentNode.classList.add("fadeOut");
   event.target.parentNode.classList.add("fadeOut");
   setTimeout(function () {
       event.target.parentNode.remove();
   }, 700);
   
});




/**  pacientes.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function () {
        this.remove();
    })
}) */
