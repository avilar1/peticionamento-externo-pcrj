
let controle = document.getElementById("collapseExample");
let mostramais = document.getElementById("mostramais");

let k = 0;

function mostrar(){
if(k == 0) {
    mostramais.style.position = "static";
    mostramais.style.background = "none";
    k++;
}
else {
    mostramais.style.position = "absolute";
    mostramais.style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)";
    k=0;
}
}