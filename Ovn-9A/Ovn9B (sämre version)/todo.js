const comS0But = document.getElementById('SL0'); // Listfunktion för sparad lista - index = 0.
comS0But.onmouseup = open0List;
const comS1But = document.getElementById('SL1'); // Listfunktion för sparad lista - index = 1.
comS1But.onmouseup = open1List;
const comS2But = document.getElementById('SL2'); // Listfunktion för sparad lista - index = 2.
comS2But.onmouseup = open2List;
const comS3But = document.getElementById('SL3'); // Listfunktion för sparad lista - index = 3.
comS3But.onmouseup = open3List;
const comS4But = document.getElementById('SL4'); // Listfunktion för sparad lista - index = 4.
comS4But.onmouseup = open4List;

const com0But = document.getElementById('0'); // Listfunktion för index = 0.
com0But.onmouseup = mark0;
const com1But = document.getElementById('1'); // Listfunktion för index = 1.
com1But.onmouseup = mark1;
const com2But = document.getElementById('2'); // Listfunktion för index = 2.
com2But.onmouseup = mark2;
const com3But = document.getElementById('3'); // Listfunktion för index = 3.
com3But.onmouseup = mark3;
const com4But = document.getElementById('4'); // Listfunktion för index = 4.
com4But.onmouseup = mark4;
const com5But = document.getElementById('5'); // Listfunktion för index = 5.
com5But.onmouseup = mark5;
const com6But = document.getElementById('6'); // Listfunktion för index = 6.
com6But.onmouseup = mark6;
const com7But = document.getElementById('7'); // Listfunktion för index = 7.
com7But.onmouseup = mark7;
const com8But = document.getElementById('8'); // Listfunktion för index = 8.
com8But.onmouseup = mark8;
const com9But = document.getElementById('9'); // Listfunktion för index = 9.
com9But.onmouseup = mark9;
const com10But = document.getElementById('10'); // Listfunktion för index = 10.
com10But.onmouseup = mark10;
const com11But = document.getElementById('11'); // Listfunktion för index = 11.
com11But.onmouseup = mark11;
const com12But = document.getElementById('12'); // Listfunktion för index = 12.
com12But.onmouseup = mark12;
const com13But = document.getElementById('13'); // Listfunktion för index = 13.
com13But.onmouseup = mark13;
const com14But = document.getElementById('14'); // Listfunktion för index = 14.
com14But.onmouseup = mark14;
const com15But = document.getElementById('15'); // Listfunktion för index = 15.
com15But.onmouseup = mark15;
const com16But = document.getElementById('16'); // Listfunktion för index = 16.
com16But.onmouseup = mark16;
const com17But = document.getElementById('17'); // Listfunktion för index = 17.
com17But.onmouseup = mark17;
const com18But = document.getElementById('18'); // Listfunktion för index = 18.
com18But.onmouseup = mark18;
const com19But = document.getElementById('19'); // Listfunktion för index = 19.
com19But.onmouseup = mark19;
const com20But = document.getElementById('20'); // Listfunktion för index = 20.
com20But.onmouseup = mark20;

btn3.addEventListener('click', () => { // Fäller ned inmatningsmenyn.
  const klass = document.getElementById('savebut').classList;

  if (counter > 0)
  {
    let tabort = false;
    if (confirm("Detta raderar hela listan...")) tabort = true;
      if (tabort) {
        removeList();
        document.getElementById('in_form').classList.toggle('d-block');
        if (klass == "d-none d-block") document.getElementById('savebut').classList.toggle('d-block');
        document.getElementById("S1").className = "d-none"; // Byter klass.
      }
  }
  else
  {
    if (klass != "d-none d-block") document.getElementById('in_form').classList.toggle('d-block');
  }
})

btn4.addEventListener('click', () => { // Visar sparaknappen och uppdaterar sparade listor.
  const klass1 = document.getElementById('in_form').className;
  const klass2 = document.getElementById('savebut').classList;

  if (klass1 == "d-none d-block") document.getElementById('savebut').classList.toggle('d-block');
  else alert("Öppna en ny lista först...");
  if (klass2 == "d-none d-block")
  {
    for (i=1; i<=5; i++) // Ändras ej!
    {
      if (s_lista[i-1] == `ToDo-lista ${i}`)
      {
        document.getElementById(`SL${i-1}`).innerHTML = `ToDo-lista ${i}`;
      }
    }
    document.getElementById("S1").className = "saveit"; // Byter klass.
  }
  else document.getElementById("S1").className = "d-none"; // Byter klass.
})

btn10.addEventListener('click', async () => { // Sparar listan i localStorage.

  if (counter < 1) alert("Listan är tom...");
  else
  {
    if (s_counter > 4) s_counter = 1; else s_counter++;

    for (i=1; i<=5; i++) // Ändras ej!
    {
      if (s_counter == i)
      {
        s_lista[i-1] = `ToDo-lista ${i}`;
        localStorage.setItem(`ToDo-lista ${i}`, JSON.stringify(listan));
        document.getElementById(`SL${i-1}`).innerHTML = `ToDo-lista ${i}`;
      }
    }
  }
})

btn11.addEventListener('click', async () => { // Raderar alla 5 sparade listor.
 
  let tabort = false;
  if (confirm("Detta raderar ALLA sparade listor...")) tabort = true;
    if (tabort) {
      localStorage.setItem("ToDo-lista 1", JSON.stringify(null));
      localStorage.setItem("ToDo-lista 2", JSON.stringify(null));
      localStorage.setItem("ToDo-lista 3", JSON.stringify(null));
      localStorage.setItem("ToDo-lista 4", JSON.stringify(null));
      localStorage.setItem("ToDo-lista 5", JSON.stringify(null));
      s_lista[0] = "";
      s_lista[1] = "";
      s_lista[2] = "";
      s_lista[3] = "";
      s_lista[4] = "";
      document.getElementById("SL0").innerHTML = "";
      document.getElementById("SL1").innerHTML = "";
      document.getElementById("SL2").innerHTML = "";
      document.getElementById("SL3").innerHTML = "";
      document.getElementById("SL4").innerHTML = "";
      s_counter = 0;
    }
})

btn5.addEventListener('click', () => { // Adderar varor.
  if (counter > 19) alert("Max 20 artiklar..."); // max - 1.
  else
  {
    let v_add = document.getElementById('in_form').elements['add'].value;
    v_add = "☼ " + v_add;
    document.getElementById(`${counter}`).innerHTML = v_add; // Adderar text i spantaggen.
    listan[counter] = [v_add, 1]; // Laddar 2Darrayen.
    document.getElementById(`L${counter}`).className = "rad1"; // Byter klass.
    counter++;
  }
})

btn6.addEventListener('click', () => { // Större listtext.
  fsize += 0.1;
  let element = document.querySelector('.listout');
  element.style.fontSize = `${fsize}em`;

  element = document.getElementsByClassName('radund');
  for (i=0; i<element.length; i++){
    element[i].style.height = `${Math.round(17 * fsize)}px`;
  }
  element = document.getElementsByClassName('radrem');
  for (i=0; i<element.length; i++){
    element[i].style.height = `${Math.round(17 * fsize)}px`;
  }
})

btn7.addEventListener('click', () => { // Mindre listtext.
  fsize -= 0.1;
  let element = document.querySelector('.listout');
  element.style.fontSize = `${fsize}em`;
  element = document.getElementsByClassName('radund');
  for (i=0; i<element.length; i++){
    element[i].style.height = `${Math.round(17 * fsize)}px`;
  }
  element = document.getElementsByClassName('radrem');
  for (i=0; i<element.length; i++){
    element[i].style.height = `${Math.round(17 * fsize)}px`;
  }
})

