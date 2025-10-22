const main = document.querySelector("main");

function loadPage(templateId) {
    const template = document.getElementById(templateId);
    if(template) {
        main.innerHTML = template.innerHTML;
    }
}

// Exemplo de uso com botões ou links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const page = link.getAttribute("href").replace(".html", "");
        loadPage(page + "-template");
    });
});
