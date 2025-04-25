<img id="gambar" src="gambar1.jpg" alt="Gambar" onclick="gantiGambar()">

<script>
function gantiGambar() {
  var img = document.getElementById('gambar');
  if (img.src.includes('Fotu Utama (Bawah).jpeg')) {
    img.src = 'Fotu Utama (Atas).jpge';
  } else {
    img.src = 'Fotu Utama (Bawah).jpeg';
  }
}
</script>