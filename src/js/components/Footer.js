export const Footer = () => {
    const footer = document.createElement('footer');
    footer.className = 'bg-[#050505] border-t border-white/10 pt-20 pb-12 relative overflow-hidden';
    
    footer.innerHTML = `
        <!-- Design Glow -->
        <div class="footer-glow"></div>

        <div class="container mx-auto px-6 relative z-10">
            <!-- Top Action Strip -->
            <div class="bg-[#0e0f16] border border-brand-gold/30 rounded-2xl p-8 md:p-12 mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span class="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold block mb-2">Direct Inquiries Open</span>
                    <h3 class="text-2xl md:text-3xl font-serif font-bold text-white">Planning a Wedding or Corporate Gala?</h3>
                    <p class="text-white/60 text-sm mt-1">Check availability, dates & get an instant custom quote on WhatsApp.</p>
                </div>
                <div class="flex flex-wrap gap-4 w-full md:w-auto">
                    <a href="https://wa.me/919057529067?text=Hi%20Aman%2C%20I%20would%20like%20to%20inquire%20about%20booking%20you%20for%20an%20event." target="_blank" rel="noopener noreferrer" class="btn-whatsapp flex-1 md:flex-initial flex items-center justify-center gap-2 text-sm">
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                        <span>WhatsApp (+91 90575 29067)</span>
                    </a>
                    <a href="tel:+919057529067" class="btn-outline flex-1 md:flex-initial flex items-center justify-center gap-2 text-sm">
                        <i class="fa-solid fa-phone text-xs"></i>
                        <span>Call Management</span>
                    </a>
                </div>
            </div>

            <!-- Main Footer 4-Column Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
                <!-- Col 1: Brand & Identity -->
                <div class="space-y-6">
                    <a href="index.html" class="flex items-center space-x-4 group">
                        <img src="src/assets/images/Aman-Satija-Anchor-Emblem-logo.webp" alt="Anchor Aman Satija" width="80" height="80" loading="lazy" decoding="async" class="h-16 md:h-20 w-16 md:w-20 object-cover rounded-full group-hover:scale-105 transition-transform duration-500 shadow-2xl border border-brand-gold/30">
                        <div class="flex flex-col">
                            <span class="text-lg md:text-xl font-serif font-black tracking-tight text-white group-hover:text-brand-gold transition-colors">AMAN SATIJA</span>
                            <span class="text-[10px] uppercase font-bold tracking-[0.22em] text-brand-gold">Tiger of Alwar &bull; Royal Emcee</span>
                        </div>
                    </a>
                    <p class="text-white/50 text-sm leading-relaxed font-serif italic">
                        "Your stage, my voice—creating memories that echo forever."
                    </p>
                    <div class="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 px-3 py-1.5 rounded-full text-[11px] text-brand-gold font-bold uppercase tracking-wider">
                        <i class="fa-solid fa-star text-xs"></i>
                        <span>5.0 Rated Stage Emcee</span>
                    </div>
                    <div class="flex space-x-3 pt-2">
                        <a href="https://www.instagram.com/anchor_aman_satijaaa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @anchor_aman_satijaaa" class="footer-icon-btn group">
                            <i class="fa-brands fa-instagram text-lg group-hover:scale-110"></i>
                        </a>
                        <a href="https://wa.me/919057529067" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="footer-icon-btn group">
                            <i class="fa-brands fa-whatsapp text-lg group-hover:scale-110"></i>
                        </a>
                        <a href="https://www.youtube.com/results?search_query=Anchor+Aman+Satija" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="footer-icon-btn group">
                            <i class="fa-brands fa-youtube text-lg group-hover:scale-110"></i>
                        </a>
                        <a href="tel:+919057529067" aria-label="Phone" class="footer-icon-btn group">
                            <i class="fa-solid fa-phone text-sm group-hover:scale-110"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Col 2: Quick Navigation -->
                <div>
                    <h4 class="footer-heading">Navigation</h4>
                    <ul class="space-y-3.5 text-sm">
                        <li><a href="index.html" class="footer-link"><span>Home Story</span><i class="fa-solid fa-arrow-right-long text-[10px]"></i></a></li>
                        <li><a href="about.html" class="footer-link"><span>About Aman</span><i class="fa-solid fa-arrow-right-long text-[10px]"></i></a></li>
                        <li><a href="services.html" class="footer-link"><span>Services & Packages</span><i class="fa-solid fa-arrow-right-long text-[10px]"></i></a></li>
                        <li><a href="gallery.html" class="footer-link"><span>Gallery & Reels</span><i class="fa-solid fa-arrow-right-long text-[10px]"></i></a></li>
                        <li><a href="testimonials.html" class="footer-link"><span>Client Reviews (5.0★)</span><i class="fa-solid fa-arrow-right-long text-[10px]"></i></a></li>
                        <li><a href="press-kit.html" class="footer-link"><span>Press Kit & Rider</span><i class="fa-solid fa-arrow-right-long text-[10px]"></i></a></li>
                    </ul>
                </div>
                
                <!-- Col 3: Key Offerings -->
                <div>
                    <h4 class="footer-heading">Specialties</h4>
                    <ul class="space-y-3 text-sm text-white/60">
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-gold text-xs"></i><span>Destination Wedding Anchoring</span></li>
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-gold text-xs"></i><span>Interactive Couple Sangeet Games</span></li>
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-gold text-xs"></i><span>Corporate Leadership Galas & AGMs</span></li>
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-gold text-xs"></i><span>Celebrity Star Shows & Concerts</span></li>
                        <li class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-gold text-xs"></i><span>Royal Varmala Entry Concepts</span></li>
                    </ul>
                </div>

                <!-- Col 4: Direct Desk -->
                <div>
                    <h4 class="footer-heading">Direct Desk</h4>
                    <ul class="space-y-4 text-sm">
                        <li>
                            <span class="block text-brand-gold/60 text-[10px] uppercase tracking-[0.2em] mb-1">Primary Booking Line</span>
                            <a href="tel:+919057529067" class="text-white/90 hover:text-brand-gold transition-colors text-lg font-serif font-bold">+91 90575 29067</a>
                        </li>
                        <li>
                            <span class="block text-brand-gold/60 text-[10px] uppercase tracking-[0.2em] mb-1">Secondary / WhatsApp Line</span>
                            <a href="https://wa.me/918239202921" target="_blank" rel="noopener noreferrer" class="text-white/90 hover:text-brand-gold transition-colors text-base font-serif">+91 82392 02921</a>
                        </li>
                        <li>
                            <span class="block text-brand-gold/60 text-[10px] uppercase tracking-[0.2em] mb-1">Official Email</span>
                            <a href="mailto:info@amansatija.com" class="text-white/80 hover:text-brand-gold transition-colors text-sm font-mono">info@amansatija.com</a>
                        </li>
                        <li>
                            <span class="block text-brand-gold/60 text-[10px] uppercase tracking-[0.2em] mb-1">Headquarters</span>
                            <p class="text-white/70 text-xs">Alwar & Jaipur, Rajasthan • Serving Pan-India & Global</p>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Cities & Destination Footprint Strip -->
            <div class="border-t border-white/10 py-5 mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-white/45">
                <span class="text-brand-gold font-bold shrink-0"><i class="fa-solid fa-plane-departure mr-1.5"></i>Destinations Hosted:</span>
                <span class="leading-relaxed sm:text-right">Alwar &bull; Jaipur &bull; Udaipur &bull; Jodhpur &bull; Jaisalmer &bull; Pushkar &bull; Delhi-NCR &bull; Chandigarh &bull; Mumbai &bull; Goa &bull; Dubai</span>
            </div>
            
            <!-- Bottom Copyright & Social Strip -->
            <div class="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center text-white/35 text-[11px] font-semibold tracking-wider">
                <p>&copy; 2026 AMAN SATIJA ENTERTAINMENT • ALL RIGHTS RESERVED.</p>
                <div class="mt-4 md:mt-0 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <a href="https://www.instagram.com/anchor_aman_satijaaa/" target="_blank" rel="noopener noreferrer" class="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                        <i class="fa-brands fa-instagram text-brand-gold"></i>
                        <span>@anchor_aman_satijaaa</span>
                    </a>
                    <span>•</span>
                    <a href="index.html#faqs" class="hover:text-white transition-colors">Booking FAQs</a>
                    <span>•</span>
                    <a href="press-kit.html#rider" class="hover:text-white transition-colors">Tech Rider</a>
                    <span>•</span>
                    <a href="contact.html" class="hover:text-white transition-colors">Check Dates</a>
                </div>
            </div>
        </div>

        <!-- Back to Top Button -->
        <button id="back-to-top" aria-label="Back to top" class="back-to-top">
            <i class="fa-solid fa-arrow-up"></i>
        </button>

        <!-- Floating WhatsApp Widget -->
        <a href="https://wa.me/919057529067?text=Hi%20Aman%2C%20I%20would%20like%20to%20inquire%20about%20booking%20you%20for%20an%20event." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="whatsapp-float">
            <i class="fa-brands fa-whatsapp"></i>
            <span>Chat on WhatsApp</span>
        </a>
    `;

    // Back to top logic with throttled passive scroll listener
    setTimeout(() => {
        const btn = footer.querySelector('#back-to-top');
        if (!btn) return;

        let scrollTicking = false;
        const onScroll = () => {
            if (window.scrollY > 800) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
            scrollTicking = false;
        };

        window.addEventListener('scroll', () => {
            if (!scrollTicking) {
                requestAnimationFrame(onScroll);
                scrollTicking = true;
            }
        }, { passive: true });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }, 100);
    
    return footer;
};
