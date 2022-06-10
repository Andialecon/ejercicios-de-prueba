// La ecuación cuadrática básica A**2 + B**2 = C**2
// Haga un programa que cuando se ingrese A y B se calcule y se muestre el valor de C

// var A=("Digite el numero 1")
console.log("Escribe un número para A")
process.stdin.on('data',function(a){
    var A = parseInt(a);
    process.stdin.on('data',function(b){
        console.log("Escribe un número para B")
        var B = parseInt(b);
        encontrarPontencia(A,B)
    })
})

function encontrarPontencia(A,B){
    var C = A**2 + B**2 
    console.log("Las dos pontencias suman: "+C)
}