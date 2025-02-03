// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let ListaAmigoSecreto = [];
//let nombreUsuario;

function limpiarCaja() {
    document.querySelector('#amigo').value ='';
}

 function agregarAmigo() {
    let nombreUsuario = document.getElementById('amigo').value;
    if(nombreUsuario === ''){
        alert("Por favor inserte un nombre");
    }else{
    ListaAmigoSecreto.push(nombreUsuario);
       
    }
    limpiarCaja();
 }  

 function sortearAmigo(){
   
    let amigoSecreto = Math.floor(Math.random()* ListaAmigoSecreto.length);
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `Tu amigo secreto es:  ${ListaAmigoSecreto[amigoSecreto]}`
    return;
        
 }
 




agregarAmigo(ListaAmigoSecreto);