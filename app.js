let numeroSecreto=0;
let contador = 0;
let limiteIntento= 0;
let conjuntoNumerosUsados=[];

//Asignar texto en el HTML con JS
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

//Numero Secreto
function generarNumeroAleatorio(rangoMaximo){

    let numeroAleatorio = Math.floor(Math.random()*rangoMaximo)+1;
    if (conjuntoNumerosUsados.length == rangoMaximo){
        conjuntoNumerosUsados=[];
    }
    if (conjuntoNumerosUsados.includes(numeroAleatorio)){
        
        
        return generarNumeroAleatorio(10);
    } else {
        conjuntoNumerosUsados.push(numeroAleatorio);
        return numeroAleatorio;
    }
};


//Verificar numero secreto

function verificarNumero(){
    let numeroUsuario =parseInt(document.getElementById('input').value);
    
    if (numeroUsuario != numeroSecreto){
            if (contador == limiteIntento){
                alert(`Alcanzaste el limite de intentos,el numero era ${numeroSecreto} fallaste :(`);
                document.getElementById('reiniciar').removeAttribute('disabled');
                reiniciarJuego();
                return;
                }
            if (numeroSecreto > numeroUsuario){
                asignarTextoElemento('.result',`El número es mayor`)
                contador++;
                limpiarCajaTexto();
                
            }
            if (numeroSecreto < numeroUsuario){
                asignarTextoElemento('.result',`El número es menor`)
                contador++;
                limpiarCajaTexto();
                
            }
        }
    
    if (numeroUsuario == numeroSecreto){
        asignarTextoElemento('.result',`Adivinaste !!! Lo hiciste en ${contador} ${contador == 1 ? 'intento':'intentos' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    };
}

//Limpiar y reiniciar juego
function condicionesIniciales(){
    //Asignar texto inicial
    asignarTextoElemento('h1','¡¡¡NÚMERO SECRETO!!!');
    asignarTextoElemento('.texto__parrafo','Intenta adivinar el número secreto entre el 1 y el 10 :)');
    numeroSecreto=generarNumeroAleatorio(10);
    
    contador=1;
    limiteIntento=3;
}

function limpiarCajaTexto(){
    document.querySelector('#input').value = '';
    
}

function reiniciarJuego(){
    limpiarCajaTexto();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    asignarTextoElemento('.result',``)
}

condicionesIniciales();






