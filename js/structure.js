// ===== FUNGSI UNTUK STRUKTUR ORGANISASI =====
function showGen(gen) {
    // Hide all contents
    document.querySelectorAll('.org-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.org-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected content
    const selectedContent = document.getElementById('gen' + gen);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
    
    // Add active class to clicked tab
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Sembunyikan semua "more-structure" ketika ganti tab
    document.querySelectorAll('.more-structure').forEach(el => {
        el.style.display = 'none';
    });
    
    // Update teks button
    const btn = document.querySelector('.toggle-btn');
    if (btn) {
        btn.innerText = 'Tampilkan Selengkapnya';
    }
}

function toggleCurrentGen() {
    // Cari generasi yang aktif
    const activeGen = document.querySelector('.org-content.active');
    if (!activeGen) return;
    
    const genId = activeGen.id;
    const genNumber = genId.replace('gen', '');
    
    const moreId = 'moreGen' + genNumber;
    const btn = document.querySelector('.toggle-btn');
    
    const el = document.getElementById(moreId);
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
    const content = `
        <div style="text-align: center; padding: 20px;">
            <img src="${el.src}" 
                 alt="${el.dataset.nama}" 
                 style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 20px;">
            <h3 style="color: var(--secondary); margin-bottom: 10px;">${el.dataset.nama}</h3>
            <div style="text-align: left; margin-top: 20px;">
                <p><strong>Jabatan:</strong> ${el.closest('.org-card').querySelector('h4').textContent}</p>
                <p><strong>TTL:</strong> ${el.dataset.ttl}</p>
                <p><strong>Sosial Media:</strong> ${el.dataset.sosmed}</p>
            </div>
        </div>
    `;
    
    // Buat lightbox sederhana
    const lightbox = document.createElement('div');
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999;
    `;
    
    lightbox.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 10px; max-width: 400px; width: 90%; position: relative;">
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="position: absolute; top: 10px; right: 10px; background: var(--primary); color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer;">×</button>
            ${content}
        </div>
    `;
    
    document.body.appendChild(lightbox);
}