window.addEventListener("load", (event) => {
   const arrayColores= ["red", "blue","green"];
   let elem=document.getElementById("cont");
   for(let i =0;i<10;i++){
      
      setTimeout(() => {
         elem.style.background=arrayColores[i%3];
       }, i*1000);
   }
   
   

  })


