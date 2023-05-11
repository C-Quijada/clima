var estado = 0;

function cambioRegla() {
  //lo primero que hay que hacer es obtener los elementos a cambiar
  let grados = parseInt(document.getElementById("grados").innerHTML)
  
  switch (estado) {
    
      case 0:
      //0 indica que pasamos de celsius a farenheid
      let numeroUno = celsiusAFarenheid(grados);
      document.getElementById("grados").innerHTML = `${numeroUno.toFixed(1)} F°`
      
      let listaG = document.querySelectorAll('.dia .dia__grados')

      for(let elementos of listaG){
        
        elementos.innerHTML = celsiusAFarenheid(elementos.innerHTML).toFixed(1)
      }
     
      break;
    
      case 1:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      let numeroDos = farenheidACelsius(grados)
      document.getElementById("grados").innerHTML = ` ${numeroDos} C°`
      let listaG2 = document.querySelectorAll('.dia .dia__grados')

      for(let elementos of listaG2){
        
        elementos.innerHTML = farenheidACelsius(Math.round(elementos.innerHTML))
      }
      
     
      break;
  }
}




function celsiusAFarenheid(x) {
  let numero = x * 1.8 + 32;

  estado = 1;
  return numero;
}

function farenheidACelsius(x) {
  let numero = Math.round((x - 32) / 1.8);
  

  estado = 0;
  return numero;
}
