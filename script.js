// Translator EN/BG
// Track current language
let currentLang = 'en';
// Function to translate the page
function translatePage(lang) {
    const elements = document.querySelectorAll('[data-en][data-bg]');
    elements.forEach(el => {
        el.textContent = lang === 'bg' ? el.dataset.bg : el.dataset.en;
    });
}
// Handle button click
const translateBtn = document.getElementById('translateBtn');
translateBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'bg' : 'en';
    translatePage(currentLang);
    // Update button text
    translateBtn.textContent = currentLang === 'en' ? 'BG' : 'EN';
});
