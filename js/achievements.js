// ===== DATA UNTUK PRESTASI =====
const galleries = {
	gallery0: [
	    { src: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pemb.jpg', alt: 'Apel Pembukaan Pelatihan' },
        { src: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pemb1.jpg', alt: 'Pembukaan Pelatihan' },
        { src: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pendidikan.jpg', alt: 'Pendidikan Pelatihan' },
        { src: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pend2.jpg', alt: 'Pendidikan Pelatihan' }
	],
    gallery1: [
        { src: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/parjafb.JPG', alt: 'Foto Bersama' },
        { src: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/penampilan.JPG', alt: 'Penampilan' },
        { src: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_0651.JPG', alt: 'Penurunan bendera' },
        { src: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_0674.JPG', alt: 'Penutup' }
    ],
    gallery2: [
        { src: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/baratayudafb.JPG', alt: 'Foto Bersama' },
        { src: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtydpen.JPG', alt: 'Penampilan' },
        { src: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtyddp.JPG', alt: 'dp' },
        { src: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_5855.JPG', alt: 'Penyerahan Piala' }
    ]
};

const prestasiData = {
    prestasi1: {
        title: 'Parade Senja Kota Madiun 2024 - Detail Lengkap',
        mainImage: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/parjafb.JPG',
        text: `
            <p><strong>Kisah Perjuangan Menuju Juara 1</strong></p>
            <p>Perjalanan menuju juara 1 LKBB Kota Madiun 2024 tidaklah mudah. Tim PAGASKA memulai persiapan sejak 3 bulan sebelum lomba dengan intensitas latihan 5 kali seminggu.</p>
            
            <p><strong>Strategi Kemenangan</strong></p>
            <p>Kunci kemenangan kami terletak pada:</p>
            <ul>
                <li>Formasi Kreatif Unik</li>
                <li>Presisi Gerakan</li>
                <li>Timing Sempurna</li>
                <li>Mental Juara</li>
            </ul>
            
            <p>Prestasi ini menjadi bukti bahwa kerja keras, kedisiplinan, dan kreativitas dapat membawa tim sekolah ke puncak prestasi.</p>
        `,
        gallery: [
            'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/parjafb.JPG',
            'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/penampilan.JPG',
            'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_0651.JPG',
            'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_0674.JPG'
        ]
    },
    prestasi2: {
        title: 'LKBB Baratayuda S3 Se-Jawa Tumur 2025 - Detail Lengkap',
        mainImage: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/baratayudafb.JPG',
        text: `
            <p><strong>Terimakasih Atas Prestasinya</strong></p>
            <p>PAGASKA berhasil meraih juara Pelajar 1 di LKBB Baratayuda'3 Se-Jawa Timur</p>
            
            <p><strong>Proses Seleksi Ketat</strong></p>
            <p>PAGASKA berhasil meraih juara Pelajar 1 di LKBB Baratayuda'3 berkat kerja keras seluruh anggota dan kekompakan seluruh anggota dalam LKBB tersebut, dan akhirnya mendapatkan hasil yang memuaskan.</p>
            
            <p>Pengalaman ini tidak hanya menjadi kebanggaan bagi sekolah, tetapi juga membuktikan bahwa ekstrakurikuler Paskibra dapat berkontribusi langsung pada bidang prestasi.</p>
        `,
        gallery: [
            'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/baratayudafb.JPG',
            'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtydpen.JPG',
            'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/brtyddp.JPG',
            'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/IMG_5855.JPG'
        ]
    },
    prestasi3: {
        title: 'Pasukan Pengibar Bendera 2023 - PAGASKA',
        mainImage: 'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/fotbarppi.jpg',
        text: `
            <p><strong>Selamat & Sukses</strong></p>
            <p>Selamat & Sukses atas pencapaiannya dalam menjadi Pasukan Pengibar Bendera Kota Madiun Tahun 2023 tidaklah mudah. Reyhan, Yasir Isa, Renata memulai seleksi selama 5 bulan lamanya sebelum dinyatakan lolos sebagai pasukan pengibar bendera pusaka dengan intens & keras dari TNI AD dan juga Purna Paskibraka Kota Madiun.</p>
            
            <p><strong>Terimakasih Atas Keberhasilannya</strong></p>
            <p>Kepada:</p>
            <ul>
                <li>Reyhan</li>
                <li>Yasir Isa</li>
                <li>Renata</li>
            </ul><br>
            
            <p>Prestasi ini menjadi bukti bahwa kerja keras, kedisiplinan, dan kreativitas dapat membawa nama baik sekolah ke puncak prestasi.</p>
        `,
        gallery: [
            'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pemb.jpg',
            'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pemb1.jpg',
            'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pendidikan.jpg',
            'https://iffrqakrixmgobvkzpzc.supabase.co/storage/v1/object/public/foto/pend2.jpg'
        ]
    }
};

// ===== VARIABEL GALLERY =====
let currentGallery = '';
let currentImageIndex = 0;
let galleryImages = [];

// ===== FUNGSI GALLERY LIGHTBOX =====
function openGalleryLightbox(galleryId, index = 0) {
    currentGallery = galleryId;
    currentImageIndex = index;
    galleryImages = galleries[galleryId];
    
    if (galleryImages && galleryImages.length > 0) {
        const lightbox = document.getElementById('galleryLightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const currentIndexSpan = document.getElementById('currentIndex');
        const totalImagesSpan = document.getElementById('totalImages');
        
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
    const lightbox = document.getElementById('galleryLightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
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
    const lightboxImage = document.getElementById('lightboxImage');
    const currentIndexSpan = document.getElementById('currentIndex');
    
    if (lightboxImage && currentIndexSpan) {
        lightboxImage.src = galleryImages[currentImageIndex].src;
        lightboxImage.alt = galleryImages[currentImageIndex].alt;
        currentIndexSpan.textContent = currentImageIndex + 1;
    }
}

// ===== FUNGSI DETAIL LIGHTBOX =====
function openDetailLightbox(prestasiId) {
    const data = prestasiData[prestasiId];
    if (!data) return;
    
    const detailTitle = document.getElementById('detailTitle');
    const detailMainImage = document.getElementById('detailMainImage');
    const detailText = document.getElementById('detailText');
    
    if (detailTitle) detailTitle.textContent = data.title;
    if (detailMainImage) detailMainImage.src = data.mainImage;
    if (detailText) detailText.innerHTML = data.text;
    
    const galleryContainer = document.getElementById('detailGallery');
    if (galleryContainer) {
        galleryContainer.innerHTML = '';
        
        data.gallery.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Dokumentasi ${index + 1}`;
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                const tempGalleryId = `detail${prestasiId}`;
                const tempGallery = data.gallery.map((imgSrc, idx) => ({
                    src: imgSrc,
                    alt: `Dokumentasi ${idx + 1}`
                }));
                
                galleries[tempGalleryId] = tempGallery;
                openGalleryLightbox(tempGalleryId, index);
            });
            galleryContainer.appendChild(img);
        });
    }
    
    const detailLightbox = document.getElementById('detailLightbox');
    if (detailLightbox) {
        detailLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeDetailLightbox() {
    const detailLightbox = document.getElementById('detailLightbox');
    if (detailLightbox) {
        detailLightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ===== INISIALISASI EVENT LISTENER =====
document.addEventListener('DOMContentLoaded', function() {
    // Event listener untuk gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const galleryGrid = this.closest('.gallery-grid');
            if (galleryGrid) {
                const galleryId = galleryGrid.id;
                const index = parseInt(this.getAttribute('data-index'));
                openGalleryLightbox(galleryId, index);
            }
        });
    });
    
    // Event listener untuk keyboard navigation
    document.addEventListener('keydown', function(e) {
        const galleryLightbox = document.getElementById('galleryLightbox');
        const detailLightbox = document.getElementById('detailLightbox');
        
        const galleryOpen = galleryLightbox && galleryLightbox.classList.contains('active');
        const detailOpen = detailLightbox && detailLightbox.classList.contains('active');
        
        if (galleryOpen) {
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeGalleryLightbox();
        }
        
        if (detailOpen) {
            if (e.key === 'Escape') closeDetailLightbox();
        }
    });
    
    // Event listener untuk klik di luar lightbox
    const galleryLightbox = document.getElementById('galleryLightbox');
    if (galleryLightbox) {
        galleryLightbox.addEventListener('click', function(e) {
            if (e.target === this) closeGalleryLightbox();
        });
    }
    
    const detailLightbox = document.getElementById('detailLightbox');
    if (detailLightbox) {
        detailLightbox.addEventListener('click', function(e) {
            if (e.target === this) closeDetailLightbox();
        });
    }
    
    // Animasi untuk prestasi articles
    const achievementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.achievement-article').forEach((article, index) => {
        article.style.opacity = '0';
        article.style.transform = 'translateY(20px)';
        article.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        article.style.transitionDelay = `${index * 0.1}s`;
        achievementObserver.observe(article);
    });
});