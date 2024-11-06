    const descobrirBtn = document.getElementById('descobrir-btn');
    const pesquisaContainer = document.getElementById('pesquisa-container');
    const botaoPesquisar = document.querySelector(".botao-pesquisar");
    const anoInput = document.getElementById("ano");
    const bairroInput = document.getElementById("bairro");
    const content = document.querySelector(".content");
    const inputSearch = document.querySelector("input[type='search']");
    const banner = document.getElementById('banner');
    const setinhaEsquerda = document.getElementById('botao-setinha-esquerda');
    const setinhaDireita = document.getElementById('botao-setinha-direita');

    let indiceAtual = 0;

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
        "Consolação", "Cursino", "Ermelino Matarazzo", "Freguesia Do Ó", "Grafico de barras", "Grajau", 
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
        "Socorro", "Tatuapé", "Total", "Tremembé", "Tucuruvi", "Vila Andrade", 
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
            // Determinar qual mapa redirecionar com base na pesquisa do usuário
            let mapaSelecionado;
    
            if (bairroSelecionado && anoSelecionado) {
                if (anoSelecionado === "2024" && bairroSelecionado === "Total") {
                    mapaSelecionado = "mapa.html"; 
                } else if (bairroSelecionado === "Grafico de barras") {
                    mapaSelecionado = "barras_linhas_crime_imovel_bairros.html"; 
                } else if (bairroSelecionado === "Barra Funda") {
                    mapaSelecionado = "crime_por_distrito.html"; 
                } else {
                    mapaSelecionado = "imoveis_bairros.html"; 
                }
                
                // Redireciona para o tipo de mapa determinado
                window.location.href = `${mapaSelecionado}?ano=${anoSelecionado}&bairro=${bairroSelecionado}`;
            }
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

