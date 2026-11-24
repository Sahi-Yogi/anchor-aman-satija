export const Header = () => {
    const header = document.createElement('header');
    header.className = 'fixed top-0 left-0 w-full z-50 transition-all duration-500 pointer-events-none';
    
    // Determine active page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const isActive = (path) => {
        if (path === 'index.html' && (currentPath === '' || currentPath === '/' || currentPath === 'index.html')) {
            return 'nav-link-active';
        }
        return currentPath === path ? 'nav-link-active' : '';
    };

    header.innerHTML = `
        <div class="container mx-auto px-3 sm:px-6 pointer-events-auto">
            <!-- Luxury Floating Island Header -->
            <div id="header-main" class="mt-3 lg:mt-5 transition-all duration-500 rounded-full bg-[#090a0f]/92 backdrop-blur-2xl border border-white/15 shadow-[0_12px_45px_rgba(0,0,0,0.65)] px-3.5 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-2.5 2xl:px-8 2xl:py-3 flex justify-between items-center">
                <!-- Logo & Brand Lockup -->
                <a href="index.html" class="flex items-center space-x-2.5 sm:space-x-3 group relative z-[70] shrink-0">
                    <div class="relative shrink-0">
                        <img src="src/assets/images/Aman-Satija-Anchor-Emblem-logo.webp" alt="Anchor Aman Satija Emblem" width="56" height="56" decoding="async" class="h-10 w-10 sm:h-12 sm:w-12 lg:h-13 lg:w-13 object-cover rounded-full border border-brand-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.3)] ring-1 ring-white/15 group-hover:scale-105 group-hover:border-brand-gold transition-all duration-300">
                        <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-brand-gold rounded-full border-2 border-[#090a0f] flex items-center justify-center">
                            <span class="w-1.5 h-1.5 bg-black rounded-full"></span>
                        </span>
                    </div>
                    <div class="flex flex-col justify-center border-l border-white/15 pl-2.5 sm:pl-3">
                        <span class="font-serif font-black text-sm sm:text-base lg:text-[17px] tracking-wider text-white group-hover:text-brand-gold transition-colors leading-tight">
                            AMAN SATIJA
                        </span>
                        <span class="text-[8.5px] sm:text-[9.5px] uppercase font-bold tracking-[0.2em] text-brand-gold leading-tight flex items-center gap-1 mt-0.5 whitespace-nowrap">
                            <span class="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                            Tiger of Alwar <span class="text-white/40">&bull;</span> <span class="text-white/70">Anchor</span>
                        </span>
                    </div>
                </a>
                
                <!-- Desktop Nav Links with Active State -->
                <nav class="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 2xl:space-x-2">
                    <a href="index.html" class="desktop-nav-link ${isActive('index.html')}">Home</a>
                    <a href="about.html" class="desktop-nav-link ${isActive('about.html')}">About</a>
                    <a href="services.html" class="desktop-nav-link ${isActive('services.html')}">Services</a>
                    <a href="gallery.html" class="desktop-nav-link ${isActive('gallery.html')}">Gallery</a>
                    <a href="testimonials.html" class="desktop-nav-link ${isActive('testimonials.html')}">Testimonials</a>
                    <a href="press-kit.html" class="desktop-nav-link ${isActive('press-kit.html')}">Press Kit</a>
                </nav>

                <!-- Desktop Action Strip -->
                <div class="hidden lg:flex items-center space-x-2.5 xl:space-x-3 shrink-0">
                    <!-- WhatsApp Quick Chat -->
                    <a href="https://wa.me/919057529067?text=Hi%20Aman%2C%20I%20would%20like%20to%20inquire%20about%20booking%20you%20for%20an%20event." target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" class="btn-icon w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 shadow-[0_2px_10px_rgba(37,211,102,0.15)]">
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                    </a>

                    <!-- Direct Desk Phone (Visible on 2XL screens) -->
                    <a href="tel:+919057529067" title="Direct Booking Desk" class="btn-icon hidden 2xl:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-brand-gold/40 text-white/75 hover:text-white text-xs tracking-wider">
                        <i class="fa-solid fa-phone text-[10px] text-brand-gold"></i>
                        <span class="font-medium">+91 90575 29067</span>
                    </a>

                    <!-- Book Now Button -->
                    <a href="contact.html" class="btn-gold !py-2 sm:!py-2.5 !px-4 sm:!px-5 lg:!px-6 !text-xs !tracking-[0.14em]">
                        Book Now
                    </a>
                </div>

                <!-- Hamburger Button (Mobile Only) -->
                <button id="menu-trigger" aria-label="Toggle navigation menu" class="btn-icon lg:hidden relative z-[70] w-10 h-10 flex flex-col justify-center items-center focus:outline-none">
                    <div class="w-6 h-0.5 bg-white mb-1.5 ham-line ham-line-1"></div>
                    <div class="w-4 h-0.5 bg-brand-gold mb-1.5 ham-line ham-line-2 self-end"></div>
                    <div class="w-6 h-0.5 bg-white ham-line ham-line-3"></div>
                </button>
            </div>
        </div>
        
        <!-- Luxury Curtain Menu (Mobile Only) -->
        <div id="curtain-nav" class="lg:hidden fixed inset-0 z-[80] bg-[#090a0f]/98 backdrop-blur-2xl curtain-menu flex flex-col pt-6 pb-6 px-6 sm:px-8 overflow-y-auto pointer-events-auto">
            <!-- Background Texture / Ambient Glow -->
            <div class="absolute inset-0 opacity-25 pointer-events-none">
                <div class="absolute top-0 right-0 w-[80%] h-[50%] bg-brand-gold/10 blur-[130px] rounded-full"></div>
                <div class="absolute bottom-0 left-0 w-[60%] h-[40%] bg-white/5 blur-[100px] rounded-full"></div>
            </div>

            <div class="relative z-10 flex flex-col flex-grow">
                <!-- Mobile Menu Top Header Bar with Official Logo & Close Button -->
                <div class="flex justify-between items-center pb-4 border-b border-white/10 shrink-0">
                    <a href="index.html" class="flex items-center space-x-3">
                        <img src="src/assets/images/Aman-Satija-Anchor-Emblem-logo.webp" alt="Anchor Aman Satija" width="48" height="48" class="h-11 w-11 object-cover rounded-full border border-brand-gold/40 shadow-md">
                        <div class="flex flex-col border-l border-white/10 pl-2.5">
                            <span class="font-serif font-black text-base text-white tracking-wider leading-tight">AMAN SATIJA</span>
                            <span class="text-[9px] uppercase font-bold tracking-[0.2em] text-brand-gold leading-tight mt-0.5">Tiger of Alwar &bull; Host</span>
                        </div>
                    </a>
                    <button id="curtain-close-btn" aria-label="Close menu" class="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-gold hover:text-black border border-white/15 flex items-center justify-center text-white transition-all">
                        <i class="fa-solid fa-xmark text-lg"></i>
                    </button>
                </div>

                <!-- Artist Booking Availability Ribbon -->
                <div class="py-2.5 px-3.5 rounded-lg bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-between my-4 shrink-0">
                    <div class="flex items-center space-x-2">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span class="text-[11px] font-semibold tracking-wider text-brand-gold uppercase">Dates Open: Royal Weddings & Galas</span>
                    </div>
                    <span class="text-[10px] text-white/60 uppercase tracking-widest font-mono">Pan-India</span>
                </div>

                <!-- Structured Nav Links with Numbering and Active State -->
                <div class="flex flex-col space-y-1 my-auto py-2">
                    <a href="index.html" class="curtain-link group py-3 border-b border-white/5 flex items-center justify-between ${isActive('index.html') ? 'text-brand-gold' : ''}">
                        <div class="flex items-center space-x-3">
                            <span class="text-xs font-mono text-brand-gold font-bold">01</span>
                            <span class="text-2xl font-serif font-bold text-white group-hover:text-brand-gold transition-colors">Home Story</span>
                        </div>
                        <i class="fa-solid fa-arrow-right text-xs text-white/30 group-hover:text-brand-gold group-hover:translate-x-1 transition-all"></i>
                    </a>
                    <a href="about.html" class="curtain-link group py-3 border-b border-white/5 flex items-center justify-between ${isActive('about.html') ? 'text-brand-gold' : ''}">
                        <div class="flex items-center space-x-3">
                            <span class="text-xs font-mono text-brand-gold font-bold">02</span>
                            <span class="text-2xl font-serif font-bold text-white group-hover:text-brand-gold transition-colors">About Aman</span>
                        </div>
                        <i class="fa-solid fa-arrow-right text-xs text-white/30 group-hover:text-brand-gold group-hover:translate-x-1 transition-all"></i>
                    </a>
                    <a href="services.html" class="curtain-link group py-3 border-b border-white/5 flex items-center justify-between ${isActive('services.html') ? 'text-brand-gold' : ''}">
                        <div class="flex items-center space-x-3">
                            <span class="text-xs font-mono text-brand-gold font-bold">03</span>
                            <span class="text-2xl font-serif font-bold text-white group-hover:text-brand-gold transition-colors">Services & Shows</span>
                        </div>
                        <i class="fa-solid fa-arrow-right text-xs text-white/30 group-hover:text-brand-gold group-hover:translate-x-1 transition-all"></i>
                    </a>
                    <a href="gallery.html" class="curtain-link group py-3 border-b border-white/5 flex items-center justify-between ${isActive('gallery.html') ? 'text-brand-gold' : ''}">
                        <div class="flex items-center space-x-3">
                            <span class="text-xs font-mono text-brand-gold font-bold">04</span>
                            <span class="text-2xl font-serif font-bold text-white group-hover:text-brand-gold transition-colors">Gallery & Reels</span>
                        </div>
                        <i class="fa-solid fa-arrow-right text-xs text-white/30 group-hover:text-brand-gold group-hover:translate-x-1 transition-all"></i>
                    </a>
                    <a href="testimonials.html" class="curtain-link group py-3 border-b border-white/5 flex items-center justify-between ${isActive('testimonials.html') ? 'text-brand-gold' : ''}">
                        <div class="flex items-center space-x-3">
                            <span class="text-xs font-mono text-brand-gold font-bold">05</span>
                            <span class="text-2xl font-serif font-bold text-white group-hover:text-brand-gold transition-colors">Testimonials 5.0★</span>
                        </div>
                        <i class="fa-solid fa-arrow-right text-xs text-white/30 group-hover:text-brand-gold group-hover:translate-x-1 transition-all"></i>
                    </a>
                    <a href="press-kit.html" class="curtain-link group py-3 flex items-center justify-between ${isActive('press-kit.html') ? 'text-brand-gold' : ''}">
                        <div class="flex items-center space-x-3">
                            <span class="text-xs font-mono text-brand-gold font-bold">06</span>
                            <span class="text-2xl font-serif font-bold text-white group-hover:text-brand-gold transition-colors">Press Kit & Profile</span>
                        </div>
                        <i class="fa-solid fa-arrow-right text-xs text-white/30 group-hover:text-brand-gold group-hover:translate-x-1 transition-all"></i>
                    </a>
                </div>

                <!-- Footer of Menu -->
                <div class="mt-auto pt-4 shrink-0 flex flex-col space-y-4">
                    <div class="grid grid-cols-2 gap-3">
                        <a href="https://wa.me/919057529067?text=Hi%20Aman%2C%20I%20would%20like%20to%20inquire%20about%20booking%20you%20for%20an%20event." target="_blank" rel="noopener noreferrer" class="btn-whatsapp !py-3.5 !rounded-full w-full flex items-center justify-center space-x-2 text-sm">
                            <i class="fa-brands fa-whatsapp text-lg"></i>
                            <span>WhatsApp</span>
                        </a>
                        <a href="tel:+919057529067" class="btn-gold !py-3.5 !rounded-full w-full flex items-center justify-center space-x-2 text-sm">
                            <i class="fa-solid fa-phone text-xs"></i>
                            <span>Call Desk</span>
                        </a>
                    </div>
                    
                    <div class="flex justify-between items-center border-t border-white/10 pt-4">
                        <div class="flex space-x-5 text-white/50 text-xl">
                            <a href="https://www.instagram.com/anchor_aman_satijaaa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="hover:text-brand-gold transition-colors"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.youtube.com/results?search_query=Anchor+Aman+Satija" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="hover:text-brand-gold transition-colors"><i class="fa-brands fa-youtube"></i></a>
                            <a href="https://wa.me/919057529067" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="hover:text-brand-gold transition-colors"><i class="fa-brands fa-whatsapp"></i></a>
                        </div>
                        <span class="text-[10px] uppercase tracking-[0.2em] text-white/40">Aman Satija &copy; 2026</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Logic
    setTimeout(() => {
        const trigger = header.querySelector('#menu-trigger');
        const nav = header.querySelector('#curtain-nav');
        const closeBtn = header.querySelector('#curtain-close-btn');
        let isOpen = false;

        const toggleMenu = () => {
            isOpen = !isOpen;
            nav.classList.toggle('active');
            trigger.classList.toggle('open');
            document.body.classList.toggle('menu-open', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        };

        trigger.addEventListener('click', toggleMenu);
        if (closeBtn) {
            closeBtn.addEventListener('click', toggleMenu);
        }
        
        // Close on link click
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (isOpen) toggleMenu();
            });
        });

        // Throttled Scroll Effect with rAF & passive
        let scrollTicking = false;
        const onScroll = () => {
            if (window.scrollY > 40) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
            scrollTicking = false;
        };

        window.addEventListener('scroll', () => {
            if (!scrollTicking) {
                requestAnimationFrame(onScroll);
                scrollTicking = true;
            }
        }, { passive: true });
    }, 0);

    return header;
};
