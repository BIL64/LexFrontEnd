let listan = [ ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0],
               ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0] ]; // Listlängd = 21 (max + 1)

let rak = 0; // Räknare - styr allt!
let fsize = 1.2; // Font-storleken kan ändras när man vill öka eller minska denna.

let s_lista = [ [""], [""], [""], [""], [""] ]; // Listlängd för sparade listor = 5

let s_rak = 0; // Räknare för sparade listor.

// Undersöker om listan finns (är null) och ställer in s_rak.
if (JSON.parse(localStorage.getItem("ToDo-lista 1")) != null) { s_lista[0] = "ToDo-lista 1"; s_rak++; }
if (JSON.parse(localStorage.getItem("ToDo-lista 2")) != null) { s_lista[1] = "ToDo-lista 2"; s_rak++; }
if (JSON.parse(localStorage.getItem("ToDo-lista 3")) != null) { s_lista[2] = "ToDo-lista 3"; s_rak++; }
if (JSON.parse(localStorage.getItem("ToDo-lista 4")) != null) { s_lista[3] = "ToDo-lista 4"; s_rak++; }
if (JSON.parse(localStorage.getItem("ToDo-lista 5")) != null) { s_lista[4] = "ToDo-lista 5"; s_rak++; }