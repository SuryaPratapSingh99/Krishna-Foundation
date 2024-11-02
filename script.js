// script.js
        document.addEventListener('DOMContentLoaded', () => {
            // Variables
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');
            const scrollTopBtn = document.getElementById('scrollTopBtn');
            const registrationForm = document.getElementById('registrationForm');
            const slides = document.querySelectorAll('.slide');
            let currentSlide = 0;

        // document.addEventListener('DOMContentLoaded', () => {
        //     // Variables
        //     const menuToggle = document.getElementById('menuToggle');
        //     const navLinks = document.getElementById('navLinks');
        //     const scrollTopBtn = document.getElementById('scrollTopBtn');
        //     const registrationForm = document.getElementById('registrationForm');
        //     const slides = document.querySelectorAll('.slide');
        //     let currentSlide = 0;
        

        
            // Toggle Mobile Menu
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuToggle.innerHTML = navLinks.classList.contains('active') 
                    ? '' 
                    : '';
                // if(navLinks.classList.contains('active')){
                //     menuToggle.innerHTML = '';
                //     menuToggle.innerHTML = '<i class="fas fa-times"></i>';
                // }
                // if(!navLinks.classList.contains('active')){
                //     menuToggle.innerHTML = '';
                //     menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                // }
            });
        
// // Toggle Mobile Menu
// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     menuToggle.innerHTML = navLinks.classList.contains('active') 
//         ? '<i class="fas fa-times"></i>' 
//         : '<i class="fas fa-bars"></i>';
// });




            // Scroll to Section Function
            window.scrollToSection = (id) => {
                const element = document.getElementById(id);
                const navHeight = document.querySelector('.navbar').offsetHeight;
                
 // Scroll to Section Function
//  window.scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//     }
// };






                if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            };
        
            // Scroll to Top Button Visibility
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.style.display = 'flex';
                } else {
                    scrollTopBtn.style.display = 'none';
                }
            });
        
            // Scroll to Top Button Click Handler
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        
            // Image Slideshow
            function showSlide(index) {
                slides.forEach(slide => slide.classList.remove('active'));
                slides[index].classList.add('active');
            }
        
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }
        
            // Change slide every 3 seconds
            setInterval(nextSlide, 3000);
        
            // Registration Form Submit Handler
            registrationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const termsCheckbox = document.getElementById('terms');
                if (!termsCheckbox.checked) {
                    alert('Please accept the terms and conditions to proceed');
                    return;
                }
        
                // Here you would typically handle the form submission
                // For now, we'll just show a success message
                alert('Registration submitted successfully!');
                registrationForm.reset();
            });
        
            // Add smooth scrolling to all navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const id = this.getAttribute('href').slice(1);
                    if (id) {
                        scrollToSection(id);
                    }
                });
            });
        
            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (navLinks.classList.contains('active') && 
                    !navLinks.contains(e.target) && 
                    !menuToggle.contains(e.target)) {
                    navLinks.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        
            // Add hover effect to navigation buttons
            const navButtons = document.querySelectorAll('.nav-links button');
            navButtons.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    if (!button.classList.contains('register-btn')) {
                        button.style.color = '#2563eb'; // Primary color
                    }
                });
                
                button.addEventListener('mouseleave', () => {
                    if (!button.classList.contains('register-btn')) {
                        button.style.color = '#1f2937'; // Text dark color
                    }
                });
            });
            
            // const menuToggle = document.querySelector('.menu-toggle');
            // const navLinks = document.querySelector('.nav-links');
            
            // menuToggle.addEventListener('click', () => {
            //   navLinks.classList.toggle('active');
            // });
            

            // Initialize first slide
            showSlide(currentSlide);
        });