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
        if (item.id == id) {
            console.log("Atividade encontrada.");
            return item; 
        }
    console.log("ERRO: Atividade não encontrada.");        
}

const nome = document.getElementById("nome");
const coordenador = document.getElementById("coordenador");
const cargaHoraria = document.getElementById("cargaHoraria");
const descricao = document.getElementById("descricao");
const dashboard = document.getElementById("dashboard");

function exibirAtividade(atividade) {
    nome.innerText = atividade.nome;
    coordenador.innerHTML = `Coordenador(a): ${atividade.coordenador}`;
    cargaHoraria.innerHTML = `Carga horária: ${atividade.cargaHoraria}h`;
    descricao.innerText = atividade.descricao;
    dashboard.innerHTML = `
        <iframe 
            src="${atividade.dashboard}" 
            width="100%"  
            height="800px"
            style="border: 1px solid #E6E8EF; padding: 1em; border-radius: 16px; background-color: white; box-shadow: 0 5px 20px rgba(68,79,108,.08);">
        </iframe> 
    `
    console.log("Elementos HTML adicionados à página.");
}

document.addEventListener("DOMContentLoaded", () => {
    carregarArquivo("atividades.json", 1);
});