btn8.addEventListener('click', () => { // Markerar alla.
  for (i=0; i<counter; i++) // Endast aktuella berörs.
  {
    document.getElementById(`L${i}`).className = "rad2";
    listan[i][1] = 2;
  }
})

btn9.addEventListener('click', () => { // Avmarkerar alla.
  for (i=0; i<counter; i++) // Endast aktuella berörs.
  {
    document.getElementById(`L${i}`).className = "rad1";
    listan[i][1] = 1;
  }
})

// Listfunktion för sparad lista - index 0:
function open0List() {
  loadArray(JSON.parse(localStorage.getItem("ToDo-lista 1")));
}
// Listfunktion för sparad lista - index 1:
function open1List() {
  loadArray(JSON.parse(localStorage.getItem("ToDo-lista 2")));
}
// Listfunktion för sparad lista - index 2:
function open2List() {
  loadArray(JSON.parse(localStorage.getItem("ToDo-lista 3")));
}
// Listfunktion för sparad lista - index 3:
function open3List() {
  loadArray(JSON.parse(localStorage.getItem("ToDo-lista 4")));
}
// Listfunktion för sparad lista - index 4:
function open4List() {
  loadArray(JSON.parse(localStorage.getItem("ToDo-lista 5")));
}
// Slut listfunktioner för sparade listor.

// Listfunktioner för index 0:

function mark0() { // Markeras som struken.
  document.getElementById("L0").className = "rad2"; // Byter klass.
  listan[0][1] = 2; // Laddar 2Darrayen.
}
U0.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L0").className = "rad1"; // Byter klass.
  listan[0][1] = 1; // Laddar 2Darrayen.
})
R0.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(0);
  printList();
})

// Listfunktioner för index 1:

function mark1() { // Markeras som struken.
  document.getElementById("L1").className = "rad2"; // Byter klass.
  listan[1][1] = 2; // Laddar 2Darrayen.
}
U1.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L1").className = "rad1"; // Byter klass.
  listan[1][1] = 1; // Laddar 2Darrayen.
})
R1.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(1);
  printList();
})

// Listfunktioner för index 2:

function mark2() { // Markeras som struken.
  document.getElementById("L2").className = "rad2"; // Byter klass.
  listan[2][1] = 2; // Laddar 2Darrayen.
}
U2.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L2").className = "rad1"; // Byter klass.
  listan[2][1] = 1; // Laddar 2Darrayen.
})
R2.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(2);
  printList();
})

// Listfunktioner för index 3:

function mark3() { // Markeras som struken.
  document.getElementById("L3").className = "rad2"; // Byter klass.
  listan[3][1] = 2; // Laddar 2Darrayen.
}
U3.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L3").className = "rad1"; // Byter klass.
  listan[3][1] = 1; // Laddar 2Darrayen.
})
R3.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(3);
  printList();
})

// Listfunktioner för index 4:

function mark4() { // Markeras som struken.
  document.getElementById("L4").className = "rad2"; // Byter klass.
  listan[4][1] = 2; // Laddar 2Darrayen.
}
U4.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L4").className = "rad1"; // Byter klass.
  listan[4][1] = 1; // Laddar 2Darrayen.
})
R4.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(4);
  printList();
})

// Listfunktioner för index 5:

function mark5() { // Markeras som struken.
  document.getElementById("L5").className = "rad2"; // Byter klass.
  listan[5][1] = 2; // Laddar 2Darrayen.
}
U5.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L5").className = "rad1"; // Byter klass.
  listan[5][1] = 1; // Laddar 2Darrayen.
})
R5.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(5);
  printList();
})

// Listfunktioner för index 6:

function mark6() { // Markeras som struken.
  document.getElementById("L6").className = "rad2"; // Byter klass.
  listan[6][1] = 2; // Laddar 2Darrayen.
}
U6.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L6").className = "rad1"; // Byter klass.
  listan[6][1] = 1; // Laddar 2Darrayen.
})
R6.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(6);
  printList();
})

// Listfunktioner för index 7:

