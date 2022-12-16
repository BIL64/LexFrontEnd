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

btn3.addEventListener('click', () => { // Fäller ned inmatningsmenyn.
  const klass = document.getElementById('savebut').classList;

  if (rak > 0)
  {
    let tabort = false;
    if (confirm("Detta raderar hela listan...")) tabort = true;
      if (tabort) {
        removeList();
        document.getElementById('in_form').classList.toggle('show');
        if (klass == "hide-content show") document.getElementById('savebut').classList.toggle('show');
        document.getElementById("S1").className = "save0"; // Byter klass.
      }
  }
  else
  {
    if (klass != "hide-content show") document.getElementById('in_form').classList.toggle('show');
  }
})

btn4.addEventListener('click', () => { // Visar sparaknappen och uppdaterar sparade listor.
  const klass1 = document.getElementById('in_form').className;
  const klass2 = document.getElementById('savebut').classList;

  if (klass1 == "hide-content show") document.getElementById('savebut').classList.toggle('show');
  else alert("Öppna en ny lista först...");
  if (klass2 == "hide-content show")
  {
    for (i=1; i<=5; i++) // Ändras ej!
    {
      if (s_lista[i-1] == `ToDo-lista ${i}`)
      {
        document.getElementById(`SL${i-1}`).innerHTML = `ToDo-lista ${i}`;
      }
    }
    document.getElementById("S1").className = "save1"; // Byter klass.
  }
  else document.getElementById("S1").className = "save0"; // Byter klass.
})

btn10.addEventListener('click', async () => { // Sparar listan i localStorage.

  if (rak < 1) alert("Listan är tom...");
  else
  {
    if (s_rak > 4) s_rak = 1; else s_rak++;

    for (i=1; i<=5; i++) // Ändras ej!
    {
      if (s_rak == i)
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
      s_rak = 0;
    }
})

btn5.addEventListener('click', () => { // Adderar rader.

  let v_add = document.getElementById('in_form').elements['add'].value;
  v_add = "☼ " + v_add;

  let element = document.getElementById('UL');

  let str = "<li id='L" + rak + "' class='rad1'><span id='" + rak + "'>" + v_add + "</span><button id='U" + rak + "' " +
  "class='radund'>ångra</button><button id='R" + rak + "' class='radrem'>ta bort</button></li>";
  element.insertAdjacentHTML('afterbegin', str);

  listan[rak] = [v_add, 1]; // Laddar 2Darrayen.
  let forline = new Eventforline; // Instansiering av klass.
  forline.makeEvent(rak);
  rak++;
})

class Eventforline { // Klassen lägger till lyssnare av mushändelser till varje ny rad.

  makeEvent(id)
  {
    const com1But = document.getElementById(id);
    com1But.onmouseup = mark;

    const com2But = document.getElementById('U' + id);
    com2But.onmouseup = angra;

    const com3But = document.getElementById('R' + id);
    com3But.onmouseup = tabort;

    function mark() { // Markeras som struken.
      document.getElementById('L' + id).className = 'rad2'; // Byter klass.
      listan[id][1] = 2; // Laddar 2Darrayen.
    }

    function angra() { // Gör struken till ostruken (ångraknappen).
      document.getElementById('L' + id).className = 'rad1'; // Byter klass.
      listan[id][1] = 1; // Laddar 2Darrayen.
    }

    function tabort() { // Tar bort en listrad (tabortknappen).
      const container = document.getElementById('UL');
      const lichild = document.getElementById('L' + id);
      container.removeChild(lichild);
      listan[id] = ["", 0]; // Laddar 2Darrayen.
    }
  }
}

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
  for (i=0; i<element.length; i++) {
    element[i].style.height = `${Math.round(17 * fsize)}px`;
  }
  element = document.getElementsByClassName('radrem');
  for (i=0; i<element.length; i++) {
    element[i].style.height = `${Math.round(17 * fsize)}px`;
  }
})

btn8.addEventListener('click', () => { // Markerar alla.
  const c = document.getElementsByClassName('listout')[0];
  const x = c.getElementsByClassName('rad1');
  while (x && x.length) {
  x[0].className = 'rad2';
  }

  for(i=0; i<100; i++) { // Även 2Darrayen måste justeras.
    if (listan[i][0] != "") listan[i][1] = 2; // Laddar 2Darrayen.
  }
})

btn9.addEventListener('click', () => { // Avmarkerar alla.
  const c = document.getElementsByClassName('listout')[0];
  const x = c.getElementsByClassName('rad2');
  while (x && x.length) {
  x[0].className = 'rad1';
  }

  for(i=0; i<100; i++) { // Även 2Darrayen måste justeras.
    if (listan[i][0] != "") listan[i][1] = 1; // Laddar 2Darrayen.
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

function loadArray(arrin) // Laddar upp en sparad lista.
{
  rak = 0;
  removeList();
  const element = document.getElementById('UL');

  for (i=0; i<100; i++)
  {
    if (arrin[i][0] != "")
    {
      let str = "<li id='L" + rak + "' class='rad" + arrin[i][1] + "'><span id='" + rak + "'>" + arrin[i][0] +
      "</span><button id='U" + rak + "' class='radund'>ångra</button><button id='R" + rak +
      "' class='radrem'>ta bort</button></li>";
      element.insertAdjacentHTML('afterbegin', str);
      let forline = new Eventforline; // Instansiering av klass.
      forline.makeEvent(rak);
      listan[rak] = arrin[rak];
      rak++;
    }
  }
}

function removeList() // Raderar alla rader.
{
  const c = document.getElementById('UL');
  let x = c.getElementsByClassName('rad1');
  while (x && x.length) {
  c.removeChild(x[0]);
  }

  x = c.getElementsByClassName('rad2');
  while (x && x.length) {
  c.removeChild(x[0]);
  }

  for (i=0; i<100; i++) {
    listan[i] = ["", 0];
  }
  rak = 0;
}