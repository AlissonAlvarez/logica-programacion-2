function obtenerValorCelsius() {
  let entradaCelsius = document.getElementById("celsius").value;
  let celsius = parseFloat(entradaCelsius);

  if (isNaN(celsius)) {
    alert(mensaje.numeroInvalido);
    return null;
  }
  return celsius;
}

function convertirCelsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertirCelsiusAKelvin(celsius) {
  return celsius + 273.15;
}

function mostrarResultados(fahrenheit, kelvin) {
  let salida = `Grados Kelvin: ${kelvin.toFixed(2)}<br>Grados Fahrenheit: ${fahrenheit.toFixed(2)}`;
  document.getElementById("resultado").innerHTML = salida;
  console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
  console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
}

function convertirTemperatura() {
  let celsius = obtenerValorCelsius();
  if (celsius === null) return;

  let fahrenheit = convertirCelsiusAFahrenheit(celsius);
  let kelvin = convertirCelsiusAKelvin(celsius);

  mostrarResultados(fahrenheit, kelvin);
}

const mensaje = {
  numeroInvalido: "Por favor, ingrese un número válido.",
};
