

/* Open */
function openNav() {
    document.getElementById("overNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("overNav").style.height = "0%";
  }




  const acc = document.getElementsByClassName("accordion");
  
  
  for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } 
          else {
              panel.style.maxHeight = panel.scrollHeight + "px";
          } 
      });
  }