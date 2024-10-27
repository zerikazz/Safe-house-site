const descobrirBtn = document.getElementById('descobrir-btn');
const pesquisaContainer = document.getElementById('pesquisa-container');
const botaoPesquisar = document.getElementById('pesquisar');

if (descobrirBtn && pesquisaContainer) {
    descobrirBtn.addEventListener('click', () => {
        descobrirBtn.style.transition = 'opacity 0.5s ease';
        descobrirBtn.style.opacity = '0';

        setTimeout(() => {
            descobrirBtn.style.display = 'none'; // Oculta o botão
            pesquisaContainer.classList.add('visible'); // Mostra o container de pesquisa
        }, 500); 
    });
} else {
    console.error("Erro: Não foi possível encontrar os elementos do botão ou container de pesquisa.");
}

if (botaoPesquisar) {
    botaoPesquisar.addEventListener('click', () => {
        const anoSelecionado = document.getElementById('ano').value;
        const bairroDigitado = document.getElementById('bairro').value;

        if (anoSelecionado && bairroDigitado) {
            window.location.href = `mapa.html?ano=${anoSelecionado}&bairro=${bairroDigitado}`;
        } else {
            alert('Por favor, selecione um ano e digite um bairro.');
        }
    });
}

let isLoggedIn = false; // Ta no falso colocar true dps

function exportarMapaHTML() {
    const anoSelecionado = document.getElementById("ano").value;
    const bairroDigitado = document.getElementById("bairro").value.trim();

    if (!anoSelecionado || !bairroDigitado) {
        document.getElementById("pesquisaMsg").style.display = "block";
        return;
    }
    document.getElementById("pesquisaMsg").style.display = "none";

    if (!isLoggedIn) {
        document.getElementById("loginMsg").style.display = "block";
        return;
    }

    exportarMapaComoImagem();
}

function exportarMapaComoImagem() {
    const mapaElement = document.getElementById("mapa");
    html2canvas(mapaElement).then(function(canvas) {
        // Converte para imagem
        const imgData = canvas.toDataURL("image/png");

        // Cria um link 
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "mapa.png";
        link.click(); 
    });
}