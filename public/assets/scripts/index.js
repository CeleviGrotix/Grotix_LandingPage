

// ---------------------
// I18N (INTERNATIONALIZATION)
// ---------------------
let currentLanguage = 'en';

const translatePage = (lang) => {
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            element.textContent = i18n[lang][key];
        }
    });

    localStorage.setItem('grotix-language', lang);
    currentLanguage = lang;
};

// ---------------------
// DOMContentLoaded Initialization
// ---------------------
document.addEventListener('DOMContentLoaded', () => {
    // Init language
    const savedLanguage = localStorage.getItem('grotix-language');
    const browserLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
    const initialLanguage = savedLanguage || browserLanguage;
    translatePage(initialLanguage);

    // Language switcher
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            translatePage(lang);
        });
    });

    // Navigation links
    const allScrollLinks = document.querySelectorAll(
        '.header__nav-link, .btn--text[href^="#"], .footer__link[href^="#"]'
    );

    allScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {

            if (link.classList.contains('header__nav-link')) {
                document.querySelectorAll('.header__nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }

            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({behavior: 'smooth'});
                }
            }
        });
    });
});
