
  
  const selectorCuadro1 = document.querySelector("#cuadro-1");
  const selectorCuadro2 = document.querySelector("#cuadro-2");
  const selectorCuadro3 = document.querySelector("#cuadro-3");
  const selectorCuadro4 = document.querySelector("#cuadro-4");

  let colorGlobal="yellow"
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    /* Cambiar a color 1 */
    colorGlobal="red"
    } else if (event.key === 's') {
    /* Cambiar a color 2 */
    colorGlobal="yellow"
    }else if (event.key === 'd') {
    /* Cambiar a color 3 */
    colorGlobal="blue"
    }
    })
    pintar=function(cuadro, color){

        cuadro.style.backgroundColor = color

    }
    reaccionClick=function(cuadro){
        cuadro.addEventListener("click", () => {
       
            pintar(cuadro,colorGlobal)
            
        });
    }
    reaccionClick(selectorCuadro1)
    reaccionClick(selectorCuadro2)
    reaccionClick(selectorCuadro3)
    reaccionClick(selectorCuadro4)

