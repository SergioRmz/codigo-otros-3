// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

// Modifica el nombre de las variables por unas mas significativas.

// Cambio en el metodo del objeto document
const lista = document.querySelector("#lista-de-productos");
const input = document.querySelector("#input");

// Declaracion de la funcion displayProductos.
const displayProductos = (productos) =>{
  for (let i = 0; i < productos.length; i++) {
    var div = document.createElement("div");
    div.classList.add("producto");
  
    var titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = productos[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
    div.appendChild(titulo)
    div.appendChild(imagen)
  
    lista.appendChild(div)
  }
};


displayProductos(productos);

let botonDeFiltro = document.querySelector("#button");

botonDeFiltro.onclick = function() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  // Se añade el metodo para convertir el input del usuario a minusculas.
  let texto =  input.value.toLowerCase();
  console.log(texto);
  let productosFiltrados = 0;

  // Validaciones, si el dato introducido es un numero, vuelve a mostrar los productos.Si no lo es llama a la funcion productosFiltrados.
  isNaN(texto) ? productosFiltrados = filtrado(productos, texto) : displayProductos(productos);
  
  
  // Cambio el nombre de las variables por algo significativo.

  for (let i = 0; i <  productosFiltrados.length; i++) {
    var div = document.createElement("div")
    div.classList.add("producto")
  
    var titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    div.appendChild(titulo);
    div.appendChild(imagen);
  
    lista.appendChild(div);
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  