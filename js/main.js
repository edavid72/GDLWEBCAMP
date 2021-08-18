(function () {
  "use strict";
  var regalo = document.getElementById("regalo");
  document.addEventListener("DOMContentLoaded", function () {

    //Map**************
    var map = L.map("mapa").setView([15.43188, -87.917962], 12); //coordinates//

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([15.43188, -87.917962])//coordinates//
      .addTo(map)
      .bindPopup("DServellon Development <br> David Servellon")//customize label
      .openPopup();

    //******************* */



    //Campos Datos Usuarios
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");

    //Campos Pases
    var pase_dia = document.getElementById("pase_dia");
    var pase_dosdias = document.getElementById("pase_dosdias");
    var pase_completo = document.getElementById("pase_completo");

    //Botones y Divs
    var calcular = document.getElementById("calcular");
    var errorDiv = document.getElementById("error");
    var botonRegistro = document.getElementById("btnRegistro");
    var lista_productos = document.getElementById("lista-productos");
    var suma = document.getElementById("suma-total");

    //Extras
    var camisas = document.getElementById("camisa_evento");
    var etiquetas = document.getElementById("etiquetas");

    calcular.addEventListener('click', calcularMontos);

    pase_dia.addEventListener("blur", mostrarDias);
    pase_dosdias.addEventListener("blur", mostrarDias);
    pase_completo.addEventListener("blur", mostrarDias);

    nombre.addEventListener("blur", validarCampos);
    apellido.addEventListener("blur", validarCampos);
    email.addEventListener("blur", validarCampos);
    email.addEventListener("blur", validarMail);

    function validarCampos() {
      if (this.value == "") {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "Este campo es obligatorio";
        this.style.border = "1px solid red";
        errorDiv.style.border = "1px solid red";
      } else {
        errorDiv.style.display = "none";
        this.style.border = "1px solid gray";
      }
    }

    function validarMail() {
      if (this.value.indexOf("@") > -1) {
        errorDiv.style.display = "none";
        this.style.border = "1px solid gray";
      } else {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = 'Debes ingresar un email valido "@"';
        this.style.border = "1px solid red";
        errorDiv.style.border = "1px solid red";
      }
    }

    function calcularMontos(event) {
      event.preventDefault();
      if (regalo.value === "") {
        alert("Debes elegir un regalo");
        regalo.focus();
      } else {
        var boletosDia = parseInt(pase_dia.value, 10) || 0,
          boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
          boletoCompleto = parseInt(pase_completo.value, 10) || 0,
          cantCamisas = parseInt(camisas.value, 10) || 0,
          cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

        var totalPagar =
          boletosDia * 30 +
          boletos2Dias * 45 +
          boletoCompleto * 50 +
          cantCamisas * 10 * 0.93 +
          cantEtiquetas * 2;
        console.log("Total a Pagar: $" + totalPagar);

        var listadoProductos = [];

        if (boletosDia >= 1) {
          listadoProductos.push(boletosDia + " Pase por dia");
        }

        if (boletos2Dias >= 1) {
          listadoProductos.push(boletos2Dias + " Pase por 2 dias");
        }

        if (boletoCompleto >= 1) {
          listadoProductos.push(boletoCompleto + " Pases completos");
        }

        if (cantCamisas >= 1) {
          listadoProductos.push(cantCamisas + " Camisas");
        }

        if (cantEtiquetas >= 1) {
          listadoProductos.push(cantEtiquetas + " Etiquetas");
        }
        lista_productos.style.display = "block";
        lista_productos.innerHTML = "";
        for (var i = 0; i < listadoProductos.length; i++) {
          lista_productos.innerHTML += listadoProductos[i] + "<br/>";
        }

        suma.innerHTML = "$" + totalPagar.toFixed(2); //tofixed para solo dejar 2 decimales

        console.log(listadoProductos);
      }
    }

    function mostrarDias() {
      var boletosDia = parseInt(pase_dia.value, 10) || 0,
        boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
        boletoCompleto = parseInt(pase_completo.value, 10) || 0;

      var diasElegidos = [];

      if (boletosDia > 0) {
        diasElegidos.push("viernes");
      }

      if (boletos2Dias > 0) {
        diasElegidos.push("viernes", "sabado");
      }

      if (boletoCompleto > 0) {
        diasElegidos.push("viernes", "sabado", "domingo");
      }

      for (var i = 0; i < diasElegidos.length; i++) {
        document.getElementById(diasElegidos[i]).style.display = "block";
      }


    }


  }); //DOM CONTENT LOADED
})();














$(function () {
  //Programa de conferencias
  $(".programa-evento info-cursos:first").show();
  $(".menu-programa a:first").addClass("activo");

  $(".menu-programa a").on("click", function () {
    $(".menu-programa a").removeClass("activo");
    $(this).addClass("activo");
    $(".ocultar").hide();

    var enlace = $(this).attr("href");
    $(enlace).fadeIn(1000);
    return false;
  });

  //Animaciones para los numeros
  $(".resumen-evento li:nth-child(1) p").animateNumber({ number: 6 }, 1200);
  $(".resumen-evento li:nth-child(2) p").animateNumber({ number: 15 }, 1200);
  $(".resumen-evento li:nth-child(3) p").animateNumber({ number: 3 }, 1500);
  $(".resumen-evento li:nth-child(4) p").animateNumber({ number: 9 }, 1500);
});


