var acc = document.getElementsByClassName("questions");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var answers = this.nextElementSibling;
    if (answers.style.display === "block") {
        answers.style.display = "none";
    } else {
        answers.style.display = "block";
    }
  });
}