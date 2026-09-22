async function carregarArquivo(arquivo) {
    try {
        const response = await fetch(arquivo);
        
        if (!response.ok) 
            throw new Error(`ERRO: ${response.statusText}`);

        const dados = await response.json();
        carregarAtividades(dados);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Leitura do arquivo JSON finalizada.");
    }
}   

function carregarAtividades(dados) {
    const container = document.getElementById("container");
    for (let atividade of dados)
        container.innerHTML += `
        <a class="idx-card "href="atividade-base.html?id=${atividade.id}">
            <strong>${atividade.nome}</strong>
            <span>${atividade.participantes} participantes • ${atividade.periodo}</span>
        </a>`
}

document.addEventListener("DOMContentLoaded", () => {
    carregarArquivo("script/atividades.json");
});