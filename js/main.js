// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (da lasciare attivo)

// Manipolazione DOM
const lista = document.getElementById("lista");

// Array con lista della spesa
const listaSpesa = ["mele", "farina", "uova", "latte", "cereali"];


// Ciclo for per importare la lista della spesa
// for (let i = 0; i < listaSpesa.length; i++){
//     lista.innerHTML += `<li class="articolo">${listaSpesa[i]}</li>`
// }


// Ciclo while per importare la lista della spesa
let i = 0;
while (i < listaSpesa.length){
    lista.innerHTML += `<li class="articolo">${listaSpesa[i]}</li>`
    i++
}
