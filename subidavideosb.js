function registrar(){
    console.log("registrado");
}
function comenzar(event){
    console.log("Comenzando");
    //transfiriendo datos
    event.dataTransfer.setData("text", event.target.id);
}
function entrar(){
    console.log("entrado");
}
function sobrevolar(event){
    console.log("Sobrevolando");
    //evitando problemas al soltar
    event.preventDefault()
}
function salir(){
    console.log("salido");
}
function soltar(event){
    console.log("Sobrevolando");
    //evitando problemas al soltar
    event.preventDefault()
    //cogiendo datos
    var data = event.dataTransfer.getData("text");
    var midiv=document.getElementById(event.target.id);
    console.log(midiv);
    midiv.innerHTML+="<p>cogidos datos:"+data+"</p>";
}
function init(){
    console.log("Dom cargado");
    var a1=document.getElementById("a1");
    var a2=document.getElementById("a2");
   
    a1.addEventListener("dragstart",comenzar);
    a2.addEventListener("dragenter",entrar);
    a2.addEventListener("dragover",sobrevolar);
    a2.addEventListener("dragleave",salir);
    a2.addEventListener("drop",soltar);
}
document.addEventListener("DOMContentLoaded",init);