
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('lang-toggle');
    let isCz = true;
    toggleBtn.addEventListener('click', () => {
        document.querySelectorAll('.lang-cz').forEach(el => el.classList.toggle('hidden'));
        document.querySelectorAll('.lang-en').forEach(el => el.classList.toggle('hidden'));
        isCz = !isCz;
        toggleBtn.textContent = isCz ? 'EN' : 'CZ';
    });
});
