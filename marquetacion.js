


function menu() {
  let menuamburgesa = document.getElementById("menuamburgesa");
  let aside = document.getElementById("aside");
  
  if ((menuamburgesa.style.display = "none")) {
    aside.style.display = "block";
  } else {
    aside.style.display = "none";
  }
}
//RECORRER EL JSON
let i = 0;
fetch("marquetacion.json")
  .then((res) => res.json())
  .then((data) => {

    //RECORRE EL JSON - 1
    /*---------------------------------------------------------------*/
    let dataOriginal = data.herramientas;
    let heramientas = document.getElementById("heramientas");
    let paginacion = dataOriginal.slice(0, 3);
    let variableUnico = new Set(paginacion);
    variableUnico.forEach((dat) => {
      //HERRAMIENTAS
      heramientas.innerHTML += `<div class="pro">  <figure>
        <img src="${dat.imagen2}" alt="" class="imagenes"> 
          <figcaption>
          <b><p> ${dat.titulo2}</p></b>
            <br>
            <button class="btncancelar" data-index="${i}">Leer</button> 
            </figcaption>
            </figure>  
      </div>
      `
      i++;
    });
    //boton de mostrar más
    const mostrar = document.getElementById('mostrar');
    const mostrarMas = document.createElement('div');
    mostrarMas.innerHTML = '<i class="fa-solid fa-file-circle-plus"></i>';
    mostrar.appendChild(mostrarMas);
    //mostrar más de elementos JSON - 1
    mostrarMas.addEventListener('click', () => {
      let paginacion2 = dataOriginal.slice(3, 12);
      let variableUnico2 = new Set(paginacion2);
      variableUnico2.forEach((dat) => {
        //PONER EN EL HTML
        heramientas.innerHTML += `<div class="pro">  <figure>
              <img src="${dat.imagen2}" alt="" class="imagenes"> 
                <figcaption>
                <b><p> ${dat.titulo2}</p></b>
                  <br>
                  <button class="btncancelar" data-index="${i}">Leer</button> 
                  </figcaption>
                  </figure>  
            </div>
            `
        //OCULTAR BOTON DE MOSTRAR MAS; 
        i++;
        document.getElementById('container2').style.display = "none";
        mostrarMas.style.display = "none";
      });

    });
    /*---------------------------------------------------------------*/

    //RECORRE EL JSON - 2
    /*---------------------------------------------------------------*/
    let dataOriginal2 = data.herramientas1;
    let heramientas2 = document.getElementById("heramientas1");
    let paginacion2 = dataOriginal2.slice(0, 3);
    let variableUnico2 = new Set(paginacion2);
    variableUnico2.forEach((dat) => {
      //HERRAMIENTAS
      heramientas2.innerHTML += `<div class="pro">  <figure>
        <img src="${dat.imagen2}" alt="" class="imagenes">
          <figcaption>
          <b><p> ${dat.titulo2}</p></b>
            <br>
            <button class="btncancelar" data-index  ="${i}">Leer</button>
            </figcaption>
            </figure>
      </div>
      `
      i++;
    });

    //mostrar más de botones herramientasOne
    const mostrar1 = document.getElementById('mostrar1');
    const mostrarMas1 = document.createElement('div');
    mostrarMas1.innerHTML = '<i class="fa-solid fa-file-circle-plus"></i>';
    mostrar1.appendChild(mostrarMas1);
    mostrarMas1.addEventListener('click', () => {
      let paginacionOne2 = dataOriginal2.slice(3, 12);
      let variableUnicoOne2 = new Set(paginacionOne2);
      variableUnicoOne2.forEach((dat) => {
        //HERRAMIENTAS
        heramientas2.innerHTML += `<div class="pro">  <figure>
          <img src="${dat.imagen2}" alt="" class="imagenes"> 
            <figcaption>
            <b><p> ${dat.titulo2}</p></b>
              <br>
              <button class="btncancelar" data-index="${i}">Leer</button> 
              </figcaption>
              </figure>  
        </div>
        `
        //ESTILO DE DISEÑO; 
        i++;
        document.getElementById('container1').style.display = "none";
        mostrarMas1.style.display = "none";
        heramientas.style.display = "none";
      });
    });
    /*---------------------------------------------------------------*/


    //   // Obtiene todos los botones de la página
    //   const buttons = document.querySelectorAll('.btncancelar');

    //   // Agrega un controlador de eventos de clic a cada botón
    //   buttons.forEach((button) => {
    //     button.addEventListener('click', () => {
    //       // Obtiene el índice del objeto del atributo data-index del botón
    //       const index = button.dataset.index;
    //       // Obtiene la descripción del objeto correspondiente en el JSON
    //       const description = data[index].descripcion;


    //       // Muestra la descripción en un modal
    //       // (Aquí debes usar la l  ibrería o el código que prefieras para crear modales)
    //       let modal = document.getElementById('myModal');

    //       modal.style.display = "block";
    //       document.querySelector('.mostrar').innerHTML = description;
    //     });
  });
    // });
    // let span = document.querySelector('.close');
    // span.addEventListener("click", function () {
    //   document.getElementById('myModal').style.display = "none";
    // });
    // window.onclick = function (event) {
    //   if (event.target == document.getElementById('myModal')) {
    //     document.getElementById('myModal').style.display = "none";
    //   }
    // }


    const Suscribete= document.getElementById("Suscribete")
    const btnSuscribete= document.getElementById("btnSuscribete")
    const mensaje = document.getElementById("mensaje")
  
    btnSuscribete.addEventListener("click",function(){
        if(Suscribete.style.display="none") {
            Suscribete.style.display="inline"
            btnSuscribete.textContent="ENVIAR"

            btnSuscribete.addEventListener("click", function(e){
              e.preventDefault()
              if (Suscribete.style.display="none") {
                mensaje.textContent="Mensaje enviado"
                btnSuscribete.textContent="Subscribete"
              }   

          })
        }else{
          Suscribete.style.display="none"
         
        }
           
      })
      


      