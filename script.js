document.addEventListener("DOMContentLoaded", function() {
    // Contact Form Popup
    const contactUsBtn = document.getElementById("contact-us-btn");
    const contactFormPopup = document.getElementById("contact-form-popup");
    const closeBtn = document.querySelector(".close-btn");

    contactUsBtn.addEventListener("click", function() {
        contactFormPopup.style.display = "flex";
    });
    
    closeBtn.addEventListener("click", function() {
        contactFormPopup.style.display = "none";
    });
    
    window.addEventListener("click", function(event) {
        if (event.target == contactFormPopup) {
            contactFormPopup.style.display = "none";
        }
    });

    // Slider Functionality
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
    
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
    
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
    
    window.currentSlide = function(n) {
        slideIndex = n;
        showSlides();
    };

    // Our Project Section
    window.changeImage = function(imageSrc) {
        document.getElementById('project-image').src = imageSrc;
    }
});
