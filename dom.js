//EJERCICIO 1 DOM

// const nombre = prompt('Ingrese un nombre');
// const saludo=document.querySelector('h1');
// saludo.innerHTML=(`Hola ${nombre}!`);
// saludo.style.fontSize = '45px';
// saludo.style.textAlign = 'center';
// saludo.style.fontFamily = 'Courier new'


// saludo.classList.add('centrar');

//EJERCICIO 2 DOM

// const colorBody = prompt('Ingrese un color');
// const fondo = document.querySelector(`body`);
// fondo.style.backgroundColor= colorBody


//EJERCICIO 3 DOM

// rgb
// Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.


// const rgb1 = prompt('Ingrese un valor r');
// const valorRgb1=parseInt(rgb1);
// const rgb2 = prompt('Ingrese un valor g');
// const valorRgb2=parseInt(rgb2);
// const rgb3 = prompt('Ingrese un valor b');
// const valorRgb3=parseInt(rgb3);
// const colorRgb=`rgb(${valorRgb1}, ${valorRgb2}, ${valorRgb3})`;
// const fondo=document.querySelector('body');
// fondo.style.backgroundColor=colorRgb;

//rgb(255, 87, 51)



//EJERCICIO 4 DOM

// Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

// Opción elegida - Ancho de imagen
// chica	200px
// mediana	500px
// grande	800px

//VERSION MARIANA------


// const ingreso = prompt('Ingrese tamaño imagen: chica, mediana, grande');
// const bandera=document.querySelector('img');
// if(ingreso=='chica'){
//     bandera.style.width = '200px';
// } else if(ingreso=='mediana') {
//     bandera.style.width = '500px';
// } else if(ingreso=='grande') {
//     bandera.style.width = '800px';
// }


//VERSION LOLA-------


// const img = prompt("Ingrese el tamaño de la imagen chica, mediana o grande");
// const tamanioImg= document.querySelector('#size-img');
// let size = ""

// const sizeSelector = (img)=>{
//     if(img=='chica'){
//         size='200px;'
//         tamanioImg.style=`width:${size}`
//     }
//     else if (img=='mediana'){
//         size='500px;'
//         tamanioImg.style=`width:${size}`
//     }
//     else if (img=='grande'){
//         size='800px;'
//         tamanioImg.style=`width:${size}`
//     }
//     console.log(size)
// }
// sizeSelect


//EJERCICIO 5 DOM

// temperatura
// Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	Azul
// Mayor o igual a 0° y menor a 15°	Celeste
// Mayor o igual a 15° y menor a 25°	Verde
// Mayor o igual a 25° y menor a 30°	Amarillo
// Mayor o igual a 30° y menor a 35°	Naranja
// Mayor a 35°	Rojo

// const ingreso = prompt('Ingrese temperatura');
// const temperatura=document.querySelector('h1');
// temperatura.innerHTML=(`Temperatura actual: ${ingreso}°`);
// if(ingreso<0){
//     temperatura.style.color = '#0000FF';
// } else if(ingreso>=0 && ingreso<15) {
//     temperatura.style.color = '#00FFFF';
// } else if(ingreso>=15 && ingreso<25) {
//     temperatura.style.color = '#00FF00';
// } else if(ingreso>=25 && ingreso<30) {
//     temperatura.style.color = '#FFFF00';
// } else if(ingreso>=30 && ingreso<35) {
//     temperatura.style.color = '#FF3300';
// } else if(ingreso>35) {
//     temperatura.style.color = '#FF0000';
// } 


//EJERCICIO 6 DOM

// progreso
// Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

// const progreso = prompt('Ingrese un porcentaje');
// const progresoPorcentaje= parseInt(progreso)+'%';
// const div2 = document.getElementById('IdHijo');
// div2.style.width=progresoPorcentaje;

// const progreso = prompt('Ingrese un porcentaje');
// const progresoPorcentaje= parseInt(progreso)+'%';
// const div2 = document.getElementsByClassName('hijo');
// div2[0].style.width=progresoPorcentaje;




//--------------------------------------------------------------------

//EJERCICIO 9 DOM

// animales
// En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.

// const animal = prompt("Ingrese la imagen gato, perro o loro");
// const imagen = document.querySelector('img');
// if(animal=='gato'){
//         imagen.src="https://ichef.bbci.co.uk/news/640/cpsprodpb/10E9B/production/_109757296_gettyimages-1128004359.jpg";
//     } else if(animal=='perro') {
//         imagen.src="http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg";
//     } else if(animal=='loro') {
//         imagen.src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Scarlet_Macaw_and_Blue-and-gold_Macaw.jpg";
//     }




//EJERCICIO 7 DOM

// reacciones
// En un documento html hacer un post de una red social que contenga:

// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que

// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes


// const like1 = prompt('Ingrese cantidad');
// const valorLike1=document.getElementById('likes1');
// valorLike1.innerHTML=like1;
// const like2 = prompt('Ingrese cantidad');
// const valorLike2=document.getElementById('likes2');
// valorLike2.innerHTML=like2;
// const like3 = prompt('Ingrese cantidad');
// const valorLike3=document.getElementById('likes3');
// valorLike3.innerHTML=like3;
// const like4 = prompt('Ingrese cantidad');
// const valorLike4=document.getElementById('likes4');
// valorLike4.innerHTML=like4;



