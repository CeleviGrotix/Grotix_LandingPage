/**
 * GROTIX - Main JavaScript
 * startup: Celevi
 * features: i18n, Smooth Scroll, Intersection Observer, EmailJS & Help Search
 */

// ---------------------
// 1. I18N (INTERNATIONALIZATION)
// ---------------------
let currentLanguage = 'en';

const translatePage = (lang) => {
    // Actualizar estado de los botones
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;

    // Traducir elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (typeof i18n !== 'undefined' && i18n[lang] && i18n[lang][key]) {
            element.textContent = i18n[lang][key];
        }
    });

    // Traducir placeholders
    document.querySelectorAll('[data-placeholder-i18n]').forEach(element => {
        const key = element.getAttribute('data-placeholder-i18n');
        if (typeof i18n !== 'undefined' && i18n[lang] && i18n[lang][key]) {
            element.setAttribute('placeholder', i18n[lang][key]);
        }
    });

    localStorage.setItem('grotix-language', lang);
    currentLanguage = lang;
};

// ---------------------
// 2. DOM CONTENT LOADED
// ---------------------
document.addEventListener('DOMContentLoaded', () => {

    // --- INITIALIZE LANGUAGE ---
    const savedLanguage = localStorage.getItem('grotix-language');
    const browserLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
    const initialLanguage = savedLanguage || browserLanguage;
    translatePage(initialLanguage);

    // --- LANGUAGE SWITCHER EVENT ---
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            translatePage(btn.dataset.lang);
        });
    });

    // --- SMOOTH SCROLL & NAV LINKS ---
    const allScrollLinks = document.querySelectorAll(
        '.header__nav-link, .btn--text[href^="#"], .footer__link[href^="#"], .btn-solid[href^="#"]'
    );

    allScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Si el link es un ancla en la misma página
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
            // Si viene de otra página (ej: help.html -> index.html#contact)
            else if (href.includes('#') && window.location.pathname.includes(href.split('#')[0])) {
                e.preventDefault();
                const targetId = '#' + href.split('#')[1];
                const target = document.querySelector(targetId);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- HAMBURGER MENU ---
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.header__nav');

    // Crea el overlay dinámicamente
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    const openMenu = () => {
        hamburger.classList.add('open');
        nav.classList.add('open');
        overlay.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        overlay.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', () => {
        hamburger.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Cierra al hacer click en overlay
    overlay.addEventListener('click', closeMenu);

    // Cierra al hacer click en un link del nav
    document.querySelectorAll('.header__nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cierra al presionar Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // --- ACTIVE NAV LINK (OBSERVER) ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.header__nav-link');

    const observerOptions = { root: null, threshold: 0.5 };
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href');
                    if (href.includes(entry.target.id)) link.classList.add('active');
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    // --- HELP CENTER SEARCH (Filter Cards) ---
    const searchInput = document.getElementById('helpSearch');
    const cards = document.querySelectorAll('#topicCards .help-card');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const q = searchInput.value.toLowerCase().trim();
            cards.forEach(card => {
                const tags = (card.dataset.tags || '').toLowerCase();
                const title = card.querySelector('.help-card__title')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('.help-card__desc')?.textContent.toLowerCase() || '';

                const match = !q || tags.includes(q) || title.includes(q) || desc.includes(q);
                card.classList.toggle('hidden', !match);
            });
        });
    }

    // --- EMAILJS INTEGRATION WITH VALIDATION ---
    if (typeof emailjs !== 'undefined') {
        emailjs.init("jQdfs7rmrZ5zzAZTr");
    }

    const contactForm = document.getElementById('contactForm');
    const contactSendBtn = document.getElementById('contactSendBtn');
    const contactStatus = document.getElementById('contactStatus');

    const showContactStatus = (type, msg) => {
        contactStatus.className = 'form-status ' + type;
        contactStatus.innerHTML = type === 'success'
            ? `<i class="fas fa-check-circle"></i> ${msg}`
            : `<i class="fas fa-exclamation-circle"></i> ${msg}`;
        contactStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const t = (typeof i18n !== 'undefined') ? i18n[currentLanguage] : {};
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            const name    = contactForm.name.value.trim();
            const email   = contactForm.email.value.trim();
            const subject = contactForm.subject.value.trim();
            const message = contactForm.message.value.trim();

            if (!name || !email || !subject || !message) {
                showContactStatus('error', t['contact.form.validation.required'] || 'Please fill in all required fields.');
                return;
            }
            if (!emailRegex.test(email)) {
                showContactStatus('error', t['contact.form.validation.email'] || 'Please enter a valid email address.');
                return;
            }

            const originalText = contactSendBtn.textContent;
            contactSendBtn.textContent = t['contact.form.sending'] || 'SENDING...';
            contactSendBtn.disabled = true;
            contactStatus.className = 'form-status';

            emailjs.sendForm('service_57il3l9', 'template_dbrc03v', contactForm)
                .then(() => {
                    contactSendBtn.textContent = originalText;
                    contactSendBtn.disabled = false;
                    showContactStatus('success', t['contact.form.success'] || 'Message sent!');
                    contactForm.reset();
                }, (err) => {
                    contactSendBtn.textContent = originalText;
                    contactSendBtn.disabled = false;
                    showContactStatus('error', (t['contact.form.error'] || 'Error sending.') + ' (' + JSON.stringify(err) + ')');
                });
        });
    }
});

// ---------------------
// 3. CURSOR GLOW ANIMATION
// ---------------------
document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.contact');
    const glow = section?.querySelector('.cursor-glow');

    if (!section || !glow) return;

    let x = 0, y = 0;
    let currentX = 0, currentY = 0;

    section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    });

    function animate() {
        // Interpolación para suavizar el movimiento (Lerp)
        currentX += (x - currentX) * 0.1;
        currentY += (y - currentY) * 0.1;

        glow.style.left = `${currentX}px`;
        glow.style.top = `${currentY}px`;

        requestAnimationFrame(animate);
    }
    animate();
});