//Titulo
// let titulo=document.querySelector('h1');
// titulo.innerHTML="Juego del número secreto";
// Parrafo
// let parrafo=document.querySelector('p');
// parrafo.innerHTML='Ingrese un número del 1 al 10';

let numeroSecreto=0;
let intentos=1;
const numeroMaximo=10;
let listaNumeroGenerados=[];
//console.log(numeroSecreto);
//Funcion para asignar texto a un elemento(titulo,parrafo,etc)
function asignarTextoElemento(elemento,texto){
    let elementoHtml=document.querySelector(elemento);
    elementoHtml.innerHTML=texto;
    return; //no es necesario
}
//Generar Numero Secreto aleatorio
function generarNumeroSecreto() {
    //Aqui si es necesario el return ya que me regresa el numero aleatorio generado
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroGenerados);
    if(listaNumeroGenerados.length===numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles.');
    }else{
        if(listaNumeroGenerados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
//Funcion del boton Jugar
function verificarIntento(){
        let numeroUsuario=parseInt(document.getElementById('numero').value);
         //parseInt convierte el valor a entero //getElementById obtiene el valor del input con id numero
        // console.log(typeof(numeroSecreto));
        // console.log(numeroSecreto);
        // console.log(typeof(numeroUsuario));
        // console.log(numeroUsuario);
        //console.log(numeroSecreto==numeroUsuario); //comparar si son del mismo valor
        //console.log(numeroSecreto===numeroUsuario); //comparar si son del mismo tipo y valor
        if (numeroSecreto===numeroUsuario){
            // asignarTextoElemento('p',`¡Felicidades! Adivinaste el número secreto en ${intentos} ${intentos===1?'vez':'veces'}`);
            asignarTextoElemento('p','¡Felicidades! Adivinaste el número secreto en '+intentos +' '+ (intentos===1?'vez':'veces')+'.');
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            if(numeroSecreto>numeroUsuario){
                asignarTextoElemento('p','El número secreto es mayor');
            }else{
                asignarTextoElemento('p','El número secreto es menor');
            }
            intentos++;
            limpiarCaja();
        }
        return;
}
function limpiarCaja(){
    document.getElementById('numero').value='';
    //document.querySelector('#numero').value=''; //Otra forma de hacerlo);
    return;
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Ingrese un número del 1 al '+numeroMaximo);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
    //console.log(numeroSecreto);
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    return;
}

condicionesIniciales();