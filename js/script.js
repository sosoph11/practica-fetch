const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar
const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él
const toggleButton = document.getElementById("toggle-btn"); // Botón para mostrar/ocultar
const arrow = document.getElementById("arrow"); // Flecha en el botón

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}

window.addEventListener('load', () => {
  fetch(DATA_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      showData(data.students); 
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });

  toggleButton.addEventListener('click', () => {
    if (container.style.display === "none" || container.style.display === "") {
      container.style.display = "block";
      arrow.innerHTML = "&#9650;"; 
    } else {
      container.style.display = "none";
      arrow.innerHTML = "&#9660;"; 
    }
  });
});
