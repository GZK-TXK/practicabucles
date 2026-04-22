
//PRACTICA 1

function sumatorio() {
    let acumulado= 0;
    for(let i=1; i <= 100; i++) {
        acumulado += i
    }
    return acumulado
}
let resultadoSumatorio = sumatorio();
console.log("La suma de los números del 1 al 100 es:" + resultadoSumatorio)

///////////////////////////////////////////////////////////////////////////////////

//PRACTICA 2 

function numerosPares() {
    for(let i=2; i<=50; i+= 2)
            console.log(i)
}
numerosPares()

///////////////////////////////////////////////////////////////////////////////////

//PRACTICA 3

const numero=prompt("Escribe un numero")
function tablaMulti(numero) {
    for(i=0;i<=10;i++){
        console.log(numero + "*" + i + "=" + i*numero )
    }
}
tablaMulti(numero)

///////////////////////////////////////////////////////////////////////////////////

//PRACTICA 4

function cuentaAtras(){
    let acumulado2 = 10;
    for(i=10;i>0;i--)
        console.log(i)
}
cuentaAtras()

///////////////////////////////////////////////////////////////////////////////////

//PRACTICA 5

    const numero1=prompt("Dame otro numerito niño")
    const n1 = Number(numero1)
    function factorial(numero1){
        let acumulado1 = 1;
        for(i=1; i<= numero1; i++){
        acumulado1 *=i
        }
        console.log(acumulado1)
    }
    factorial(numero1)