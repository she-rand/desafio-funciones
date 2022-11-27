function pintar(elemento,color='green'){
    elemento.style.backgroundColor = 'yellow'
    }
    ele = document.getElementById("ele1")
    ele.addEventListener("click", () => {
           color='yellow'
           pintar(ele,color)
              
    });