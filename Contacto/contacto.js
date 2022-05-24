
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

    document.getElementById('contenedor').className='contenedorMensaje';

    var contenido = document.formu.texto.value;

    var padreViejo = document.getElementById('textCont');
    padreViejo.innerHTML=contenido;
    
    return false;
}
