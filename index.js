
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const menuClose = document.getElementById('menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuOverlay = document.getElementById('menu-overlay');

        function openMenu() {
            mobileMenu.classList.remove('translate-x-full');
            menuOverlay.classList.remove('opacity-0', 'invisible');
            menuOverlay.classList.add('opacity-100', 'visible');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            mobileMenu.classList.add('translate-x-full');
            menuOverlay.classList.add('opacity-0', 'invisible');
            menuOverlay.classList.remove('opacity-100', 'visible');
            document.body.style.overflow = 'auto';
        }

        menuToggle.addEventListener('click', openMenu);
        menuClose.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);

        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('#mobile-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('main-header');
            if (window.scrollY > 100) {
                header.classList.add('nav-blur');
            } else {
                header.classList.remove('nav-blur');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Typing animation
        const typingElement = document.querySelector('.typing-animation');
        if (typingElement) {
            const text = typingElement.textContent;
            typingElement.textContent = '';
            
            setTimeout(() => {
                let i = 0;
                function typeWriter() {
                    if (i < text.length) {
                        typingElement.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    }
                }
                typeWriter();
            }, 1000);
        }

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.floating-animation');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    </>
     <>
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const menuClose = document.getElementById('menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuOverlay = document.getElementById('menu-overlay');

        function openMenu() {
            mobileMenu.classList.remove('translate-x-full');
            menuOverlay.classList.remove('opacity-0', 'invisible');
            menuOverlay.classList.add('opacity-100', 'visible');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            mobileMenu.classList.add('translate-x-full');
            menuOverlay.classList.add('opacity-0', 'invisible');
            menuOverlay.classList.remove('opacity-100', 'visible');
            document.body.style.overflow = 'auto';
        }

        menuToggle.addEventListener('click', openMenu);
        menuClose.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);

        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('#mobile-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('main-header');
            if (window.scrollY > 100) {
                header.classList.add('nav-blur');
            } else {
                header.classList.remove('nav-blur');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Typing animation
        const typingElement = document.querySelector('.typing-animation');
        if (typingElement) {
            const text = typingElement.textContent;
            typingElement.textContent = '';
            
            setTimeout(() => {
                let i = 0;
                function typeWriter() {
                    if (i < text.length) {
                        typingElement.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    }
                }
                typeWriter();
            }, 1000);
        }

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.floating-animation');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
