async function carregarArquivo(arquivo, id) {
    try {
        const response = await fetch(arquivo);
        
        if (!response.ok) 
            throw new Error(`ERRO: ${response.statusText}`);

        const dados = await response.json();
        carregarAtividade(dados, id);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Leitura do arquivo JSON finalizada.");
    }
}

function carregarAtividade(dados, id) {
    const atividade = buscarAtividade(dados, id);
    exibirAtividade(atividade);
}

function buscarAtividade(dados, id) {
    for(const item of dados) 
        if (item.id === id) {
            console.log("Atividade encontrada.");
            return item; 
        }
    console.log("ERRO: Atividade não encontrada.");        
}

function redimensionarIframe(iframe) {
    const documento = iframe.contentDocument;
    if (!documento || documento.readyState !== "complete")
        return;

    iframe.style.height = "0px";
    const alturaConteudo = Math.max(
        documento.documentElement.scrollHeight,
        documento.body ? documento.body.scrollHeight : 0
    );
    const estilo = window.getComputedStyle(iframe);
    const espacamentoVertical = [
        "paddingTop",
        "paddingBottom",
        "borderTopWidth",
        "borderBottomWidth"
    ].reduce((total, propriedade) => total + parseFloat(estilo[propriedade]), 0);

    iframe.style.height = `${Math.ceil(alturaConteudo + espacamentoVertical + 20)}px`;
}

const nome = document.getElementById("nome");
const coordenador = document.getElementById("coordenador");
const cargaHoraria = document.getElementById("cargaHoraria");
const descricao = document.getElementById("descricao");
const dashboard = document.getElementById("dashboard");

function exibirAtividade(atividade) {
    nome.innerText = atividade.nome;
    coordenador.innerHTML += `${atividade.coordenador}`;
    cargaHoraria.innerHTML += `${atividade.cargaHoraria}h`;
    descricao.innerText = atividade.descricao;
    dashboard.innerHTML = `<iframe title="Dados da atividade"></iframe>`;
    const iframe = dashboard.querySelector("iframe");
    iframe.addEventListener("load", () => redimensionarIframe(iframe));
    iframe.src = atividade.dashboard;
    console.log("Elementos HTML adicionados à página.");
}

window.addEventListener("resize", () => {
    const iframe = dashboard.querySelector("iframe");
    if (iframe)
        requestAnimationFrame(() => redimensionarIframe(iframe));
});

document.addEventListener("DOMContentLoaded", () => {
    const parametros = new URLSearchParams(window.location.search);
    const id = Number(parametros.get("id"));

    if (!Number.isInteger(id)) {
        console.error("ERRO: ID da atividade inválido ou ausente.");
        return;
    }

    carregarArquivo("script/atividades.json", id);
});