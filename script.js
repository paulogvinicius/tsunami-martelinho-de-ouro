function contatoWhats() {
  const numero = "5567992810025";
  const mensagem = "Olá, vim do site.";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

/* ANIMAÇÃO AO ROLAR */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 50) {
      el.classList.add("active");
    }
  });
}

/* 🔥 CORREÇÃO AQUI */
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // <- resolve o problema