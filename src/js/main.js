import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

// Common Data
export const stats = [
    { label: 'Years of Legacy', value: '14+' },
    { label: 'Live Shows', value: '2500+' },
    { label: 'Pan India Presence', value: '100%' },
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

    // 1. Top Scroll Progress Bar (GPU scaleX via rAF)
    const progressBar = document.getElementById('scroll-progress-bar');
    if (progressBar) {
        let progressTicking = false;
        const updateProgress = () => {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const ratio = docHeight > 0 ? Math.min(Math.max(window.scrollY / docHeight, 0), 1) : 0;
            progressBar.style.transform = `scaleX(${ratio})`;
            progressTicking = false;
        };
        window.addEventListener('scroll', () => {
            if (!progressTicking) {
                requestAnimationFrame(updateProgress);
                progressTicking = true;
            }
        }, { passive: true });
        updateProgress();
    }

    // 2. Custom Cursor (Desktop only, GPU transform & rAF)
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

    // 3. Stats Counter Animation (requestAnimationFrame easing)
    const statsElements = document.querySelectorAll('.stat-number');
    if (statsElements.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target'), 10);
                    const duration = 1800;
                    const startTime = performance.now();
                    const suffix = entry.target.getAttribute('data-suffix') || '';

                    const step = (now) => {
                        const progress = Math.min((now - startTime) / duration, 1);
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

    // 4. Video Lightbox Logic
    const videoTriggers = document.querySelectorAll('[data-video-id]');
    if (videoTriggers.length > 0) {
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.className = 'lightbox-overlay';
        lightboxOverlay.innerHTML = `
            <button type="button" aria-label="Close video player" class="lightbox-close"><i class="fa-solid fa-xmark"></i></button>
            <div class="lightbox-content">
                <iframe id="lightbox-iframe" class="w-full h-full rounded-xl border border-brand-gold/30 shadow-2xl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                if (!videoId) return;
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

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // 5. Photo Portfolio Lightbox Logic ([data-lightbox-src])
    const photoTriggers = Array.from(document.querySelectorAll('[data-lightbox-src]'));
    if (photoTriggers.length > 0) {
        const photoOverlay = document.createElement('div');
        photoOverlay.className = 'photo-lightbox-overlay';
        photoOverlay.innerHTML = `
            <button type="button" aria-label="Close photo preview" class="lightbox-close photo-lightbox-close"><i class="fa-solid fa-xmark"></i></button>
            <div class="max-w-5xl w-full flex flex-col items-center gap-4">
                <div class="relative w-full max-h-[75vh] flex items-center justify-center bg-[#0c0d14] border border-brand-gold/30 rounded-2xl overflow-hidden shadow-2xl">
                    <img id="photo-lightbox-img" src="" alt="" class="max-h-[75vh] w-auto max-w-full object-contain">
                </div>
                <div class="w-full flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0e0f16] border border-white/10 rounded-xl px-5 py-3.5">
                    <div>
                        <span id="photo-lightbox-meta" class="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-bold block"></span>
                        <h4 id="photo-lightbox-title" class="text-white font-serif font-bold text-base sm:text-lg"></h4>
                    </div>
                    <div class="flex items-center gap-3 shrink-0">
                        <button type="button" id="photo-lightbox-prev" aria-label="Previous photo" class="scroll-btn">
                            <i class="fa-solid fa-arrow-left"></i>
                        </button>
                        <button type="button" id="photo-lightbox-next" aria-label="Next photo" class="scroll-btn">
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(photoOverlay);

        const imgEl = document.getElementById('photo-lightbox-img');
        const metaEl = document.getElementById('photo-lightbox-meta');
        const titleEl = document.getElementById('photo-lightbox-title');
        let currentPhotoIndex = 0;

        const showPhoto = (idx) => {
            currentPhotoIndex = (idx + photoTriggers.length) % photoTriggers.length;
            const item = photoTriggers[currentPhotoIndex];
            imgEl.src = item.getAttribute('data-lightbox-src') || '';
            imgEl.alt = item.getAttribute('data-lightbox-title') || 'Anchor Aman Satija';
            metaEl.textContent = item.getAttribute('data-lightbox-meta') || 'Stage Portfolio';
            titleEl.textContent = item.getAttribute('data-lightbox-title') || '';
        };

        const closePhotoModal = () => {
            photoOverlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        photoTriggers.forEach((trigger, idx) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                showPhoto(idx);
                photoOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        document.getElementById('photo-lightbox-prev').addEventListener('click', () => showPhoto(currentPhotoIndex - 1));
        document.getElementById('photo-lightbox-next').addEventListener('click', () => showPhoto(currentPhotoIndex + 1));

        photoOverlay.addEventListener('click', (e) => {
            if (e.target === photoOverlay || e.target.closest('.photo-lightbox-close')) {
                closePhotoModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (!photoOverlay.classList.contains('active')) return;
            if (e.key === 'Escape') closePhotoModal();
            if (e.key === 'ArrowLeft') showPhoto(currentPhotoIndex - 1);
            if (e.key === 'ArrowRight') showPhoto(currentPhotoIndex + 1);
        });
    }

    // 6. Testimonial Slider Logic
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
                intervalId = setInterval(nextSlide, 5500);
            }
        };

        const stopSlider = () => {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        };

        startSlider();

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) stopSlider();
            else startSlider();
        });

        if (testimonialTrack.parentElement) {
            testimonialTrack.parentElement.addEventListener('mouseenter', stopSlider);
            testimonialTrack.parentElement.addEventListener('mouseleave', startSlider);
        }
    }

    // 7. Reveal Animation on Scroll with immediate viewport visibility + failsafe
    const revealElements = Array.from(document.querySelectorAll('.reveal'));
    if (revealElements.length > 0) {
        const revealEl = (el) => el.classList.add('active');

        const observerOptions = {
            threshold: 0.01,
            rootMargin: '60px 0px -10px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
                    revealEl(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight + 60) {
                revealEl(el);
            } else {
                observer.observe(el);
            }
        });

        // Failsafe: ensure scrolled/deep anchor content never remains hidden
        setTimeout(() => {
            revealElements.forEach(el => {
                if (el.getBoundingClientRect().top <= window.innerHeight + 120) {
                    revealEl(el);
                }
            });
        }, 1200);
    }

    // 8. Media Scroll Controls (Horizontal Gallery Showcase)
    document.querySelectorAll('.media-scroll-container').forEach(container => {
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

    // 9. Accessible FAQ Accordion Logic
    document.querySelectorAll('.faq-group').forEach(group => {
        const items = group.querySelectorAll('.faq-item');
        items.forEach(item => {
            const trigger = item.querySelector('.faq-trigger');
            if (!trigger) return;

            trigger.addEventListener('click', () => {
                const wasOpen = item.classList.contains('is-open');
                items.forEach(other => {
                    other.classList.remove('is-open');
                    const otherTrigger = other.querySelector('.faq-trigger');
                    if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
                });
                if (!wasOpen) {
                    item.classList.add('is-open');
                    trigger.setAttribute('aria-expanded', 'true');
                }
            });
        });
    });

    // 10. Category Filter System ([data-filter-group])
    document.querySelectorAll('[data-filter-group]').forEach(container => {
        const buttons = container.querySelectorAll('[data-filter-value]');
        const targetId = container.getAttribute('data-filter-group');
        const grid = document.getElementById(targetId);
        if (!grid) return;

        const items = grid.querySelectorAll('[data-category]');
        const countEl = container.querySelector('[data-filter-count]');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const value = btn.getAttribute('data-filter-value');
                buttons.forEach(b => b.classList.remove('is-active'));
                btn.classList.add('is-active');

                let visibleCount = 0;
                items.forEach(item => {
                    const cats = (item.getAttribute('data-category') || '').split(/\s+/);
                    const match = value === 'all' || cats.includes(value);
                    item.style.display = match ? '' : 'none';
                    if (match) {
                        visibleCount++;
                        item.classList.add('active');
                    }
                });

                if (countEl) {
                    countEl.textContent = `${visibleCount} ${visibleCount === 1 ? 'Item' : 'Items'}`;
                }
            });
        });
    });

    // 11. Interactive Stage Pillars Switcher ([data-pillar-group])
    document.querySelectorAll('[data-pillar-group]').forEach(group => {
        const tabs = group.querySelectorAll('[data-pillar-tab]');
        const panels = group.querySelectorAll('[data-pillar-panel]');

        tabs.forEach(tab => {
            const activate = () => {
                const id = tab.getAttribute('data-pillar-tab');
                tabs.forEach(t => t.classList.remove('is-active'));
                tab.classList.add('is-active');
                panels.forEach(p => {
                    if (p.getAttribute('data-pillar-panel') === id) {
                        p.classList.remove('hidden');
                    } else {
                        p.classList.add('hidden');
                    }
                });
            };
            tab.addEventListener('click', activate);
        });
    });

    // 12. Copy-to-Clipboard Action Buttons ([data-copy-target])
    document.querySelectorAll('[data-copy-target]').forEach(btn => {
        btn.addEventListener('click', async () => {
            const targetId = btn.getAttribute('data-copy-target');
            const sourceEl = document.getElementById(targetId);
            if (!sourceEl) return;

            const textToCopy = sourceEl.innerText.trim();
            try {
                await navigator.clipboard.writeText(textToCopy);
                const labelEl = btn.querySelector('.copy-label') || btn;
                const originalText = labelEl.textContent;
                labelEl.textContent = 'Copied to Clipboard';
                btn.classList.add('!bg-emerald-500', '!text-white', '!border-emerald-400');
                setTimeout(() => {
                    labelEl.textContent = originalText;
                    btn.classList.remove('!bg-emerald-500', '!text-white', '!border-emerald-400');
                }, 2200);
            } catch {
                // Fallback prompt if clipboard permission blocked
                window.prompt('Copy the text below:', textToCopy);
            }
        });
    });

    // 13. Enhanced Booking Form WhatsApp Integration
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = bookingForm.querySelector('#booking-name')?.value.trim() || bookingForm.querySelector('input[type="text"]')?.value.trim() || 'Guest';
            const phone = bookingForm.querySelector('#booking-phone')?.value.trim() || bookingForm.querySelector('input[type="tel"]')?.value.trim() || '';
            const company = bookingForm.querySelector('#booking-org')?.value.trim() || 'Private Family / Individual';
            const email = bookingForm.querySelector('#booking-email')?.value.trim() || 'Not provided';
            const eventType = bookingForm.querySelector('#booking-type')?.value || bookingForm.querySelector('select')?.value || 'Event';
            const dateLoc = bookingForm.querySelector('#booking-date')?.value.trim() || bookingForm.querySelectorAll('input[type="text"]')[1]?.value.trim() || 'Flexible / TBD';
            const city = bookingForm.querySelector('#booking-city')?.value.trim() || 'India / Destination';
            const crowd = bookingForm.querySelector('#booking-crowd')?.value || 'To be discussed';
            const langBoxes = Array.from(bookingForm.querySelectorAll('input[name="languages"]:checked')).map(cb => cb.value);
            const languages = langBoxes.length > 0 ? langBoxes.join(', ') : 'Hindi / English (Default)';
            const details = bookingForm.querySelector('#booking-details')?.value.trim() || bookingForm.querySelector('textarea')?.value.trim() || 'Looking for Anchor Aman Satija availability & custom quotation.';

            const message = `*New Booking Enquiry — Anchor Aman Satija*\n\n` +
                            `👤 *Name:* ${name}\n` +
                            `🏛️ *Family / Company:* ${company}\n` +
                            `📞 *Phone / WhatsApp:* ${phone}\n` +
                            `✉️ *Email:* ${email}\n` +
                            `🎉 *Event Type:* ${eventType}\n` +
                            `📅 *Date:* ${dateLoc}\n` +
                            `📍 *City & Venue:* ${city}\n` +
                            `👥 *Expected Guests:* ${crowd}\n` +
                            `🗣️ *Languages:* ${languages}\n` +
                            `📝 *Notes:* ${details}`;

            const waUrl = `https://wa.me/919057529067?text=${encodeURIComponent(message)}`;

            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const statusBox = document.getElementById('booking-form-status');
            if (submitBtn) {
                const label = submitBtn.querySelector('span');
                const orig = label ? label.innerText : submitBtn.innerText;
                if (label) label.innerText = 'Opening WhatsApp Desk...';
                setTimeout(() => {
                    if (label) label.innerText = orig;
                }, 3000);
            }

            if (statusBox) {
                statusBox.classList.remove('hidden');
                const fallbackLink = statusBox.querySelector('#booking-wa-fallback');
                if (fallbackLink) fallbackLink.href = waUrl;
            }

            window.open(waUrl, '_blank', 'noopener,noreferrer');
        });
    }

    // 14. Review Submission Form on Testimonials Page
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) {
        let selectedRating = '5';
        const ratingBtns = reviewForm.querySelectorAll('[data-star-value]');
        const ratingInput = reviewForm.querySelector('#review-rating');

        const paintStars = (val) => {
            ratingBtns.forEach(b => {
                const v = parseInt(b.getAttribute('data-star-value'), 10);
                if (v <= parseInt(val, 10)) {
                    b.classList.add('text-brand-gold', 'border-brand-gold', 'bg-brand-gold/15');
                    b.classList.remove('text-white/40', 'border-white/10');
                } else {
                    b.classList.remove('text-brand-gold', 'border-brand-gold', 'bg-brand-gold/15');
                    b.classList.add('text-white/40', 'border-white/10');
                }
            });
        };

        paintStars(selectedRating);
        ratingBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                selectedRating = btn.getAttribute('data-star-value') || '5';
                if (ratingInput) ratingInput.value = selectedRating;
                paintStars(selectedRating);
            });
        });

        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const rName = reviewForm.querySelector('#review-name')?.value.trim() || 'Client';
            const rOccasion = reviewForm.querySelector('#review-occasion')?.value.trim() || 'Event Celebration';
            const rCity = reviewForm.querySelector('#review-city')?.value.trim() || 'India';
            const rText = reviewForm.querySelector('#review-text')?.value.trim() || '';

            const msg = `*Verified Client Testimonial Submission*\n\n` +
                        `⭐ *Rating:* ${selectedRating}/5 Stars\n` +
                        `👤 *Name:* ${rName}\n` +
                        `🎊 *Occasion:* ${rOccasion} (${rCity})\n` +
                        `💬 *Review:* "${rText}"`;

            const waUrl = `https://wa.me/919057529067?text=${encodeURIComponent(msg)}`;
            const note = document.getElementById('review-submit-note');
            if (note) note.classList.remove('hidden');
            window.open(waUrl, '_blank', 'noopener,noreferrer');
        });
    }
});

// App Router / Loader
export const initPage = () => {
    document.body.prepend(Header());
    document.body.append(Footer());
};
