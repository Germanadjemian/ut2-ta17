function increment(){
    numero = document.getElementById("num");
    nuevonum = parseInt(numero.textContent)+1;
    numero.textContent= nuevonum;
}
boton = document.querySelector("button").addEventListener("click",increment);