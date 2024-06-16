let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });

     let header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 100);

     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');

};






 const typed = new Typed('.multiple-text', {
    strings:['all AI tools', 'AI video editor', 'AI photo generator', 'prompt generator '],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });

 ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.heading',{ origin: 'top'});
 ScrollReveal().reveal('.home-img,  .services-continer',{ origin: 'bottom'});
 ScrollReveal().reveal(' .about-img, . .content h3',{ origin: 'left'});
 ScrollReveal().reveal('.logo,.title',{ origin: 'right'});

 function filterServices() {
    var input, filter, services, h3, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toLowerCase();
    services = document.getElementsByClassName('services-box');
    
    for (i = 0; i < services.length; i++) {
        h3 = services[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            services[i].style.display = "";
        } else {
            services[i].style.display = "none";
        }
    }
}