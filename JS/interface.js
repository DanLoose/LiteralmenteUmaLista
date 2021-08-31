let welcome = document.getElementsByClassName("welcome")[0];
let lista = document.getElementsByClassName("lista")[0];
let elementos = document.getElementsByClassName("elements")[0];
let item = document.getElementById("item");

function newList(){
    welcome.style.display = "none";
    lista.style.display = "flex";
}

const FECHAR = "<span style='float: right;' onclick = 'fechar(this)' >x</span>";

function adicionar(){

    if(item.value !== ''){
        elementos.innerHTML += "<p>" + item.value + FECHAR + " </p>";
        item.value = '';
    }
    
}

function fechar(e){

    let p = e.parentNode;
    let elements = p.parentNode;

    elements.removeChild(p);
    
}

