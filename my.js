// console.log("ciao");

$(document).ready(function(){


// gestione evento sul prev
  $('.prev').click(

      prevImg
  );

// gestione evento sul next
  $('.next').click(

      nextImg
  );



function nextImg() {

    //  momento del click
    var imgActive = $('.images img.active');
    // console.log(imgActive);

    // salvo il pallino attivo
    var ballActive = $('.nav i.active');

    // tolgo la classe active all'img selezionata
    imgActive.removeClass('active');

    // tolgo la classe active al pallino selezionato
    ballActive.removeClass('active');



    // verifico se questa img era l'ultima
    if(imgActive.hasClass('last')){
      $('.images img.first').addClass('active');
      $('.nav i.first').addClass('active');
    } else {
      // applica classe active alla prox img
      imgActive.next().addClass('active');
      ballActive.next().addClass('active');
      // console.log(imgActive.next());
  }
}

// funzione prevImg
 function prevImg() {

   // momento del click
   var imgActive = $('.images img.active');
   // salvo il pallino attivo
   var ballActive = $('.nav i.active');
   // tolgo la classe active all'img selezionata
   imgActive.removeClass('active');
   // tolgo la classe active al pallino selezionato
   ballActive.removeClass('active');

   // verifico se questa img e la prima
   if(imgActive.hasClass('first')){
     $('.images img.last').addClass('active');
     $('.nav i.last').addClass('active');
   } else {

     imgActive.prev().addClass('active');
     ballActive.prev().addClass('active');
     // console.log(imgActive.next());
   }

}
//attribuiamo ai cerchi un valore per poi essere pigiati
var primoP = $('#pallino1');
var secondoP = $('#pallino2');
var terzoP = $('#pallino3');
var quartoP = $('#pallino4');
// foto
var primaF = $('#primafoto');
var secondaF = $('#secondafoto');
var terzaF = $('#terzafoto');
var quartaF = $('#quartafoto');


});