function mark7() { // Markeras som struken.
  document.getElementById("L7").className = "rad2"; // Byter klass.
  listan[7][1] = 2; // Laddar 2Darrayen.
}
U7.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L7").className = "rad1"; // Byter klass.
  listan[7][1] = 1; // Laddar 2Darrayen.
})
R7.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(7);
  printList();
})

// Listfunktioner för index 8:

function mark8() { // Markeras som struken.
  document.getElementById("L8").className = "rad2"; // Byter klass.
  listan[8][1] = 2; // Laddar 2Darrayen.
}
U8.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L8").className = "rad1"; // Byter klass.
  listan[8][1] = 1; // Laddar 2Darrayen.
})
R8.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(8);
  printList();
})

// Listfunktioner för index 9:

function mark9() { // Markeras som struken.
  document.getElementById("L9").className = "rad2"; // Byter klass.
  listan[9][1] = 2; // Laddar 2Darrayen.
}
U9.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L9").className = "rad1"; // Byter klass.
  listan[9][1] = 1; // Laddar 2Darrayen.
})
R9.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(9);
  printList();
})

// Listfunktioner för index 10:

function mark10() { // Markeras som struken.
  document.getElementById("L10").className = "rad2"; // Byter klass.
  listan[10][1] = 2; // Laddar 2Darrayen.
}
U10.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L10").className = "rad1"; // Byter klass.
  listan[10][1] = 1; // Laddar 2Darrayen.
})
R10.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(10);
  printList();
})

// Listfunktioner för index 11:

function mark11() { // Markeras som struken.
  document.getElementById("L11").className = "rad2"; // Byter klass.
  listan[11][1] = 2; // Laddar 2Darrayen.
}
U11.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L11").className = "rad1"; // Byter klass.
  listan[11][1] = 1; // Laddar 2Darrayen.
})
R11.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(11);
  printList();
})

// Listfunktioner för index 12:

function mark12() { // Markeras som struken.
  document.getElementById("L12").className = "rad2"; // Byter klass.
  listan[12][1] = 2; // Laddar 2Darrayen.
}
U12.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L12").className = "rad1"; // Byter klass.
  listan[12][1] = 1; // Laddar 2Darrayen.
})
R12.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(12);
  printList();
})

// Listfunktioner för index 13:

function mark13() { // Markeras som struken.
  document.getElementById("L13").className = "rad2"; // Byter klass.
  listan[13][1] = 2; // Laddar 2Darrayen.
}
U13.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L13").className = "rad1"; // Byter klass.
  listan[13][1] = 1; // Laddar 2Darrayen.
})
R13.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(13);
  printList();
})

// Listfunktioner för index 14:

function mark14() { // Markeras som struken.
  document.getElementById("L14").className = "rad2"; // Byter klass.
  listan[14][1] = 2; // Laddar 2Darrayen.
}
U14.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L14").className = "rad1"; // Byter klass.
  listan[14][1] = 1; // Laddar 2Darrayen.
})
R14.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(14);
  printList();
})

// Listfunktioner för index 15:

function mark15() { // Markeras som struken.
  document.getElementById("L15").className = "rad2"; // Byter klass.
  listan[15][1] = 2; // Laddar 2Darrayen.
}
U15.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L15").className = "rad1"; // Byter klass.
  listan[15][1] = 1; // Laddar 2Darrayen.
})
R15.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(15);
  printList();
})

// Listfunktioner för index 16:

function mark16() { // Markeras som struken.
  document.getElementById("L16").className = "rad2"; // Byter klass.
  listan[16][1] = 2; // Laddar 2Darrayen.
}
U16.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L16").className = "rad1"; // Byter klass.
  listan[16][1] = 1; // Laddar 2Darrayen.
})
R16.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(16);
  printList();
})

// Listfunktioner för index 17:

