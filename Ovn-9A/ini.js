let listan = [[100], [100]]; // 2Darray för rader. Max 100 (krävs för att kunna spara listan).

for (i=0; i<100; i++) { // Börjar med att nolla för alla index.
  listan[i] = ["", 0];
}

let counter = 0; // Räknare - styr allt!
let fsize = 1.2; // Font-storleken kan ändras när man vill öka eller minska denna.

let s_lista = [ [""], [""], [""], [""], [""] ]; // Listlängd för sparade listor = 5

let s_counter = 0; // Räknare för sparade listor.

// Undersöker om listan finns (är null) och ställer in s_counter.
if (JSON.parse(localStorage.getItem("ToDo-lista 1")) != null) { s_lista[0] = "ToDo-lista 1"; s_counter++; }
if (JSON.parse(localStorage.getItem("ToDo-lista 2")) != null) { s_lista[1] = "ToDo-lista 2"; s_counter++; }
if (JSON.parse(localStorage.getItem("ToDo-lista 3")) != null) { s_lista[2] = "ToDo-lista 3"; s_counter++; }
if (JSON.parse(localStorage.getItem("ToDo-lista 4")) != null) { s_lista[3] = "ToDo-lista 4"; s_counter++; }
if (JSON.parse(localStorage.getItem("ToDo-lista 5")) != null) { s_lista[4] = "ToDo-lista 5"; s_counter++; }