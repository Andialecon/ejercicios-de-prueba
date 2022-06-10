// Realice un algoritmo que a partir de un valor total a pagar sea capaz de informar el valor
// del IVA (16%) y que permita etiquetar dicho precio bajo la categoría “BARATO” si el precio
// es menor de $100.000, “COMUN” si el precio es mayor de $100.000 y menor de $150.000
// o “CARO” si el precio es mayor igual a $150.000

let valor=400000;
let iva = valor *0.16
let categoria=""
if(valor<100000){
    categoria="barato"
}else if(valor<150000){
    categoria="común"
}else{
    categoria="caro"
}
console.log("Este es un producto "+categoria)
console.log("IVA: $"+iva)