function mark17() { // Markeras som struken.
  document.getElementById("L17").className = "rad2"; // Byter klass.
  listan[17][1] = 2; // Laddar 2Darrayen.
}
U17.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L17").className = "rad1"; // Byter klass.
  listan[17][1] = 1; // Laddar 2Darrayen.
})
R17.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(17);
  printList();
})

// Listfunktioner för index 18:

function mark18() { // Markeras som struken.
  document.getElementById("L18").className = "rad2"; // Byter klass.
  listan[18][1] = 2; // Laddar 2Darrayen.
}
U18.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L18").className = "rad1"; // Byter klass.
  listan[18][1] = 1; // Laddar 2Darrayen.
})
R18.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(18);
  printList();
})

// Listfunktioner för index 19:

function mark19() { // Markeras som struken.
  document.getElementById("L19").className = "rad2"; // Byter klass.
  listan[19][1] = 2; // Laddar 2Darrayen.
}
U19.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L19").className = "rad1"; // Byter klass.
  listan[19][1] = 1; // Laddar 2Darrayen.
})
R19.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(19);
  printList();
})

// Listfunktioner för index 20:

function mark20() { // Markeras som struken.
  document.getElementById("L20").className = "rad2"; // Byter klass.
  listan[20][1] = 2; // Laddar 2Darrayen.
}
U20.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
  document.getElementById("L20").className = "rad1"; // Byter klass.
  listan[20][1] = 1; // Laddar 2Darrayen.
})
R20.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
  arrayOrder(20);
  printList();
})

// // Listfunktioner för index Ö:

// function markÖ() { // Markeras som struken.
//   document.getElementById("LÖ").className = "rad2"; // Byter klass.
//   listan[Ö][1] = 2; // Laddar 2Darrayen.
// }
// UÖ.addEventListener('click', () => { // Gör struken till ostruken (ångraknappen).
//   document.getElementById("LÖ").className = "rad1"; // Byter klass.
//   listan[Ö][1] = 1; // Laddar 2Darrayen.
// })
// RÖ.addEventListener('click', () => { // Tar bort en listrad och ändrar 2Darrayen (tabortknappen).
//   arrayOrder(Ö);
//   printList();
// })

// Slut listfunktioner.

function loadArray(arrin) // Laddar upp en sparad lista.
{
  counter = 0;
  for (i=0; i<21; i++) // <-- arrayens verkliga längd
  {
    document.getElementById(`${i}`).innerHTML = arrin[i][0];
    document.getElementById(`L${i}`).className = `rad${arrin[i][1]}`;
    if (arrin[i][0] != "") counter++;
    listan[i] = arrin[i];
  }
}

function arrayOrder(rad) // For-loop som fixar till arrayen om någon rad (index) tas bort (by myself).
{
  let temp = [];
  let findindex = false;

  for (i=0; i<21; i++) // <-- arrayens verkliga längd
  {
    if (rad == i) findindex = true;

    if (findindex && i < listan.length)
    {
      if (i + 1 == listan.length) temp[i] = listan[i]; else temp[i] = listan[i + 1];
    }

    if (!findindex && i < listan.length)
    {
      temp[i] = listan[i];
    }
  }
  listan = temp;
}

function removeList() // Raderar hela listan. 
{
  for (i=0; i<21; i++) // <-- arrayens verkliga längd
  {
    document.getElementById(`${i}`).innerHTML = "";
    document.getElementById(`L${i}`).className = "d-none";
    listan[i][0] = "";
    listan[i][1] = 0;
  }
  counter = 0;
}

function printList() // Skriver ut listan och laddar 2Darrayen om någon rad har tagits bort. 
{
  for (i=0; i<21; i++) // <-- arrayens verkliga längd
  {
    document.getElementById(`${i}`).innerHTML = listan[i][0];
    if (listan[i][1] == 0) document.getElementById(`L${i}`).className = "d-none";
    else if (listan[i][1] == 1) document.getElementById(`L${i}`).className = "rad1";
    else if (listan[i][1] == 2) document.getElementById(`L${i}`).className = "rad2";
  }
  counter--;
}