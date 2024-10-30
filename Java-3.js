document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            } else {
                entry.target.classList.remove('visivel');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleThemeButton = document.createElement('button');
    toggleThemeButton.className = 'toggle-theme';
    
    const bolinha = document.createElement('span');
    bolinha.className = 'bolinha';
    toggleThemeButton.appendChild(bolinha);
    
    document.body.appendChild(toggleThemeButton);

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleThemeButton.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
        toggleThemeButton.classList.add('light-mode');
    }

    toggleThemeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
