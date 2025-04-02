function goToBeranda() {
    window.location.href = "#beranda";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Pesan Anda telah dikirim!");
});
