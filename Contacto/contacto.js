// function validar() {

//   var nombre = document.formu.nombre.value.trim();
//   if (!nombre) {
//     alert('El campo de "nombre" es obligatorio');
//     document.fvalida.nombre.focus();
//     return false;
//   };
  
//   var correo = document.formu.correo.value;
//   var arroba = false;
//   var punto = false;
//   var apos = 0;
//   var ppos = 0;

//   for (var i=0; i<=correo.length; i++) {
//     if (Entrada.charAt(i) == '@' ) {
//         arroba = true;
//         apos = i  ;
//         }else if (Entrada.charAt(i) == '.') {
//             punto = true;
//             ppos = i;
//         };
//     };

//   if ((arroba && punto) && (apos < ppos )){
//       cambiarDom();
//     return false;
//     }else {  
//         alert('Perdon, Ingrese una dirección Validad de Email')
//          return false}
// };

// function cambiarDom(){
//     var foto = document.getElementsByClassName('fa-solid fa-check');
//     document.foto.src=foto;
// }

// aaa





var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var texto = document.getElementById("texto");
var form = document.getElementById("formu");

form.addEventListener("submit",e=>{
    e.preventDefault();
    let email = /^\w+@\w+(\.\w{3})$/;
    if(nombre.value.length==0){
        alert('El campo "nombre" es obligatorio');
    }
    if(!email.test(correo.value)){
        alert('El campo "Correo Electronico" es obligatorio');
    }
})