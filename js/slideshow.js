let slideIndex = 1; //indica o primeiro slide
showSlides(slideIndex); //chama a função que mostra o slide

function plusSlides(n) { //função que recebe o valor do slide
    showSlides(slideIndex += n); //chama a função que mostra o slide, somando o valor "n"
}

function currentSlide(n) { //função que recebe o valor do slide atual
    showSlides(slideIndex += n); //chama a função que mostra o slide, mostrando o valor "n"
}

function showSlides(n) {
    let i; //a variavel "i"
    let slides = document.getElementsByClassName("mySlides"); //variavel slides
    let dots = document.getElementsByClassName("dot"); //variavel dots

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}