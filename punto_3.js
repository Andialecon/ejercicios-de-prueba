// Realizar un algoritmo que permita convertir un numero decimal a número binario.

let numero=77;
let num=numero;
binario=[]
let resultado=28;
while(num!=1){
    resultado=parseInt(num/2)
    resto=parseInt(num%2)
    binario.push(resto)
    // num=resultado
    num=resultado
}
binario.push(resultado)
binario2=binario.reverse()
console.log(numero+" = "+(binario2))
