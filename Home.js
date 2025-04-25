// Tangkap tombol dan elemen body
const darkModeButton = document.getElementById('darkModeToggle');
const body = document.body;

// Cek apakah dark mode pernah diaktifkan sebelumnya
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeButton.textContent = '☀️ Matikan Dark Mode';
}

// Tambahkan event klik ke tombol
darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Cek apakah mode gelap aktif, lalu simpan statusnya
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeButton.textContent = '☀️ Matikan Dark Mode';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeButton.textContent = '🌙 Aktifkan Dark Mode';
    }
});
