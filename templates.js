const projetosData = [
    {nome: "Projeto Esperança", descricao: "Atendimento a famílias em vulnerabilidade."},
    {nome: "Educação para o Futuro", descricao: "Oficinas de capacitação profissional."},
    {nome: "Voluntariado Consciente", descricao: "Engajamento de voluntários em ações de impacto."}
];

function renderProjetos() {
    const container = document.querySelector(".projetos-container");
    container.innerHTML = "";
    projetosData.forEach(proj => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3>${proj.nome}</h3><p>${proj.descricao}</p>`;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderProjetos);
