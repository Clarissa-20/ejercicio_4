// Declarar variable
let i = 1;
const numbersContainer = document.getElementById('numbers');

// Inicio del ciclo repetitivo
do {
    // Crear un div para cada número
    const numberBox = document.createElement('div');
    numberBox.className = 'number-box';
    numberBox.textContent = i;

    // Agregar el div al contenedor de números
    numbersContainer.appendChild(numberBox);

    i++;
} while (i <= 10);
