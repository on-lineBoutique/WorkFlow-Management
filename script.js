document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const hiddenDiv1 = document.getElementById("hiddenDiv1");
    const hiddenDiv2 = document.getElementById("hiddenDiv2");
  
    button1.addEventListener("click", function() {
      toggleVisibility(hiddenDiv1);
    });
  
    button2.addEventListener("click", function() {
      toggleVisibility(hiddenDiv2);
    });
  
    function toggleVisibility(hiddenDiv) {
      if (hiddenDiv.style.display === "none") {
        hiddenDiv.style.display = "block";
      } else {
        hiddenDiv.style.display = "none";
      }
    }
  });
  