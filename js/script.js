// Loading Screen
window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 2000);
});

// Menu Toggle
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Inisialisasi Marquee dengan JavaScript
function initMarquee() {
    const marquee = document.getElementById('marquee');
    const content = marquee.querySelector('.marquee-content');
    const originalContent = content.innerHTML;
    
    // Duplikasi konten untuk looping mulus
    content.innerHTML += originalContent + originalContent;
    
    const items = marquee.querySelectorAll('.marquee-item');
    const totalWidth = Array.from(items).reduce((sum, item) => {
        return sum + item.offsetWidth + 30; // 30 untuk margin
    }, 0);
    
    let position = 0;
    const speed = 1; // px per frame (sesuaikan kecepatan)
    
    function animateMarquee() {
        position -= speed;
        
        // Reset posisi ketika sudah melewati satu set konten
        if (position <= -totalWidth / 3) {
            position = 0;
        }
        
        content.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animateMarquee);
    }
    
    // Pause on hover
    marquee.addEventListener('mouseenter', () => {
        speedBackup = speed;
        speed = 0;
    });
    
    marquee.addEventListener('mouseleave', () => {
        speed = speedBackup;
    });
    
    animateMarquee();
}

// Panggil fungsi setelah halaman dimuat
document.addEventListener('DOMContentLoaded', initMarquee);

// Smooth Scroll
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    const navMenu = document.getElementById('navMenu');
                    if (navMenu) {
                        navMenu.classList.remove('active');
                    }
                }
            }
        });
    });
});