// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementaryById('sapaButton');
// 2. Tambahkan 'Event listener' untuk aksi 'click'
tombolSapa.addEventlistener'(click', function() {
  // 3. Jalankan kode ini ketika tombol di-klik
  alert('Halo! Terima kasih sudah berkunjung!');
});
