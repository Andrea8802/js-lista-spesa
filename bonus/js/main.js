// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (da lasciare attivo)

// Manipolazione DOM
const lista = document.getElementById("lista");
const aggiungi = document.getElementById("aggiungi");
const elimina = document.getElementById("elimina");
const inputAggiungi = document.getElementById("inputAggiungi");

// Dichiarazione variabili


// Array con lista della spesa
const listaSpesa = ["mele", "farina", "uova", "latte", "cereali"];


// Ciclo for per importare la lista della spesa
// for (let i = 0; i < listaSpesa.length; i++){
//     lista.innerHTML += `<li class="articolo">${listaSpesa[i]}</li>`
// }


// Ciclo while per importare la lista della spesa
let i = 0;
while (i < listaSpesa.length){
    lista.innerHTML += `<li>${listaSpesa[i]}</li>`;
    i++;
}

// Bottone aggiungi
aggiungi.addEventListener("click",
    function(){
        let nuovoElemento = inputAggiungi.value;

        // Condizione che verifica se il campo è compilato
        if (nuovoElemento != ""){
            listaSpesa.push(nuovoElemento);

            lista.innerHTML += `<li>${listaSpesa[(listaSpesa.length - 1)]}</li>`;

            inputAggiungi.value = null;
        }
        
    }
    
)

// Bottono elimina
elimina.addEventListener("click",
    function(){
        
        // Condizione che verifica se sono presenti degli elementi nella lista
        if (listaSpesa.length > 0){
            listaSpesa.pop();
            lista.innerHTML = null;
    
            let i = 0;
            while (i < listaSpesa.length){
                lista.innerHTML += `<li>${listaSpesa[i]}</li>`;
                i++;
            }

        } else{
            alert("Non ci sono più elementi da eliminare!");
        }
    }
)