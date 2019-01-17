
var nom1=25;
var nom2=25;
var ope=prompt('Operación, 1=suma, 2=resta, 3=multiplicación, 4= división') ;
var a=prompt ('primer digito');
var b=prompt(' segundo digito');
var nombre = document.getElementById('nombre_1');
var load= document.getElementById('load');

load.addEventListener('onload'run);



function run() {
var enviar=document.getElementById('enviar_1');
enviar.addEventListener('click', calcu);
  function calcu(){

    var ope1=parseInt(ope);

    if (ope1 == 1) {


       var a1 =parseFloat(a);
       var b1=parseFloat(b);
       var suma =a1+b1;
       alert(suma);

    }

    if (ope1 === 2)
     {

        // document.write (result)

        var a1 =parseFloat(a);
        var b1=parseFloat(b);
        var suma =a1-b1;
        alert(suma)

     }

    if (ope1 === 3)
    {

       // document.write (result)
       var a1 =parseFloat(a);
       var b1=parseFloat(b);
       var suma =a1*b1;
       alert(suma)
    }

    if (ope1 === 4){
       // document.write (result)
       var a1 =parseFloat(a);
       var b1=parseFloat(b);
       var suma =a1/b1;
       alert(suma);
    }
  }
}

  // function nom (){
  //   var nombre=prompt('Tu nombre:');
  //   console.log(nombre);



//
// alert ('Tu resultado es' + result );
// document.write(`${result}`);
// if (ope===1) {
//   function suma (nom1,nom2){
//    // document.write (result)
//    var result = nom1 + nom2;
//    console.log(result);
//    console.log('Esta es la consola de js');
//    suma (nom1,nom2);
//
//   }
// }
//
// if (ope===2)
//  {
//    function resta (nom1,nom2){
//     // document.write (result)
//     var result = nom1 - nom2;
//     console.log(result);
//     console.log('Esta es la consola de js');
//     resta (nom1,nom2);
//
//   }
//  }
//
// if (ope===3)
// {
//   function multi (nom1,nom2){
//    // document.write (result)
//    var result = nom1 * nom2;
//    console.log(result);
//    console.log('Esta es la consola de js');
//    multi(nom1,nom2);
//
//  }
// }
//
// if (ope===4){
//   function devi(nom1,nom2){
//    // document.write (result)
//    var result = nom1 / nom2;
//    console.log(result);
//    console.log('Esta es la consola de js');
//    div(nom1,nom2);
//
//  }
// }
//
//
// function nom (){
//   var nombre=prompt('Tu nombre:');
//   console.log(nombre);
//
// }
