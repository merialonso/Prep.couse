// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // acordate que los argumentos no van con ""
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:

  var objeto = {
    nombre: nombre,
    edad: edad,

    meow (){
      return "Meow!";
    }
  }
  return objeto;
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();  //no uso objeto.metodo() porque metodo seria una cadera, y se invoca con []
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso" (YA ESTA DENTRO LA PROP, NO HAY QEU DEFINIRLA)
  // Multiplica el numeroMisterioso por 5 y devuelve el producto (CREAMOS UN CONTENEDOR QUE ES "multiplicacion")
  // aca se puede usar el . porque no estoy llamando ninguna funcion ()
  // Tu código:

var multiplicacion = objetoMisterioso.numeroMisterioso * 5;
return multiplicacion;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation (aca no usamos "" porque no tenemos el nombre de la prop entonces no podemos llamar
  // asi que se deja como referencia al argumento unaPropiedad)
  // Devuelve el objeto
  // Tu código:

  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
var objeto = {
  nombre : nombre,
  email : email,
  password : password
}
return objeto;
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email" (ya sabemos que usuario es objeto!
  // porque tiene una propiedad) uso . para preguntar, o tambien se puede usar [""]
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario.email){
    return true;
  } else {
    return false;
  }
}



function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor
  // del argumento "propiedad" (usamos [] sin "" porque no conocemos el valor especifico de la propiedad)
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto [propiedad]){
    return true;
  } else {
    return false;
  }
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if (password === usuario["password"]){
    return true;
  } else {
    return false;
  }
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
 usuario.password = nuevaPassword
return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  usuario.amigos.push(nuevoAmigo)
    return usuario;
  }


function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium" (uso el . porque tengo que llamar al objeto)
  // Define cada propiedad "esPremium" de cada objeto como "true" (objeto = {esPremium: true})
  // Devuelve el array de usuarios
  // Tu código:
  
for (let i = 0; i < usuarios.length; i++){
  usuarios[i].esPremium = true
}
return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var sumaLikes 
  for (let sumaLikes in usuario){
    posts.p(posts[i])
  }
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
