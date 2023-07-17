window.addEventListener("load", (event) => {
    let elem=document.getElementById("cont");
    
    
    
    setInterval(() => {
       const tiempoTranscurrido=Date.now();
       const tiempoActual= new Date(tiempoTranscurrido);
       elem.innerHTML=tiempoActual.toLocaleString();
      },1000);
    
  });