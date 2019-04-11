$(document).ready(function(){
    $("#cool").click(function(event){
        $("#genge").slideDown(1000);
    });
});

$(document).ready(function(){
    $("#cole").click(function(){
      $("#kal").slideDown(1000);  
    });
});

$(document).ready(function(){
    $("#col").click(function(){
     $("#moringa").slideDown(1000);   
    });
});

$(document).ready(function(){
    $("#cold").click(function(){
        $("#school").slideDown(1000);
    });
});

var toSlide = 1;
showSlides(toSlide);

function plusSlides(pet) {
  showSlides(toSlide += pet);
}

function currentSlide(pet) {
  showSlides(toSlide = pet);
}

function showSlides(pet) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (pet > slides.length) {toSlide = 1}    
  if (pet < 1) {toSlide = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[toSlide-1].style.display = "block";  
  dots[toSlide-1].className += " active";
}