//EJERCICIO 8 DOM

// card
// Hacer un programa que al iniciarse pregunte mediante prompts por

// un título
// una url de una imagen
// una url a un artículo
// Utilizar esos datos para completar en el html una card que tenga

// una imagen, con la url de la imagen ingresada
// un título, con el texto del título ingresado
// un link que diga Leer más, con la url al artículo ingresado
// Dar algunos estilos mínimos a la card:

// centrarla con respecto a la pantalla
// agregarle un borde
// agregarle un sombreado
// cambiarle la tipografía
// cambiarle los tamaños de fuente
// cambiarle los colores por defecto



//EJERCICIO 10 DOM

// paises
// En un documento html crear una lista desordenada con distintos paises de cada continente (entre 2 y 4 por continente). Hacer un programa que al iniciarse pregunte mediante un prompt por un continente y destaque en rojo y en negrita aquellos paises de dicho continente.


//EJERCICIO 11 DOM

// comidas
// En un documento html agregar imágenes de comidas, postres y bebidas (3 o 4 de cada uno). Dar estilos para que se muestren una al lado de la otra, que tengan algo de espacio con margenes y que tengan el mismo tamaño. Hacer un programa que al iniciarse pregunte mediante un prompt qué se desea ver (comidas, postres o bebidas) y mostrar sólo las imágenes de la categoría correspondiente.


//EJERCICIO 12 DOM

// busqueda
// En un documento html crear una lista desordenada con al menos 10 items que consistan en oraciones, frases o citas. Hacer un programa que al iniciarse pregunte mediante un prompt por una palabra y destaque en rojo y en negrita aquellos items de la lista cuyo texto contenga dicha palabra.

//resolucion MATIAS

// //En un documento `html` crear una lista desordenada con al menos 10 items que consistan en oraciones, frases o citas. Hacer un programa que al iniciarse pregunte mediante un `prompt` por una palabra y destaque en rojo y en negrita aquellos items de la lista cuyo texto contenga dicha palabra.

// //Guardo la palabra que hay que buscar
// const palabra = prompt("ingrese su comida");
// //Guardo el texto donde aparece
// const text = document.getElementById("text");

// //text.textContent optengo el texto del html,es decir,que tengo un string con el texto
// const textHTML = text.textContent;

// //text.innerHTML voy a modificar el html
// //replaceAll voy a tomar lo que ingreso el usuario y agrarle la etiqueta de span
// text.innerHTML = textHTML.replaceAll(palabra,`<span style="color:red;font-weight:bold">${palabra}</span>`);




{/* <p id="text">Lorem casa ipsum dolor sit amet, consectetur adipisicing elit. At optio, odio earum temporibus atque debitis, nihil error assumenda maxime sunt magni inventore expedita neque, exercitationem voluptatum illo recusandae sequi esse? casa</p>





const palabra = prompt("ingrese su comida");
//Guardo el texto donde aparece
const text = document.querySelectorAll("#text li");

for(let i = 0; i < text.length; i++){
   const textHTML = text[i].innerHTML;
   if (textHTML.includes(palabra)){
      text[i].style.backgroundColor = "red";
   }
}



<ul id="text">
    <li> casa Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, eaque.</li>
    <li>Sed illum maiores non. Nihil natus voluptatem reprehenderit deserunt facere.</li>
    <li>Magni iusto fugiat incidunt quas illo aperiam eum tempora in.</li>
    <li>Consectetur, deserunt odit labore nulla sint nihil repellendus explicabo deleniti!</li>
    <li>Possimus ex recusandae ipsum aut accusamus placeat labore veniam officiis!</li>
    <li>Ea eius casa enim similique ab odio molestiae asperiores, quod corrupti!</li>
    <li>Rerum vitae corporis, facilis accusantium debitis beatae at dolor in!</li>
    <li>Quod eius  casa error qui ipsa praesentium quae repudiandae molestiae sequi.</li>
    <li>Doloribus totam at alias nemo dolore possimus suscipit laudantium amet!</li>
    <li>Debitis vel tempore, perspiciatis eaque sequi perferendis aut vero nesciunt.</li>
  </ul> */}




//--------------------------------------------------------------------

// BOTON EJERCICIOS CLASE- MATIAS
// <button id="boton">
//       Soy un boton
//     </button>
//     <script>
//       const boton = document.getElementById('boton');
//    //   const saludar = () => {console.log("hola") }
//       boton.addEventListener("click",()=>{
//         console.log("hola,funcion anonima");
//       })
//     </script>


// <button id="boton">
//       Soy un boton
//     </button>
//     <script>
//       const boton = document.getElementById('boton');
//       const saludar = () => {console.log("hola") }
//       console.log(saludar);
//       boton.addEventListener("click",saludar)
//     </script>


{/* <h1 id="contador">0</h1>
    <button id="boton">
      Soy un boton
    </button>
    <script>
      const boton = document.getElementById('boton');
      const contador = document.getElementById('contador');

      boton.addEventListener("click",()=>{
        
      })
    </script> */}
