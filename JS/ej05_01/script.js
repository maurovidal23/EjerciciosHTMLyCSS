window.addEventListener("load", (event) => {
    let elem=document.getElementById("button");
    elem.onclick=myFunction;
    let botonApagado=document.getElementById("apagar");
    botonApagado.onclick=apagarOnclick;
    let botonPosponer=document.getElementById("posponer");
    botonPosponer.onclick=posponerOnclick;
    let el=document.getElementById("alarma");
    var tiempo=Number(document.getElementById("numMilisec").value);
  });

    //defino una variable global para el tiempo para poder modificarla desde
    //los distintos metodos onClick
  var timepo;


function myFunction(){
    tiempo=Number(document.getElementById("numMilisec").value);
    let el=document.getElementById("alarma")
    let intervalo=setInterval(() => {
       el.innerHTML=convertHMS(tiempo);
       if(tiempo==0){
        el.innerHTML=convertHMS(0);
        setInterval(500)
        alert("¡Se acabó el tiempo!");
        clearInterval(intervalo);
    }
    tiempo=tiempo-1;
      },1000)
   
}

function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}

function apagarOnclick(){
    let el=document.getElementById("alarma");
    tiempo=0;
}
function posponerOnclick(){
    let el=document.getElementById("alarma");
    tiempo=tiempo+10;
}