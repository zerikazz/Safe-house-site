const descobrirBtn = document.getElementById('descobrir-btn');
const pesquisaContainer = document.getElementById('pesquisa-container');

if (descobrirBtn && pesquisaContainer) {
    descobrirBtn.addEventListener('click', () => {
        descobrirBtn.style.transition = 'opacity 0.5s ease';
        descobrirBtn.style.opacity = '0';

        setTimeout(() => {
            descobrirBtn.style.display = 'none'; // Oculta o botão
            pesquisaContainer.classList.add('visible'); // Mostra o container de pesquisa
            pesquisaContainer.classList.add('visible'); 
        }, 500); 
    });
} else {
    console.error("Erro: Não foi possível encontrar os elementos do botão ou container de pesquisa.");
}