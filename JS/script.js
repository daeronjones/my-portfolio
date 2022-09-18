

/* Open */
function openNav() {
    document.getElementById("overNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("overNav").style.height = "0%";
  }

  /* Open */
function openForm() {
    document.getElementById("contactForm").style.width = "100%";
  }
  
  /* Close */
  function closeForm() {
    document.getElementById("contactForm").style.width = "0%";
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






  // Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}








// Typeweriter
const i = 0;
const txt = document.getElementById("cardTitle");
const speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("cardTitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}