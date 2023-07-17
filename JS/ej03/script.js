window.addEventListener("load", (event) => {
    let elem=document.getElementById("cont");
    let elem2=document.getElementById("cont2");
    
    
    setInterval(() => {
        var currentTime =  new Date();
        elem.innerHTML=currentTime.getDate()+"-"+currentTime.getMonth()+"-"+currentTime.getFullYear();
    
        elem2.innerHTML=currentTime.getHours()+ ":"+ 
        currentTime.getMinutes()+":"+
        currentTime.getSeconds();
      },1000);
    
  });