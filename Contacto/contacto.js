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





// const nombre = document.getElementById("nombre");
// const correo = document.getElementById("correo");
// const texto = document.getElementById("texto");
// const form = document.getElementById("formu");

// form.addEventListener('submit',(e) =>{
//     let email = /^\w+@\w+(\.\w{3})$/;
//     if(nombre.value==null||nombre.value===""){
//         alerta.push('El campo "nombre" es obligatorio');
//     }

//     if(!email.test(correo.value)){
//         alert('El campo "Correo Electronico" es obligatorio');
//     }
//     e.preventDefault();
// })


function validar(){ //valido el nombre
    var cambiar=false;
    var nombre=document.formu.nombre.value.trim();
    if (!nombre){
    alert("Tiene que escribir su nombre")
    document.formu.nombre.focus()
    return false; 
    }

    var mail = document.formu.correo.value;
    var patronmail = /^\w+@\w+(\.\w{2,4})$/;
    if (!patronmail.test(mail)) {
        alert('Ingrese una dirección Válida de Email');
        document.formu.correo.focus()
        return false;
    }

    var texto = document.formu.texto.value.trim();
    if (texto===""||texto==null){
        alert("Debe completar el campo de mensajes");
        document.formu.texto.focus()
        return false; 
    }
    
    document.getElementById('foto').className='invertir';
    alert('Gracias por contactarte con nosotros')
    return false;
}
