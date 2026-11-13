document.addEventListener("DOMContentLoaded", () => {
    const btnTema = document.querySelector(".temaPagina");
    const icone = btnTema.querySelector("i");
    const body = document.body;

    // 1. Verifica se o usuário já tinha escolhido o modo claro anteriormente
    if (localStorage.getItem("tema") === "claro") {
        body.classList.add("light-mode");
        icone.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
    }

    // 2. Alterna entre claro e escuro ao clicar no botão
    btnTema.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            // Muda o ícone para sol e salva no navegador
            icone.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
            localStorage.setItem("tema", "claro");
        } else {
            // Volta o ícone para lua e salva no navegador
            icone.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
            localStorage.setItem("tema", "escuro");
        }
    });
});