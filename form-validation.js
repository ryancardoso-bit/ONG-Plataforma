const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const cpf = document.getElementById("cpf").value;
    const email = form.email.value;
    
    // Exemplo de validação simples
    if(!cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
        alert("CPF inválido. Use o formato XXX.XXX.XXX-XX");
        return;
    }
    if(!email.includes("@")) {
        alert("E-mail inválido.");
        return;
    }

    // Se tudo ok, pode salvar no localStorage
    alert("Cadastro enviado com sucesso!");
    form.reset();
});