<<<<<<< HEAD
    //banner
    function alterarImagemBanner() {
        let bairroSelecionado = bairros[indiceAtual];
        let imagemBairro = '';
        
        switch (bairroSelecionado) {
            case "Agua Rasa":
                imagemBairro = 'https://link-da-imagem.com/aguarasa.jpg';
                break;
            case "Alto De Pinheiros":
                imagemBairro = 'https://link-da-imagem.com/altodepinheiros.jpg';
                break;
            case "Anhanguera":
                imagemBairro = 'https://link-da-imagem.com/anhanguera.jpg';
                break;
            case "Aricanduva":
                imagemBairro = 'https://link-da-imagem.com/aricanduva.jpg';
                break;
            case "Artur Alvim":
                imagemBairro = 'https://link-da-imagem.com/arturalvim.jpg';
                break;
            case "Barra Funda":
                imagemBairro = 'https://link-da-imagem.com/barrafunda.jpg';
                break;
            case "Bela Vista":
                imagemBairro = 'https://link-da-imagem.com/belavista.jpg';
                break;
            case "Belem":
                imagemBairro = 'https://link-da-imagem.com/belem.jpg';
                break;
            case "Bom Retiro":
                imagemBairro = 'https://link-da-imagem.com/bomretiro.jpg';
                break;
            case "Bras":
                imagemBairro = 'https://link-da-imagem.com/bras.jpg';
                break;
            case "Brasilândia":
                imagemBairro = 'https://link-da-imagem.com/brasilandia.jpg';
                break;
            case "Butantã":
                imagemBairro = 'https://link-da-imagem.com/butanta.jpg';
                break;
            case "Cachoeirinha":
                imagemBairro = 'https://link-da-imagem.com/cachoeirinha.jpg';
                break;
            case "Cambuci":
                imagemBairro = 'https://link-da-imagem.com/cambuci.jpg';
                break;
            case "Campo Belo":
                imagemBairro = 'https://link-da-imagem.com/campobelo.jpg';
                break;
            case "Campo Grande":
                imagemBairro = 'https://link-da-imagem.com/campogrande.jpg';
                break;
            case "Campo Limpo":
                imagemBairro = 'https://link-da-imagem.com/campolimpo.jpg';
                break;
            case "Cangaíba":
                imagemBairro = 'https://link-da-imagem.com/cangaiba.jpg';
                break;
            case "Capão Redondo":
                imagemBairro = 'https://link-da-imagem.com/capao_redondo.jpg';
                break;
            case "Carrão":
                imagemBairro = 'https://link-da-imagem.com/carrao.jpg';
                break;
            case "Casa Verde":
                imagemBairro = 'https://link-da-imagem.com/casaverde.jpg';
                break;
            case "Cidade Ademar":
                imagemBairro = 'https://link-da-imagem.com/cidadeademar.jpg';
                break;
            case "Cidade Dutra":
                imagemBairro = 'https://link-da-imagem.com/cidadedutra.jpg';
                break;
            case "Cidade Líder":
                imagemBairro = 'https://link-da-imagem.com/cidadelider.jpg';
                break;
            case "Cidade Tiradentes":
                imagemBairro = 'https://link-da-imagem.com/cidadetiradentes.jpg';
                break;
            case "Consolação":
                imagemBairro = 'https://link-da-imagem.com/consolacao.jpg';
                break;
            case "Cursino":
                imagemBairro = 'https://link-da-imagem.com/cursino.jpg';
                break;
            case "Ermelino Matarazzo":
                imagemBairro = 'https://link-da-imagem.com/ermelinomatarazzo.jpg';
                break;
            case "Freguesia Do Ó":
                imagemBairro = 'https://link-da-imagem.com/freguesiado.jpg';
                break;
            case "Grajau":
                imagemBairro = 'https://link-da-imagem.com/grajau.jpg';
                break;
            case "Guaianases":
                imagemBairro = 'https://link-da-imagem.com/guaianases.jpg';
                break;
            case "Iguatemi":
                imagemBairro = 'https://link-da-imagem.com/iguatemi.jpg';
                break;
            case "Ipiranga":
                imagemBairro = 'https://link-da-imagem.com/ipiranga.jpg';
                break;
            case "Itaim Bibi":
                imagemBairro = 'https://link-da-imagem.com/itaimbibi.jpg';
                break;
            case "Itaim Paulista":
                imagemBairro = 'https://link-da-imagem.com/itaimpaulista.jpg';
                break;
            case "Itaquera":
                imagemBairro = 'https://link-da-imagem.com/itaquera.jpg';
                break;
            case "Jabaquara":
                imagemBairro = 'https://link-da-imagem.com/jabaquara.jpg';
                break;
            case "Jacanã":
                imagemBairro = 'https://link-da-imagem.com/jacana.jpg';
                break;
            case "Jaguara":
                imagemBairro = 'https://link-da-imagem.com/jaguara.jpg';
                break;
            case "Jaguare":
                imagemBairro = 'https://link-da-imagem.com/jaguare.jpg';
                break;
            case "Jaraguá":
                imagemBairro = 'https://link-da-imagem.com/jaragua.jpg';
                break;
            case "Jardim Angela":
                imagemBairro = 'https://link-da-imagem.com/jardimangela.jpg';
                break;
            case "Jardim Helena":
                imagemBairro = 'https://link-da-imagem.com/jardimhelena.jpg';
                break;
            case "Jardim Paulista":
                imagemBairro = 'https://link-da-imagem.com/jardimpaulista.jpg';
                break;
            case "Jardim São Luis":
                imagemBairro = 'https://link-da-imagem.com/jardimsaoluis.jpg';
                break;
            case "José Bonifácio":
                imagemBairro = 'https://link-da-imagem.com/josebonifacio.jpg';
                break;
            case "Lajeado":
                imagemBairro = 'https://link-da-imagem.com/lajeado.jpg';
                break;
            case "Lapa":
                imagemBairro = 'https://link-da-imagem.com/lapa.jpg';
                break;
            case "Liberdade":
                imagemBairro = 'https://link-da-imagem.com/liberdade.jpg';
                break;
            case "Limao":
                imagemBairro = 'https://link-da-imagem.com/limao.jpg';
                break;
            case "Mandaqui":
                imagemBairro = 'https://link-da-imagem.com/mandaqui.jpg';
                break;
            case "Marsilac":
                imagemBairro = 'https://link-da-imagem.com/parelheiros.jpg';
                break;
            case "Pari":
                imagemBairro = 'https://link-da-imagem.com/pari.jpg';
                break;
            case "Parque Do Carmo":
                imagemBairro = 'https://link-da-imagem.com/parquedocarmo.jpg';
                break;
            case "Pedreira":
                imagemBairro = 'https://link-da-imagem.com/pedreira.jpg';
                break;
            case "Penha":
                imagemBairro = 'https://link-da-imagem.com/penha.jpg';
                break;
            case "Perdizes":
                imagemBairro = 'https://link-da-imagem.com/perdizes.jpg';
                break;
            case "Perus":
                imagemBairro = 'https://link-da-imagem.com/perus.jpg';
                break;
            case "Pinheiros":
                imagemBairro = 'https://link-da-imagem.com/pinheiros.jpg';
                break;
            case "Pirituba":
                imagemBairro = 'https://link-da-imagem.com/pirituba.jpg';
                break;
            case "Ponte Rasa":
                imagemBairro = 'https://link-da-imagem.com/ponterasa.jpg';
                break;
            case "Raposo Tavares":
                imagemBairro = 'https://link-da-imagem.com/raposotavares.jpg';
                break;
            case "República":
                imagemBairro = 'https://link-da-imagem.com/republica.jpg';
                break;
            case "Rio Pequeno":
                imagemBairro = 'https://link-da-imagem.com/ri pequeno.jpg';
                break;
            case "Sacomã":
                imagemBairro = 'https://link-da-imagem.com/sacoma.jpg';
                break;
            case "Santa Cecilia":
                imagemBairro = 'https://link-da-imagem.com/santacecilia.jpg';
                break;
            case "Santana":
                imagemBairro = 'https://link-da-imagem.com/santana.jpg';
                break;
            case "Santo Amaro":
                imagemBairro = 'https://link-da-imagem.com/santoamaro.jpg';
                break;
            case "São Domingos":
                imagemBairro = 'https://link-da-imagem.com/saodomingos.jpg';
                break;
            case "São Lucas":
                imagemBairro = 'https://link-da-imagem.com/saolucas.jpg';
                break;
            case "São Mateus":
                imagemBairro = 'https://link-da-imagem.com/saomateus.jpg';
                break;
            case "São Miguel":
                imagemBairro = 'https://link-da-imagem.com/saomiguel.jpg';
                break;
            case "São Rafael":
                imagemBairro = 'https://link-da-imagem.com/saorafael.jpg';
                break;
            case "Sapopemba":
                imagemBairro = 'https://link-da-imagem.com/sapopemba.jpg';
                break;
            case "Saúde":
                imagemBairro = 'https://link-da-imagem.com/saude.jpg';
                break;
            case "Sé":
                imagemBairro = 'https://link-da-imagem.com/se.jpg';
                break;
            case "Socorro":
                imagemBairro = 'https://link-da-imagem.com/socorro.jpg';
                break;
            case "Tatuapé":
                imagemBairro = 'https://link-da-imagem.com/tatuape.jpg';
                break;
            case "Tremembé":
                imagemBairro = 'https://link-da-imagem.com/tremembe.jpg';
                break;
            case "Tucuruvi":
                imagemBairro = 'https://link-da-imagem.com/tucuruvi.jpg';
                break;
            case "Vila Andrade":
                imagemBairro = 'https://link-da-imagem.com/vilaandrade.jpg';
                break;
            case "Vila Curuca":
                imagemBairro = 'https://link-da-imagem.com/vilacuruca.jpg';
                break;
            case "Vila Formosa":
                imagemBairro = 'https://link-da-imagem.com/vilaformosa.jpg';
                break;
            case "Vila Guilherme":
                imagemBairro = 'https://link-da-imagem.com/vilaguilherme.jpg';
                break;
            case "Vila Jacuí":
                imagemBairro = 'https://link-da-imagem.com/vilajacui.jpg';
                break;
            case "Vila Leopoldina":
                imagemBairro = 'https://link-da-imagem.com/vilaleopoldina.jpg';
                break;
            case "Vila Maria":
                imagemBairro = 'https://link-da-imagem.com/vilamaria.jpg';
                break;
            case "Vila Mariana":
                imagemBairro = 'https://link-da-imagem.com/vilamariana.jpg';
                break;
            case "Vila Matilde":
                imagemBairro = 'https://link-da-imagem.com/vilamatilde.jpg';
                break;
            case "Vila Medeiros":
                imagemBairro = 'https://link-da-imagem.com/vilamedeiros.jpg';
                break;
            case "Vila Prudente":
                imagemBairro = 'https://link-da-imagem.com/vilaprudente.jpg';
                break;
            case "Vila Sonia":
                imagemBairro = 'https://link-da-imagem.com/vilasonia.jpg';
                break;
            default:
                imagemBairro = 'https://images.jota.info/wp-content/uploads/2018/05/7adb8b1ddf3616387c34bf88523cc302-scaled.jpg'; 
        }
        banner.style.backgroundImage = 'url(' + imagemBairro + ')';
    }


    // fazer as setinhas funcionarem
    function mudarImagem(indice) {
        indiceAtual = (indiceAtual + indice + bairros.length) % bairros.length;
        atualizarImagem();
    }
    
    function sincronizarComDropdown() {
        const bairroSelecionado = document.getElementById('bairro').value;
        indiceAtual = bairros.indexOf(bairroSelecionado);
        atualizarImagem();
    }
    
    setinhaEsquerda.addEventListener('click', () => mudarImagem(-1));
    setinhaDireita.addEventListener('click', () => mudarImagem(1));
    
    document.getElementById('bairro').addEventListener('change', sincronizarComDropdown);
    
    atualizarImagem();

=======
    anoInput.addEventListener('click', () => {
        bordaNormal(anoInput);
    });

    bairroInput.addEventListener('click', () => {
        bordaNormal(bairroInput);
    });


>>>>>>> a30fd63cdf0eac269541f03c48ccac8540bf4a16
    // Filtro de bairros
    inputSearch.oninput = () => {
        const valorPesquisa = inputSearch.value.toLowerCase();
        content.innerHTML = ""; // Limpa os resultados anteriores
    }