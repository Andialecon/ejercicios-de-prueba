// Haga una función que determine el promedio de N números agrupados en un arreglo
// numérico.
let array = [5, 5, 5, 2, 2, 2];
function determinarPromedio(numeros) {
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  var promedio = parseInt(suma / numeros.length);
  console.log("El promedio de los números del array es: "+promedio)
}
determinarPromedio(array);
