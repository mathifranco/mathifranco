
// Detecting button press:

for (var i = 0; i<document.querySelectorAll(".boton").length; i++){

  document.querySelectorAll(".boton")[i].addEventListener("click", function()
  {
    // this.style.color = "orange";

var buttonClickedValue = this.innerHTML;

// ACA PASA UN VALOR BUTTON CLICK A LA FUNCION "makeSound" QUE ESTA ABAJO
makeSound(buttonClickedValue);


  });

}

// Detecting keyboard press:


document.addEventListener("keydown", function(event){
  makeSound(event.key);


});
var atrevida = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/atrevida.mp3');
var burroSonido2 = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/cancionBurro.mp3');
var adelantensen = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/adelantensen.mp3');
// var listaBurro =[atrevida, burroSonido2, adelantensen];

function makeSound(key){

  switch (key) {
    case "w":
      burroSonido2.play();
      // for(var count=0; count<listaBurro.length; count++){
      //   var mySound = listaBurro[count].play();
      //
      break;
      // var mySound = listaBurro[1].play();
      // break;
    case "a":
      var nosVamos = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/nosVamos.mp3');
      nosVamos.play();
      break;
      case "s":
      var cincoMin = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/cincominutos.mp3');
      cincoMin.play();
      break;
      case "d":
      var toySolito = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/porqueToySolito.mp3');
      toySolito.play();
      break;
      case "j":
      var teApesta = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/teApesta.mp3');
      teApesta.play();
      break;
      case "k":
      var comoCebollas = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/comoCebollas.mp3');
      comoCebollas.play();
      break;
      case "l":
      var puedoVolar = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/oiganPuedoVolar.mp3');
      puedoVolar.play();
      break;
      case "p":
      var niSeAcomoden = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/niseAcomoden.mp3');
      niSeAcomoden.play();
      break;
      case "o":
      var muyLejano = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/muymuyLejano.mp3');
      muyLejano.play();
      break;
      case "i":
      var otraotra = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/otraotra.mp3');
      otraotra.play();
      break;
      case "y":
      var desagradable = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/queTipoTanDesagradable.mp3');
      desagradable.play();
      break;
      case "t":
      var esoExplica = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/esoExplica.mp3');
      esoExplica.play();
      break;
      case "r":
      var vamosA = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/vamosAArreglarlo.mp3');
      vamosA.play();
      break;
      case "e":
      var asusta = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/esoSiqueAsusta.mp3');
      asusta.play();
      break;
      case "q":
      var noSoyBurro = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/nosoyburro.mp3');
      noSoyBurro.play();
      break;
      case "m":
      var mero = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/yaMeroLlegamos.mp3');
      mero.play();
      break;
      case "n":
      var cebollas2 = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/cebollas2.mp3');
      cebollas2.play();
      break;
      case "b":
      var yaNoBurro = new Audio('C:/Users/caroy/Desktop/Web Development/Proyecto Shrek/yaNoSereTanBurro.mp3');
      yaNoBurro.play();
      break;




    default: return(event);

  }

}
