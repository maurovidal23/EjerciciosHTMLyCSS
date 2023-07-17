window.addEventListener("load", (event) => {
    let elem=document.getElementById("button");
    elem.onclick=myFunction;
    
  });

function myFunction(){
    let tiempo=Number(document.getElementById("numMilisec").value*1000);
    setTimeout(() => {
       alert("¡Se acabó el tiempo!")
      },tiempo)
}