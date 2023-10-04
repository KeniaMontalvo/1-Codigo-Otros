const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //se agregó el . porque es una clase
const $b = document.querySelector('.blog'); //se cambió a formato a clase (estaba como ID)
const $l = document.querySelector('.location');

/* 
Existe una sintaxis especial para trabajar con promesas llamada async/await.
La palabra "async" antes de una función significa que siempre devuelve una promesa.
No se puede usar await en funciones regulares.
*/
async function displayUser(username) {
  /*
  La declaración try...catch señala un bloque de instrucciones para intentar llamar (try) y una respuesta por si hay excepciones (catch)
  */
  try {
    $n.textContent = 'cargando...';
   //Se llama
    const response = await fetch(`${usersEndpoint}/${username}`);
   //Se trae
    const data = await response.json();
    console.log(data);
  /* Para crear un template string, se necesita usar un carácter distinto de apertura y cierre*/
   //Se cambiaron las comillas sencillas por backticks
    $n.textContent = `Nombre: ${data.name}`;
    $b.textContent = `Blog: ${data.blog}`;
    $l.textContent = `Ubicación: ${data.location}`;

  } catch (err) {
    handleError(err)
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //le hacía falta el signo $ al inicio
}

displayUser('stolinski').catch(handleError);