btn2.addEventListener('click', () => {
  let str = "[0] ,&nbsp;";
  const v_int = document.getElementById('bb_form').elements['inte'].value;
  const v_bish = document.getElementById('bb_form').elements['bish'].value;
  const v_bosh = document.getElementById('bb_form').elements['bosh'].value;

  document.getElementById('btn2').innerHTML = "<div>Från 1 till " + v_int + "</div>";

  if (v_int < 1 || v_int == null || v_bish < 1 || v_bish == null || v_bosh < 1 || v_bosh == null)
  {
    if (v_int == null || v_bish == null || v_bosh == null)
    document.getElementById('M2').innerHTML = "<div>Någon eller några inmatningar är odefinierade...</div>";
    else document.getElementById('M2').innerHTML = "<div>Någon eller några inmatningar är noll eller mindre än noll...</div>";
  }
  else
  {
    if (flag)
    {
      document.getElementById('M2').innerHTML = "<div></div>";
      flag = false;
    }
    else
    {
      for (let i = 1; i <= v_int; i++)
      {
        if (i % v_bish === 0 && i % v_bosh === 0) str += "<span style='color: green'>" + i + " Bish-Bosh,</span>&nbsp;";
        else if (i % v_bish === 0) str += "<span style='color: blue'>" + i + " Bish,</span>&nbsp;";
        else if (i % v_bosh === 0) str += "<span style='color: red'>" + i + " Bosh,</span>&nbsp;";
        else str += "[" + i + "] ,&nbsp;";

        if (i % 10 === 0 && i < v_int) str += "<br><br>";
      }

      str = str.replace("[" + v_int + "] ,", v_int + ".");
      str = str.replace(v_int + " Bish,", v_int + " Bish.");
      str = str.replace(v_int + " Bosh,", v_int + " Bosh.");
      str = str.replace(v_int + " Bish-Bosh,", v_int + " Bish-Bosh.");
      document.getElementById('M2').innerHTML = "<div>" + str + "</div>";
      flag = true;
    }
  }
})