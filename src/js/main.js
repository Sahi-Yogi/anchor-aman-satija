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

    // Spotlight Effect logic (rAF throttled & only if element exists)
    const spotlights = document.querySelectorAll('.spotlight-container');
    if (spotlights.length > 0) {
        let spotlightX = 0;
        let spotlightY = 0;
        let spotlightTicking = false;

        const updateSpotlight = () => {
            spotlights.forEach(container => {
                const rect = container.getBoundingClientRect();
                const x = spotlightX - rect.left;
                const y = spotlightY - rect.top;
                container.style.setProperty('--x', `${x}px`);
                container.style.setProperty('--y', `${y}px`);
            });
            spotlightTicking = false;
        };

        window.addEventListener('mousemove', (e) => {
            spotlightX = e.clientX;
            spotlightY = e.clientY;
            if (!spotlightTicking) {
                requestAnimationFrame(updateSpotlight);
                spotlightTicking = true;
            }
        }, { passive: true });
    }

    // Custom Cursor (Desktop only, GPU transform & rAF)
    if (window.matchMedia('(pointer: fine)').matches) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        const cursorFollower = document.createElement('div');
        cursorFollower.className = 'custom-cursor-follower';
        document.body.appendChild(cursor);
        document.body.appendChild(cursorFollower);

        let mouseX = -100;
        let mouseY = -100;
        let cursorTicking = false;

        const updateCursor = () => {
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
            cursorFollower.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
            cursorTicking = false;
        };

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!cursorTicking) {
                requestAnimationFrame(updateCursor);
                cursorTicking = true;
            }
        }, { passive: true });
    }

    // Stats Counter Animation (requestAnimationFrame easing)
    const statsElements = document.querySelectorAll('.stat-number');
    if (statsElements.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target'), 10);
                    const duration = 2000;
                    const startTime = performance.now();
                    const suffix = entry.target.getAttribute('data-suffix') || '';

                    const step = (now) => {
                        const progress = Math.min((now - startTime) / duration, 1);
                        // Ease out cubic
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        entry.target.innerText = Math.round(target * easeOut) + (progress === 1 ? suffix : '');
                        if (progress < 1) {
                            requestAnimationFrame(step);
                        }
                    };
                    requestAnimationFrame(step);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        statsElements.forEach(stat => statsObserver.observe(stat));
    }

    // Video Lightbox Logic
    const videoTriggers = document.querySelectorAll('[data-video-id]');
    if (videoTriggers.length > 0) {
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.className = 'lightbox-overlay';
        lightboxOverlay.innerHTML = `
            <div class="lightbox-close"><i class="fa-solid fa-xmark"></i></div>
            <div class="lightbox-content">
                <iframe id="lightbox-iframe" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `;
        document.body.appendChild(lightboxOverlay);

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
    }

    // Testimonial Slider Logic
    const testimonialTrack = document.querySelector('.testimonial-track');
    if (testimonialTrack) {
        const slides = Array.from(testimonialTrack.children);
        let currentIndex = 0;
        let intervalId = null;

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            testimonialTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        const startSlider = () => {
            if (!intervalId) {
                intervalId = setInterval(nextSlide, 5000);
            }
        };

        const stopSlider = () => {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        };

        startSlider();

        // Pause when tab is backgrounded
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) stopSlider();
            else startSlider();
        });

        if (testimonialTrack.parentElement) {
            testimonialTrack.parentElement.addEventListener('mouseenter', stopSlider);
            testimonialTrack.parentElement.addEventListener('mouseleave', startSlider);
        }
    }

    // Reveal Animation on Scroll with unobserve for performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Media Scroll Controls (Horizontal Gallery Showcase)
    const mediaContainers = document.querySelectorAll('.media-scroll-container');
    mediaContainers.forEach(container => {
        const track = container.querySelector('.media-scroll-track');
        const prevBtn = container.querySelector('.media-scroll-prev');
        const nextBtn = container.querySelector('.media-scroll-next');
        if (!track) return;

        const getScrollStep = () => {
            const firstItem = track.querySelector('.media-scroll-item');
            return firstItem ? firstItem.getBoundingClientRect().width + 24 : 350;
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
            });
        }
    });

    // Booking Form WhatsApp Integration
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = bookingForm.querySelector('input[type="text"]')?.value || 'Guest';
            const phone = bookingForm.querySelector('input[type="tel"]')?.value || '';
            const eventType = bookingForm.querySelector('select')?.value || 'Event';
            const dateLoc = bookingForm.querySelectorAll('input[type="text"]')[1]?.value || 'TBD';
            const details = bookingForm.querySelector('textarea')?.value || '';

            const message = `*Event Booking Inquiry - Anchor Aman Satija*\n\n` +
                            `👤 *Name:* ${name}\n` +
                            `📞 *Contact:* ${phone}\n` +
                            `🎉 *Event Type:* ${eventType}\n` +
                            `📍 *Date & Location:* ${dateLoc}\n` +
                            `📝 *Details:* ${details || 'Looking for anchor booking details and availability.'}`;

            const waUrl = `https://wa.me/919057529067?text=${encodeURIComponent(message)}`;
            
            // Show feedback
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.innerText;
                submitBtn.innerText = 'Connecting to WhatsApp...';
                submitBtn.classList.add('bg-green-600', 'text-white');
                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.classList.remove('bg-green-600', 'text-white');
                }, 3000);
            }

            window.open(waUrl, '_blank');
        });
    }
});

// App Router / Loader
export const initPage = () => {
    document.body.prepend(Header());
    document.body.append(Footer());
};
