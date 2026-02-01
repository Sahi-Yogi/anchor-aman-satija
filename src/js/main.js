import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

// Common Data
export const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Live Shows', value: '2500+' },
    { label: 'Pan India Presence', value: '100% ' },
];

export const services = [
    { title: 'Wedding Anchoring', desc: 'Making your special day grand & memorable.' },
    { title: 'Corporate Events', desc: 'Professional hosting for awards, conferences & galas.' },
    { title: 'Celebrity Shows', desc: 'High-energy hosting for star-studded events.' },
];

// Initialize Components
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (!app) return;

    // Inject Header & Footer globally if needed, 
    // or each page can import and call them.
    // For simplicity with vanilla JS, we'll assume index.html has a structure.
    
    // Spotlight Effect logic
    const handleSpotlight = (e) => {
        const spotlights = document.querySelectorAll('.spotlight-container');
        spotlights.forEach(container => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            container.style.setProperty('--x', `${x}px`);
            container.style.setProperty('--y', `${y}px`);
        });
    };
    window.addEventListener('mousemove', handleSpotlight);

    // Custom Cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'custom-cursor-follower';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                let count = 0;
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16);
                
                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        entry.target.innerText = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        entry.target.innerText = target + (entry.target.getAttribute('data-suffix') || '');
                    }
                };
                updateCount();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));

    // Video Lightbox Logic
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    lightboxOverlay.innerHTML = `
        <div class="lightbox-close"><i class="fa-solid fa-xmark"></i></div>
        <div class="lightbox-content">
            <iframe id="lightbox-iframe" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `;
    document.body.appendChild(lightboxOverlay);

    const videoTriggers = document.querySelectorAll('[data-video-id]');
    const lightboxIframe = document.getElementById('lightbox-iframe');
    const closeLightbox = () => {
        lightboxOverlay.classList.remove('active');
        lightboxIframe.src = '';
        document.body.style.overflow = '';
    };

    videoTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const videoId = trigger.getAttribute('data-video-id');
            lightboxIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            lightboxOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay || e.target.closest('.lightbox-close')) {
            closeLightbox();
        }
    });

    // Testimonial Slider Logic
    const testimonialTrack = document.querySelector('.testimonial-track');
    if (testimonialTrack) {
        const slides = Array.from(testimonialTrack.children);
        let currentIndex = 0;
        
        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            testimonialTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        setInterval(nextSlide, 5000); // Auto-slide every 5s
    }

    // Reveal Animation on Scroll
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    // Check if elements are already in viewport on load
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('active');
            }
        });
    }, 100);
});

// App Router / Loader
export const initPage = (contentClass) => {
    document.body.prepend(Header());
    document.body.append(Footer());
};
