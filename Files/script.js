console.log("Created by N. Sheik Ahamed Iqbal");
console.log("This Website is under Development");

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  document.getElementById("Title").style.left = "20px";

  document.getElementById("Logo").style.height = "85px";
  document.getElementById("Logo").style.width = "85px";
}
else {
  document.getElementById("Title").style.left = "450px";
  document.getElementById("Title").style.fontSize = "200%";

  document.getElementById("Logo").style.height = "100px";
  document.getElementById("Logo").style.width = "100px";
}

var slideIndex = 1;
showSlides();

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}
