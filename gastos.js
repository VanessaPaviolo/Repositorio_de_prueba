var promedio = document.getElementById("promedio");
var lugar_promedio = document.createElement("p");
promedio.appendChild(lugar_promedio);


//EVENTO DEL MOUSE PARA LOS BOTONES//
var agregargastos= document.getElementById("agregargastos");
var nombres= [ ];
var montos=[ ];
var ingresados= document.getElementById("ingresados");
 agregargastos.addEventListener("click", function() {
     console.log("hola");
     let nombre= document.getElementById("nombre").value;
     let monto= document.getElementById("monto").value;

     nombres.push(nombre);
     montos.push(parseInt(monto));
     var nom= document.createElement("p");
     var mon= document.createElement("p");
    
    for (let i = 0; i < nombres.length; i++) {
         nom.innerHTML=nombres[i]; 
         ingresados.appendChild(nom);
         mon.innerHTML=montos[i];
         ingresados.appendChild(mon);
        
    }
    a= ArrayAvg(montos);
    lugar_promedio.innerHTML= a;
     
 })

 

 function ArrayAvg(montos) {
    var j = 0;
    var summ = 0;
  
    for (j = 0; j <= montos.length - 1; j++) {
      summ = summ + montos[j];
    }
    return summ / montos.length;
  }

