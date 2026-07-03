/* ==========================================================================
   PAGASKA — app.js
   Router SPA + semua fitur (menu, marquee, struktur organisasi, prestasi)
   ========================================================================== */

/* ---------- Loading Screen ---------- */
window.addEventListener('load', function () {
    setTimeout(function () {
        var loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            setTimeout(function () {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 1200);
});

/* ---------- Menu Toggle (mobile) ---------- */
function toggleMenu() {
    var navMenu = document.getElementById('navMenu');
    var navOverlay = document.getElementById('navOverlay');
    var toggleBtn = document.getElementById('menuToggle');
    if (!navMenu) return;

    var isOpen = navMenu.classList.toggle('active');
    if (navOverlay) navOverlay.classList.toggle('active', isOpen);
    if (toggleBtn) toggleBtn.classList.toggle('active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
}

function closeMenu() {
    var navMenu = document.getElementById('navMenu');
    var navOverlay = document.getElementById('navOverlay');
    var toggleBtn = document.getElementById('menuToggle');
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        if (toggleBtn) toggleBtn.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}

/* ---------- Marquee ---------- */
function initMarquee() {
    var marquee = document.getElementById('marquee');
    if (!marquee) return;
    var content = marquee.querySelector('.marquee-content');
    var originalContent = content.innerHTML;

    content.innerHTML += originalContent + originalContent;

    var position = 0;
    var speed = 1;
    var speedBackup = speed;

    function animateMarquee() {
        position -= speed;
        var totalWidth = content.scrollWidth / 3;
        if (position <= -totalWidth) {
            position = 0;
        }
        content.style.transform = 'translateX(' + position + 'px)';
        requestAnimationFrame(animateMarquee);
    }

    marquee.addEventListener('mouseenter', function () {
        speedBackup = speed;
        speed = 0;
    });
    marquee.addEventListener('mouseleave', function () {
        speed = speedBackup;
    });

    animateMarquee();
}

/* ==========================================================================
   ROUTER (SPA — satu halaman, semua route via hash)
   ========================================================================== */
var VALID_ROUTES = ['home', 'project', 'about', 'history', 'structure', 'achievements'];
var DEFAULT_ROUTE = 'home';

var ROUTE_TITLES = {
    home: 'PAGASKA — Paskibra Gala Taksaka',
    project: 'Beranda — Portal PAGASKA',
    about: 'Tentang — PAGASKA',
    history: 'Sejarah — PAGASKA',
    structure: 'Struktur Organisasi — PAGASKA',
    achievements: 'Prestasi — PAGASKA'
};

function getRouteFromHash() {
    var hash = window.location.hash.replace(/^#\/?/, '');
    return VALID_ROUTES.indexOf(hash) !== -1 ? hash : DEFAULT_ROUTE;
}

function renderRoute() {
    var route = getRouteFromHash();

    document.querySelectorAll('.route').forEach(function (section) {
        section.classList.toggle('is-active', section.dataset.route === route);
    });

    document.querySelectorAll('[data-route-link]').forEach(function (link) {
        var linkRoute = link.getAttribute('data-route-link').replace(/^#\/?/, '');
        link.classList.toggle('active', linkRoute === route);
    });

    if (ROUTE_TITLES[route]) {
        document.title = ROUTE_TITLES[route];
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
    closeMenu();
}

function initRouter() {
    if (!window.location.hash) {
        window.location.hash = '#/' + DEFAULT_ROUTE;
    }
    renderRoute();
    window.addEventListener('hashchange', renderRoute);
}

/* ---------- Smooth scroll untuk anchor internal non-route (mis. #about-detail) ---------- */
document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href || href === '#' || href.startsWith('#/')) return; // handled by router
    var target = document.querySelector(href);
    if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

/* ==========================================================================
   STRUKTUR ORGANISASI
   ========================================================================== */
function showGen(gen) {
    document.querySelectorAll('.org-content').forEach(function (content) {
        content.classList.remove('active');
    });
    document.querySelectorAll('.org-tab').forEach(function (tab) {
        tab.classList.remove('active');
    });

    var selectedContent = document.getElementById('gen' + gen);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }

    document.querySelectorAll('.more-structure').forEach(function (el) {
        el.style.display = 'none';
    });

    var btn = document.querySelector('#route-structure .toggle-btn');
    if (btn) {
        btn.innerText = 'Tampilkan Selengkapnya';
    }
}

function toggleCurrentGen() {
    var activeGen = document.querySelector('.org-content.active');
    if (!activeGen) return;

    var genId = activeGen.id;
    var genNumber = genId.replace('gen', '');
    var moreId = 'moreGen' + genNumber;
    var btn = document.querySelector('#route-structure .toggle-btn');
    var el = document.getElementById(moreId);

    if (el) {
        if (el.style.display === 'block') {
            el.style.display = 'none';
            if (btn) btn.innerText = 'Tampilkan Selengkapnya';
        } else {
            el.style.display = 'block';
            if (btn) btn.innerText = 'Sembunyikan';
        }
    }
}

function openMemberLightbox(el) {
    var jabatan = el.closest('.org-card').querySelector('h4').textContent;
    var content =
        '<div style="text-align: center; padding: 20px;">' +
        '<img src="' + el.src + '" alt="' + el.dataset.nama + '" ' +
        'style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 20px;">' +
        '<h3 style="color: var(--secondary, var(--ink)); margin-bottom: 10px;">' + el.dataset.nama + '</h3>' +
        '<div style="text-align: left; margin-top: 20px;">' +
        '<p><strong>Jabatan:</strong> ' + jabatan + '</p>' +
        '<p><strong>TTL:</strong> ' + el.dataset.ttl + '</p>' +
        '<p><strong>Sosial Media:</strong> ' + el.dataset.sosmed + '</p>' +
        '</div></div>';

    var lightbox = document.createElement('div');
    lightbox.style.cssText =
        'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9);' +
        'display: flex; justify-content: center; align-items: center; z-index: 99999; padding: 1.5rem;';

    lightbox.innerHTML =
        '<div style="background: white; padding: 30px; border-radius: 10px; max-width: 400px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative;">' +
        '<button onclick="this.parentElement.parentElement.remove()" ' +
        'style="position: absolute; top: 10px; right: 10px; background: var(--primary, var(--crimson)); color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer;">×</button>' +
        content + '</div>';

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) lightbox.remove();
    });

    document.body.appendChild(lightbox);
}

/* ==========================================================================
   PRESTASI (ACHIEVEMENTS)
   ========================================================================== */
var galleries = {
    gallery0: [
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pemb.jpg", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pemb1.jpg", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pendidikan.jpg", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pend2.jpg", alt: "Dokumentasi" },
    ],
    gallery1: [
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/baratayudafb.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtydpen.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtyddp.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_5855.JPG", alt: "Dokumentasi" },
    ],
    gallery2: [
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/baratayudafb.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtydpen.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtyddp.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_5855.JPG", alt: "Dokumentasi" },
    ],
    gallery3: [
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/parjafb.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/penampilan.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_0651.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_0674.JPG", alt: "Dokumentasi" },
    ],
    gallery4: [
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/baratayudafb.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtydpen.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtyddp.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_5855.JPG", alt: "Dokumentasi" },
    ],
    gallery5: [
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_6865.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtydpen.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_7080.JPG", alt: "Dokumentasi" },
        { src: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_7028.JPG", alt: "Dokumentasi" },
    ],
};

var prestasiData = {
    prestasi0: {
        title: "PASUKAN PENGIBAR BENDERA 2023 - Detail Lengkap",
        mainImage: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/fotbarppi.jpg",
        text: "<p>Selamat &amp; Sukses Atas keberhasilannya menjadi anggota Pasukan Pengibar Bendera Kota Madiun Tahun 2023.</p><ul><li><strong>Nama Kategori:</strong> Seleksi Pasukan Pengibar Bendera Kota Madiun 2023</li><li><strong>Tempat:</strong> Alun-Alun Kota Madiun</li><li><strong>Penyelenggara:</strong> Pemkot Madiun</li></ul>",
        gallery: ["https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pemb.jpg", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pemb1.jpg", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pendidikan.jpg", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pend2.jpg"]
    },
    prestasi1: {
        title: "LPBB GELEGAR 15th - Detail Lengkap",
        mainImage: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/baratayudafb.JPG",
        text: "<p>PAGASKA berhasil meraih juara Pelajar 1 di LPBB GELEGAR 15th berkat kerja keras seluruh anggota dan kekompakan seluruh anggota dalam LPBB tersebut, dan akhirnya mendapatkan hasil yang memuaskan.</p><ul><li><strong>Nama Lomba:</strong> LPBB GELEGAR 15th</li><li><strong>Lokasi:</strong> SMAN 2 Jombang, Kabupaten Jombang</li><li><strong>Penyelenggara:</strong> SMAN 2 Jombang</li></ul>",
        gallery: ["https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/baratayudafb.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtydpen.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtyddp.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_5855.JPG"]
    },
    prestasi2: {
        title: "LKBB PAMER 2023 - Detail Lengkap",
        mainImage: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/baratayudafb.JPG",
        text: "<p>PAGASKA berhasil meraih juara Pelajar 1 di LKBB PAMER berkat kerja keras seluruh anggota dan kekompakan seluruh anggota dalam LKBB tersebut, dan akhirnya mendapatkan hasil yang memuaskan.</p><ul><li><strong>Nama Lomba:</strong> LKBB PAMER</li><li><strong>Lokasi:</strong> Gor Wilis, Kota Madiun</li><li><strong>Penyelenggara:</strong> SMAN 2 Madiun</li></ul>",
        gallery: ["https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/baratayudafb.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtydpen.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtyddp.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_5855.JPG"]
    },
    prestasi3: {
        title: "Parade Senja 2024 - Detail Lengkap",
        mainImage: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/parjafb.JPG",
        text: "<p>Prestasi gemilang yang berhasil ditorehkan oleh PAGASKA dalam Lomba Parade Senja Kota Madiun Tahun 2024. Tim kami berhasil mengungguli 15 tim peserta lainnya dengan total nilai tertinggi dalam semua kategori penilaian.</p><ul><li><strong>Nama Lomba:</strong> Parade Senja 2024</li><li><strong>Tempat:</strong> Pahlawan Street Center, Kota Madiun</li><li><strong>Penyelenggara:</strong> Pemkot Madiun</li></ul>",
        gallery: ["https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/parjafb.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/penampilan.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_0651.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_0674.JPG"]
    },
    prestasi4: {
        title: "LKBB Baratayuda'3 2025 - Detail Lengkap",
        mainImage: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/baratayudafb.JPG",
        text: "<p>PAGASKA berhasil meraih juara Pelajar 1 di LKBB Baratayuda'3 berkat kerja keras seluruh anggota dan kekompakan seluruh anggota dalam LKBB tersebut, dan akhirnya mendapatkan hasil yang memuaskan.</p><ul><li><strong>Nama Lomba:</strong> LKBB Baratayuda'3</li><li><strong>Lokasi:</strong> SMAN 1 Boyolangu, Tulungagung</li><li><strong>Penyelenggara:</strong> SMAN 1 Boyolangu</li></ul>",
        gallery: ["https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/baratayudafb.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtydpen.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtyddp.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_5855.JPG"]
    },
    prestasi5: {
        title: "LKBB Baratayuda'3 2025 - Detail Lengkap",
        mainImage: "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_6865.JPG",
        text: "<p>PAGASKA berhasil meraih juara Pelajar 1 di LKBB Baratayuda'3 berkat kerja keras seluruh anggota dan kekompakan seluruh anggota dalam LKBB tersebut, dan akhirnya mendapatkan hasil yang memuaskan.</p><ul><li><strong>Nama Lomba:</strong> LKBB Baratayuda'3</li><li><strong>Lokasi:</strong> SMAN 1 Boyolangu, Tulungagung</li><li><strong>Penyelenggara:</strong> SMAN 1 Boyolangu</li></ul>",
        gallery: ["https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_6865.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtydpen.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_7080.JPG", "https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_7028.JPG"]
    },
};

var currentGallery = '';
var currentImageIndex = 0;
var galleryImages = [];

function openGalleryLightbox(galleryId, index) {
    index = index || 0;
    currentGallery = galleryId;
    currentImageIndex = index;
    galleryImages = galleries[galleryId];

    if (galleryImages && galleryImages.length > 0) {
        var lightbox = document.getElementById('galleryLightbox');
        var lightboxImage = document.getElementById('lightboxImage');
        var currentIndexSpan = document.getElementById('currentIndex');
        var totalImagesSpan = document.getElementById('totalImages');

        if (lightbox && lightboxImage && currentIndexSpan && totalImagesSpan) {
            lightboxImage.src = galleryImages[currentImageIndex].src;
            lightboxImage.alt = galleryImages[currentImageIndex].alt;
            currentIndexSpan.textContent = currentImageIndex + 1;
            totalImagesSpan.textContent = galleryImages.length;

            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
}

function closeGalleryLightbox() {
    var lightbox = document.getElementById('galleryLightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = galleryImages.length - 1;
    }
    updateLightboxImage();
}

function nextImage() {
    if (currentImageIndex < galleryImages.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    updateLightboxImage();
}

function updateLightboxImage() {
    var lightboxImage = document.getElementById('lightboxImage');
    var currentIndexSpan = document.getElementById('currentIndex');

    if (lightboxImage && currentIndexSpan) {
        lightboxImage.src = galleryImages[currentImageIndex].src;
        lightboxImage.alt = galleryImages[currentImageIndex].alt;
        currentIndexSpan.textContent = currentImageIndex + 1;
    }
}

function openDetailLightbox(prestasiId) {
    var data = prestasiData[prestasiId];
    if (!data) return;

    var detailTitle = document.getElementById('detailTitle');
    var detailMainImage = document.getElementById('detailMainImage');
    var detailText = document.getElementById('detailText');

    if (detailTitle) detailTitle.textContent = data.title;
    if (detailMainImage) detailMainImage.src = data.mainImage;
    if (detailText) detailText.innerHTML = data.text;

    var galleryContainer = document.getElementById('detailGallery');
    if (galleryContainer) {
        galleryContainer.innerHTML = '';

        data.gallery.forEach(function (src, index) {
            var img = document.createElement('img');
            img.src = src;
            img.alt = 'Dokumentasi ' + (index + 1);
            img.style.cursor = 'pointer';
            img.addEventListener('click', function () {
                var tempGalleryId = 'detail' + prestasiId;
                var tempGallery = data.gallery.map(function (imgSrc, idx) {
                    return { src: imgSrc, alt: 'Dokumentasi ' + (idx + 1) };
                });
                galleries[tempGalleryId] = tempGallery;
                openGalleryLightbox(tempGalleryId, index);
            });
            galleryContainer.appendChild(img);
        });
    }

    var detailLightbox = document.getElementById('detailLightbox');
    if (detailLightbox) {
        detailLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeDetailLightbox() {
    var detailLightbox = document.getElementById('detailLightbox');
    if (detailLightbox) {
        detailLightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function initAchievementsInteractions() {
    document.addEventListener('click', function (e) {
        var item = e.target.closest('.gallery-item');
        if (!item) return;
        var galleryGrid = item.closest('.gallery-grid');
        if (galleryGrid) {
            var galleryId = galleryGrid.id;
            var index = parseInt(item.getAttribute('data-index'), 10);
            openGalleryLightbox(galleryId, index);
        }
    });

    document.addEventListener('keydown', function (e) {
        var galleryLightbox = document.getElementById('galleryLightbox');
        var detailLightbox = document.getElementById('detailLightbox');

        var galleryOpen = galleryLightbox && galleryLightbox.classList.contains('active');
        var detailOpen = detailLightbox && detailLightbox.classList.contains('active');

        if (galleryOpen) {
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeGalleryLightbox();
        }
        if (detailOpen) {
            if (e.key === 'Escape') closeDetailLightbox();
        }
    });

    var galleryLightbox = document.getElementById('galleryLightbox');
    if (galleryLightbox) {
        galleryLightbox.addEventListener('click', function (e) {
            if (e.target === this) closeGalleryLightbox();
        });
    }

    var detailLightbox = document.getElementById('detailLightbox');
    if (detailLightbox) {
        detailLightbox.addEventListener('click', function (e) {
            if (e.target === this) closeDetailLightbox();
        });
    }

    var achievementObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.achievement-article').forEach(function (article, index) {
        article.style.opacity = '0';
        article.style.transform = 'translateY(20px)';
        article.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        article.style.transitionDelay = (index * 0.1) + 's';
        achievementObserver.observe(article);
    });
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
    initRouter();
    initMarquee();
    initAchievementsInteractions();

    document.querySelectorAll('.nav-menu a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    var menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
    }
});
