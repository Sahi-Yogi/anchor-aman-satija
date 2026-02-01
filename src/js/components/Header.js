export const Header = () => {
    const header = document.createElement('header');
    header.className = 'fixed top-0 left-0 w-full z-50 transition-all duration-500';
    
    header.innerHTML = `
        <div class="container mx-auto">
            <!-- Glass Pill Wrapper (Mobile Only) / Standard Row (Desktop) -->
            <div id="header-main" class="flex justify-between items-center transition-all duration-500 lg:px-6 lg:py-4 glass-pill lg:rounded-none lg:mx-0 lg:mt-0 lg:bg-transparent lg:border-none lg:shadow-none">
                <!-- Logo -->
                <a href="index.html" class="flex items-center group relative z-[70]">
                    <img src="src/assets/images/Anchor-Aman-Satija-logo.png" alt="Aman Satija Logo" class="h-10 md:h-16 w-auto group-hover:scale-105 transition-transform duration-500">
                </a>
                
                <!-- Desktop Nav -->
                <nav class="hidden lg:flex space-x-8 items-center">
                    <a href="index.html" class="nav-link">Home Story</a>
                    <a href="about.html" class="nav-link">About</a>
                    <a href="services.html" class="nav-link">Services</a>
                    <a href="gallery.html" class="nav-link">Gallery</a>
                    <a href="testimonials.html" class="nav-link">Testimonials</a>
                    <a href="press-kit.html" class="nav-link">Press Kit</a>
                    <div class="h-6 w-[1px] bg-white/10 mx-2"></div>
                    <a href="contact.html" class="btn-gold !py-2 !px-8 hover:!bg-white">Book Now</a>
                </nav>

                <!-- Hamburger Button (Luxury Morph) -->
                <button id="menu-trigger" class="lg:hidden relative z-[70] w-10 h-10 flex flex-col justify-center items-center focus:outline-none">
                    <div class="w-6 h-0.5 bg-white mb-1.5 ham-line ham-line-1"></div>
                    <div class="w-4 h-0.5 bg-brand-gold mb-1.5 ham-line ham-line-2 self-end"></div>
                    <div class="w-6 h-0.5 bg-white ham-line ham-line-3"></div>
                </button>
            </div>
        </div>
        
        <!-- Luxury Curtain Menu (Mobile Only) -->
        <div id="curtain-nav" class="lg:hidden fixed inset-0 z-[60] bg-[#080808] curtain-menu flex flex-col pt-32 pb-12 px-8">
            <!-- Background Texture -->
            <div class="absolute inset-0 opacity-20 pointer-events-none">
                <div class="absolute top-0 right-0 w-[80%] h-[80%] bg-brand-gold/5 blur-[150px] rounded-full"></div>
                <div class="absolute bottom-0 left-0 w-[50%] h-[50%] bg-white/5 blur-[100px] rounded-full"></div>
            </div>

            <div class="relative z-10 flex flex-col flex-grow">
                <!-- Nav Links with Staggered Wipe -->
                <div class="flex flex-col space-y-4">
                    <a href="index.html" class="curtain-link text-5xl font-serif font-bold delay-1"><span class="hover:text-brand-gold transition-colors">Home</span></a>
                    <a href="about.html" class="curtain-link text-5xl font-serif font-bold delay-2"><span class="hover:text-brand-gold transition-colors">About</span></a>
                    <a href="services.html" class="curtain-link text-5xl font-serif font-bold delay-3"><span class="hover:text-brand-gold transition-colors">Services</span></a>
                    <a href="gallery.html" class="curtain-link text-5xl font-serif font-bold delay-4"><span class="hover:text-brand-gold transition-colors">Gallery</span></a>
                    <a href="testimonials.html" class="curtain-link text-5xl font-serif font-bold delay-5"><span class="hover:text-brand-gold transition-colors">Testimonials</span></a>
                    <a href="press-kit.html" class="curtain-link text-5xl font-serif font-bold delay-6"><span class="hover:text-brand-gold transition-colors">Press Kit</span></a>
                </div>

                <!-- Footer of Menu -->
                <div class="mt-auto pt-10 flex flex-col space-y-8">
                    <a href="contact.html" class="btn-gold w-full text-center text-xl py-5 shadow-[0_20px_50px_rgba(212,175,55,0.2)] delay-7 curtain-link"><span>Book The Stage</span></a>
                    
                    <div class="flex justify-between items-center border-t border-white/5 pt-8">
                        <div class="flex space-x-6">
                            <a href="https://www.instagram.com/anchor_aman_satija/" target="_blank" class="text-white/40 hover:text-brand-gold transition-colors text-2xl"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#" class="text-white/40 hover:text-brand-gold transition-colors text-2xl"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                        <span class="text-[10px] uppercase tracking-[0.3em] text-white/20">Aman Satija &copy; 2024</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Logic
    setTimeout(() => {
        const trigger = header.querySelector('#menu-trigger');
        const nav = header.querySelector('#curtain-nav');
        const main = header.querySelector('#header-main');
        let isOpen = false;

        const toggleMenu = () => {
            isOpen = !isOpen;
            nav.classList.toggle('active');
            trigger.classList.toggle('open');
            document.body.style.overflow = isOpen ? 'hidden' : '';
            
            // If opening, make header background solid immediately
            if (isOpen) {
                main.classList.add('!bg-transparent', '!shadow-none', '!border-none');
            } else {
                setTimeout(() => {
                    main.classList.remove('!bg-transparent', '!shadow-none', '!border-none');
                }, 800);
            }
        };

        trigger.addEventListener('click', toggleMenu);
        
        // Close on link click
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (isOpen) toggleMenu();
            });
        });

        // Scroll Effect for Glass Pill
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
                if (!isOpen) {
                    main.classList.add('shadow-2xl', 'bg-brand-dark/95');
                }
            } else {
                header.classList.remove('header-scrolled');
                if (!isOpen) {
                    main.classList.remove('shadow-2xl', 'bg-brand-dark/95');
                }
            }
        });
    }, 0);

    return header;
};
