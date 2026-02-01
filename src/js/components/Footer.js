export const Footer = () => {
    const footer = document.createElement('footer');
    footer.className = 'bg-[#080808] border-t border-white/5 pt-24 pb-12 relative overflow-hidden';
    
    footer.innerHTML = `
        <!-- Design Glow -->
        <div class="footer-glow"></div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
                <!-- Branding & Mission -->
                <div class="lg:col-span-2 space-y-10">
                    <a href="index.html" class="inline-block group">
                        <img src="src/assets/images/Anchor-Aman-Satija-logo.png" alt="Aman Satija Logo" class="h-16 md:h-24 w-auto group-hover:scale-105 transition-transform duration-500">
                    </a>
                    <p class="text-white/40 text-xl leading-relaxed max-w-lg font-serif italic">
                        "Your stage, my voice—creating moments that echo forever."
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://www.instagram.com/anchor_aman_satija/" target="_blank" class="footer-icon-btn group">
                            <i class="fa-brands fa-instagram text-lg group-hover:scale-110"></i>
                        </a>
                        <a href="#" class="footer-icon-btn group">
                            <i class="fa-brands fa-youtube text-lg group-hover:scale-110"></i>
                        </a>
                        <a href="#" class="footer-icon-btn group">
                            <i class="fa-brands fa-facebook-f text-lg group-hover:scale-110"></i>
                        </a>
                        <a href="#" class="footer-icon-btn group">
                            <i class="fa-brands fa-linkedin-in text-lg group-hover:scale-110"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Navigation -->
                <div>
                    <h4 class="footer-heading">Quick Access</h4>
                    <ul class="space-y-4">
                        <li><a href="index.html" class="footer-link"><span>Home Story</span><i class="fa-solid fa-arrow-right-long text-[10px]"></i></a></li>
                        <li><a href="about.html" class="footer-link"><span>About Aman</span><i class="fa-solid fa-arrow-right-long text-[10px]"></i></a></li>
                        <li><a href="gallery.html" class="footer-link"><span>Gallery</span><i class="fa-solid fa-arrow-right-long text-[10px]"></i></a></li>
                        <li><a href="testimonials.html" class="footer-link"><span>Client Stories</span><i class="fa-solid fa-arrow-right-long text-[10px]"></i></a></li>
                        <li><a href="press-kit.html" class="footer-link"><span>Press & Media</span><i class="fa-solid fa-arrow-right-long text-[10px]"></i></a></li>
                    </ul>
                </div>
                
                <!-- Contact Channel -->
                <div>
                    <h4 class="footer-heading">Inquiry Desk</h4>
                    <ul class="space-y-8">
                        <li>
                            <span class="block text-brand-gold/40 text-[10px] uppercase tracking-[0.3em] mb-2">Direct Line</span>
                            <a href="tel:+91XXXXXXXXXX" class="text-white/90 hover:text-brand-gold transition-colors text-xl font-serif">+91 98XXX XXXXX</a>
                        </li>
                        <li>
                            <span class="block text-brand-gold/40 text-[10px] uppercase tracking-[0.3em] mb-2">Email Address</span>
                            <a href="mailto:info@amansatija.com" class="text-white/90 hover:text-brand-gold transition-colors text-lg italic">info@amansatija.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Bottom Copyright -->
            <div class="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase">
                <p>&copy; 2024 AMAN SATIJA ENTERTAINMENT. CREATING MAGIC SINCE 2014.</p>
                <div class="mt-8 md:mt-0 flex space-x-12">
                    <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>

        <!-- Back to Top Button -->
        <button id="back-to-top" class="back-to-top">
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    `;

    // Back to top logic
    setTimeout(() => {
        const btn = footer.querySelector('#back-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 800) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        });
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }, 100);
    
    return footer;
};
