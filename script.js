// Elemen DOM
const birthdayPage = document.getElementById('birthday-page');
const galleryPage = document.getElementById('gallery-page');
const viewGalleryBtn = document.getElementById('view-gallery');
const backToBirthdayBtn = document.getElementById('back-to-birthday');
const galleryItems = document.querySelectorAll('.gallery-item');
const overlay = document.getElementById('overlay');
const audioPlayer = document.getElementById('birthday-song');
const playPauseBtn = document.getElementById('play-pause');
const playIcon = playPauseBtn.querySelector('i');

// Navigasi antar halaman
viewGalleryBtn.addEventListener('click', () => {
    birthdayPage.style.display = 'none';
    galleryPage.style.display = 'block';
});

backToBirthdayBtn.addEventListener('click', () => {
    galleryPage.style.display = 'none';
    birthdayPage.style.display = 'block';
});

// Fungsi galeri
galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // Jika item belum di-reveal, reveal terlebih dahulu
        if (!item.classList.contains('revealed')) {
            item.classList.add('revealed');
            e.stopPropagation();
            return;
        }

        // Jika item sudah di-reveal, perbesar gambar
        if (!item.classList.contains('enlarged')) {
            // Perbesar gambar yang diklik
            item.classList.add('enlarged');
            overlay.style.display = 'block';

            // Hentikan event propagation untuk mencegah langsung menutup
            e.stopPropagation();
        } else {
            // Jika sudah diperbesar, kembalikan ke ukuran semula
            item.classList.remove('enlarged');
            overlay.style.display = 'none';
        }
    });
});

// Klik overlay untuk menutup gambar yang diperbesar
overlay.addEventListener('click', () => {
    const enlargedItem = document.querySelector('.gallery-item.enlarged');
    if (enlargedItem) {
        enlargedItem.classList.remove('enlarged');
        overlay.style.display = 'none';
    }
});

// Kontrol musik
window.addEventListener('load', () => {
    // Auto play musik (dengan penanganan error)
    const playAudio = () => {
        audioPlayer.play().catch(error => {
            console.log('Autoplay prevented: ', error);
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
        });
    };

    // Coba play otomatis
    playAudio();

    // Atur icon sesuai state
    audioPlayer.addEventListener('play', () => {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    });

    audioPlayer.addEventListener('pause', () => {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    });
});

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

// Buat confetti secara dinamis
function createConfetti() {
    const container = document.querySelector('.birthday-card');
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 15 + 10 + 'px';
        container.appendChild(confetti);
    }
}

createConfetti();
const videoBox = document.getElementById("videoBox");

// klik untuk toggle perbesar
videoBox.addEventListener("click", () => {
    videoBox.classList.toggle("fullscreen");
});