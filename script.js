// ==================================================
// MENU MOBILE
// ==================================================

function toggleMenu() {
  document.getElementById("navbar").classList.toggle("open");
}

// ==================================================
// MENU MOBILE - TUTUP SETELAH LINK DIKLIK
// ==================================================

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.getElementById("navbar").classList.remove("open");
    });
  });

  // ==================================================
  // FORM KONTAK → WHATSAPP
  // ==================================================

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById("email").value.trim();
      const telepon = document.getElementById("telepon").value.trim();
      const pesan = document.getElementById("pesan").value.trim();

      // Nomor WhatsApp Air Hangat Kita
      const nomorWhatsApp = "6282312085979";

      // Cek form
      if (!nama || !email || !telepon || !pesan) {
        alert("Mohon lengkapi semua data terlebih dahulu.");
        return;
      }

      // Isi pesan WhatsApp
      const teksPesan =
        "Halo Air Hangat Kita,\n\n" +
        "Saya ingin berkonsultasi mengenai produk.\n\n" +
        "Nama: " +
        nama +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "No. WhatsApp: " +
        telepon +
        "\n\n" +
        "Pesan:\n" +
        pesan;

      // Membuat link WhatsApp
      const urlWhatsApp =
        "https://wa.me/" +
        nomorWhatsApp +
        "?text=" +
        encodeURIComponent(teksPesan);

      // Buka WhatsApp
      window.open(urlWhatsApp, "_blank");

      // Kosongkan form
      contactForm.reset();
    });
  }
});
