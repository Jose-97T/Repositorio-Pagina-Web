/*********************************************************** VALIDACION DEL FORMULARIO 1 (Datos de Contacto) ***********************************************/
/*VALIDACION PARA LOS DATOS DE CONTACTO:*/
function validarFormulario(){ 

  const nombre = document.getElementById('name').value;
  const apellidos = document.getElementById('surname').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const politica = document.getElementById('check').checked;

  //Si algunos de los campos estuvieran vacios
  if(nombre === "" || apellidos === "" || email === "" || telefono === ""){
    alert("Por favor, rellene los campos que faltan");
    return false;
  }

  /*VALIDACION PARA nombre*/
  // Verificamos si el nombre contiene solo letras
  const letrasNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (!letrasNombre.test(nombre)) {
    alert("El Nombre solo puede contener letras.");
    return false; 
  }
  // Verificamos si el nombre tiene más de 15 caracteres
  if (nombre.length > 15) {
    alert("El Nombre no puede tener más de 15 caracteres.");
    return false; 
  }


  /*VALIDACION PARA apellido*/
  //Verificamos si solo contiene letras
  const letrasApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if(!letrasApellido.test(apellidos)){
    alert('El Apellido solo puede contener letras');
    return false;
  }
  //Verificar si apellidos tiene una longitud maxima de 40 caracteres
  if(apellidos.length > 40){
    alert('En Apellidos solo puede contener un maximo de 40 caracteres');
    return false;
  }

  /*VALIDACION PARA telefono*/
  //Verificar si telefono contiene solo numeros
  const numerosTel = /^[0-9]+$/;
  if(!numerosTel.test(telefono)){
    alert('Telefono solo puede contener numeros');
    return false;
  }
  //Verifica un maximo de 9 digitos
  if(telefono.length > 9){
    alert('En Telefono solo puede contener un maximo de 9 digitos');
    return false;
  }

  /*VALIDACION PARA email*/
  //Verificar si cumple los estandares de un correo electronico
  const correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!correo.test(email)){
    alert('Email, no cumple con los estandares');
    return false;
  }

  /*VALIDACION PARA politica*/
  //Verifica si el checkbox esta marcado
  if (!politica) {
    alert("Debes aceptar las politica de privacidad.");
    return false;
  }

};


/********************************************************* PRESUPUESTO DEL FORMULARIO 2 *******************************************/

/*Seleccion del producto*/
const producto = document.getElementById('product');

/*Seleccion de plazo*/
const plazo = document.getElementById('plazo');

/*Seleccion de los extras*/
/*extra1*/
const Extra1 = document.getElementById('extra_1');

/*extra2*/
const Extra2 = document.getElementById('extra_2');

/*extra3*/
const Extra3 = document.getElementById('extra_3');

/*Presupuesto*/
const presupuesto = document.getElementById('presupuesto');

/*Actualizacion de las opciones ingresadas por el usuario*/
const Opciones = [producto , plazo, Extra1, Extra2, Extra3];


/*Funcion para realizar el calculo del presupuesto, teniendo en cuenta cualquier cambio*/
Opciones.forEach(opcion =>{
  opcion.addEventListener('change', function() {

    const opciones = producto.options[producto.selectedIndex];
    const precio1 = parseInt(opciones.getAttribute('data-precio'));
  
    /*Precio de los extras a obtener*/
    let precioExtra1 = 0;
    let precioExtra2 = 0;
    let precioExtra3 = 0;
    /*extra1*/
    if(Extra1.checked){
      precioExtra1 = parseInt(Extra1.getAttribute('data-precio')) || 0;
    }
    /*extras2*/
    if(Extra2.checked){
      precioExtra2 = parseInt(Extra2.getAttribute('data-precio')) || 0;
    }
    /*extra3*/
    if(Extra3.checked){
      precioExtra3 = parseInt(Extra3.getAttribute('data-precio')) || 0;
    }

    const precioTotal = precio1 + precioExtra1 + precioExtra2 + precioExtra3;

    /*Aplicar el descuento sobre el precioTotal y obtener precioFinal*/
    const plazoDias = parseInt(plazo.value) || 0;
    let precioFinal = 0 + "€";
      if(plazoDias == 0){
        precioFinal = precioTotal;
      }else if(plazoDias <= 15){
        const descuento = 10;
        precioFinal = precioTotal - (precioTotal * descuento/100);
      }else{
        const masDescuento = 20;
        precioFinal = precioTotal - (precioTotal * masDescuento/100);
      }

    presupuesto.innerHTML = precioFinal + " " + "€";

  }); 
}); 

/*Validacion Formulario 2 (presupuesto)*/
function validarPresupuesto() {
  const producto = document.getElementById('product').value;
  const plazo = document.getElementById('plazo').value;
  const condiciones = document.getElementById('condiciones').checked;

  if (!producto) {
    alert("Selecciona un producto.");
    return false;
  }

  if (plazo === "") {
    alert("Indica un plazo válido en días.");
    return false;
  }

  if (!condiciones) {
    alert("Debes aceptar las condiciones de privacidad.");
    return false;
  }
}

/******************************************************************** ENVIO Y RESETEO DEL FORMULARIO ******************************************************/

/*Verificar validacion del formulario y enviarlo*/
function validarTodo() {
  const contactoValido = validarFormulario();
  const presupuestoValido = validarPresupuesto();

  if (contactoValido && presupuestoValido) {
    document.getElementById('formulario').submit();
  }
}

/*Reseteo del formulario*/
function resetearFormulario(){
  document.getElementById('formulario').reset();
  document.getElementById('presupuesto').innerHTML = '0 €';
}