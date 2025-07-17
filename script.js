document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPendaftaran");
  const status = document.getElementById("statusForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = form.nama.value.trim();
    const email = form.email.value.trim();

    if (!nama || !email) {
      status.style.color = "red";
      status.textContent = "Mohon isi nama dan email dengan benar.";
      return;
    }

    status.style.color = "green";
    status.textContent = "Formulir berhasil dikirim! Kami akan menghubungi Anda.";

    setTimeout(() => {
      form.reset();
      status.textContent = "";
    }, 3000);
  });
});
