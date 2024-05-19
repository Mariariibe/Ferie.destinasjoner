var mybutton = document.getElementById("back-to-top");

  // Når brukeren blar nedover 20 piksler fra toppen av dokumentet, vis knappen
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // Når brukeren klikker på knappen, rull til toppen av dokumentet
  mybutton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };