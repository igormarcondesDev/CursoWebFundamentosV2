// ================= WHATSAPP =================
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5531971282636';

    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    window.open(url, '_blank');
});

// ================= VER MAIS =================
const btnVerMais = document.getElementById("btnVerMais");
const cardsHidden = document.querySelectorAll(".projetos-card.hidden");

let aberto = false;

btnVerMais.addEventListener("click", () => {
    aberto = !aberto;

    cardsHidden.forEach(card => {
        card.style.display = aberto ? "block" : "none";
    });

    btnVerMais.textContent = aberto ? "Ver menos" : "Ver mais";
});

// ================= SCROLL SUAVE =================
const linksMenu = document.querySelectorAll(".menu-link");

linksMenu.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const id = this.getAttribute("href");
        const secao = document.querySelector(id);

        const alturaMenu = document.querySelector(".navegacao").offsetHeight;

        window.scrollTo({
            top: secao.offsetTop - alturaMenu,
            behavior: "smooth"
        });
    });
});