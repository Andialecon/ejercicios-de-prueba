// Realice un programa que convierta textos con letras en minúsculas a un nuevo texto con todo
// en MAYUSCULAS

console.log("Escribe una cadena de texto")
process.stdin.on('data',function(a){
    var cadena = a.toString();
    var CADENA = cadena.toUpperCase()
    console.log(CADENA)
})

