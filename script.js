    const descobrirBtn = document.getElementById('descobrir-btn');
    const pesquisaContainer = document.getElementById('pesquisa-container');
    const botaoPesquisar = document.querySelector(".botao-pesquisar");
    const anoInput = document.getElementById("ano");
    const bairroInput = document.getElementById("bairro");
    const content = document.querySelector(".content");
    const inputSearch = document.querySelector("input[type='search']");

    let isLoggedIn = false; // ta no false colocar no true dps

    if (descobrirBtn && pesquisaContainer) {
        descobrirBtn.addEventListener('click', () => {
            descobrirBtn.style.transition = 'opacity 0.5s ease';
            descobrirBtn.style.opacity = '0';

            setTimeout(() => {
                descobrirBtn.style.display = 'none'; 
                pesquisaContainer.classList.add('visible'); 
            }, 500);
        });
    } else {
        console.error("Erro: Não foi possível encontrar os elementos do botão ou container de pesquisa.");
    }

    function mostrarErro(messageId) {
        document.getElementById('pesquisaMsg').style.display = 'none';
        document.getElementById('loginMsg').style.display = 'none';
    
        const message = document.getElementById(messageId);
        if (message) {
            message.style.display = 'block';
            $('#modalErro').modal('show'); 
        }
    }
    
    function esconderErro(messageId) {
        const message = document.getElementById(messageId);
        if (message) {
            message.style.display = 'none';
            $('#modalErro').modal('hide');
        }
    }
    
    function irParaLogin() {
        window.location.href = 'login.html'; 
    }
    let bairros = [
        "Agua Rasa", "Alto De Pinheiros", "Anhanguera", "Aricanduva", "Artur Alvim", 
        "Barra Funda", "Bela Vista", "Belem", "Bom Retiro", "Bras", 
        "Brasilândia", "Butantã", "Cachoeirinha", "Cambuci", "Campo Belo", 
        "Campo Grande", "Campo Limpo", "Cangaíba", "Capão Redondo", "Carrão", 
        "Casa Verde", "Cidade Ademar", "Cidade Dutra", "Cidade Líder", "Cidade Tiradentes", 
        "Consolação", "Cursino", "Ermelino Matarazzo", "Freguesia Do Ó", "Grajau", 
        "Guaianases", "Iguatemi", "Ipiranga", "Itaim Bibi", "Itaim Paulista", 
        "Itaquera", "Jabaquara", "Jacanã", "Jaguara", "Jaguare", 
        "Jaraguá", "Jardim Angela", "Jardim Helena", "Jardim Paulista", "Jardim São Luis", 
        "José Bonifácio", "Lajeado", "Lapa", "Liberdade", "Limao", 
        "Mandaqui", "Marsilac", "Moema", "Mooca", "Morumbi", 
        "Parelheiros", "Pari", "Parque Do Carmo", "Pedreira", "Penha", 
        "Perdizes", "Perus", "Pinheiros", "Pirituba", "Ponte Rasa", 
        "Raposo Tavares", "República", "Rio Pequeno", "Sacomã", "Santa Cecília", 
        "Santana", "Santo Amaro", "São Domingos", "São Lucas", "São Mateus", 
        "São Miguel", "São Rafael", "Sapopemba", "Saúde", "Sé", 
        "Socorro", "Tatuapé", "Tremembé", "Tucuruvi", "Vila Andrade", 
        "Vila Curuca", "Vila Formosa", "Vila Guilherme", "Vila Jacuí", "Vila Leopoldina", 
        "Vila Maria", "Vila Mariana", "Vila Matilde", "Vila Medeiros", "Vila Prudente", 
        "Vila Sônia"
    ];

    const datalistbairros = document.getElementById("lista-bairros");
    bairros.forEach(bairro => {
        const option = document.createElement("option");
        option.value = bairro;
        datalistbairros.appendChild(option);
    });

     //bordas
    function borda(input){
        input.style.backgroundColor = '#ff9e81'
        input.style.border = '1px solid red'
    }

    function bordaNormal(input){
        input.style.backgroundColor = '#ffffff'
        input.style.border = 'none'
    }

    // botão Pesquisar
    botaoPesquisar.addEventListener('click', () => {
        const anoSelecionado = anoInput.value;
        const bairroSelecionado = bairroInput.value;

        if (anoSelecionado && bairroSelecionado) {
            window.location.href = `mapa.html?ano=${anoSelecionado}&bairro=${bairroSelecionado}`;
        } else {
            alert('Selecione um ano e um bairro.');
            if (anoSelecionado == ""){
                borda(anoInput);
            }
            if (bairroSelecionado == ""){
                borda(bairroInput);
            } 
        }
    });

    anoInput.addEventListener('click', () => {
        bordaNormal(anoInput);
    });

    bairroInput.addEventListener('click', () => {
        bordaNormal(bairroInput);
    });


    // Filtro de bairros
    inputSearch.oninput = () => {
        const valorPesquisa = inputSearch.value.toLowerCase();
        content.innerHTML = ""; // Limpa os resultados anteriores
        
        bairros
            .filter(item => item.toLowerCase().includes(valorPesquisa))
            .forEach(item => addHTML(item));
    };

    function addHTML(item) {
        const div = document.createElement("div");
        div.className = "resultado";
        div.innerHTML = item; 
        content.append(div); 
    }

    function exportarMapaHTML() {
        const anoSelecionado = anoInput.value;
        const bairroDigitado = bairroInput.value.trim();

        if (!anoSelecionado || !bairroDigitado) {
            pesquisaMsg.style.display = "block";
            return;
        }
        pesquisaMsg.style.display = "none";

        if (!isLoggedIn) {
            loginMsg.style.display = "block";
            return;
        }

        exportarMapaComoImagem();
    }

    function exportarMapaComoImagem() {
        const mapaElement = document.getElementById("mapa");
        html2canvas(mapaElement).then(function(canvas) {
            const imgData = canvas.toDataURL("image/png");

            const link = document.createElement("a");
            link.href = imgData;
            link.download = "mapa.png";
            link.click(); 
        });
    }