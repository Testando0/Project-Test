const IFRAME_BASE_URL = 'https://embedcanais.com/'; // Base para o iframe do canal

// --- LISTA DE CANAIS COMPLETA EXTRAÍDA DO SEU CÓDIGO HTML ---
// Observação: Logotipos genéricos (i.imgur.com) foram adicionados para simular a exibição de ícones.
const ALL_CHANNELS = [
    // Canais Abertos 📺
    { id: 'globo', name: 'Globo', category: 'Canais Abertos', logo: 'https://i.imgur.com/K3t5o5r.png' },
    { id: 'sbt', name: 'SBT', category: 'Canais Abertos', logo: 'https://i.imgur.com/T09KjFj.png' },
    { id: 'recordsp', name: 'Record TV', category: 'Canais Abertos', logo: 'https://i.imgur.com/8Q0b12C.png' },
    { id: 'band', name: 'Band', category: 'Canais Abertos', logo: 'https://i.imgur.com/Qv3lM0v.png' },
    { id: 'redetv', name: 'RedeTV!', category: 'Canais Abertos', logo: 'https://i.imgur.com/B7X8u0R.png' },
    { id: 'cultura', name: 'TV Cultura', category: 'Canais Abertos', logo: 'https://i.imgur.com/2Xy5v4a.png' },
    
    // Filmes e Séries 🎬
    { id: 'telecinepremium', name: 'TC Premium', category: 'Filmes e Séries', logo: 'https://i.imgur.com/y0vY89G.png' },
    { id: 'telecineaction', name: 'TC Action', category: 'Filmes e Séries', logo: 'https://i.imgur.com/Y3y0d8F.png' },
    { id: 'telecinetouch', name: 'TC Touch', category: 'Filmes e Séries', logo: 'https://i.imgur.com/W2o207f.png' },
    { id: 'telecinefun', name: 'TC Fun', category: 'Filmes e Séries', logo: 'https://i.imgur.com/V7cT5qD.png' },
    { id: 'telecinepipoca', name: 'TC Pipoca', category: 'Filmes e Séries', logo: 'https://i.imgur.com/A6j8t2Z.png' },
    { id: 'telecinecult', name: 'TC Cult', category: 'Filmes e Séries', logo: 'https://i.imgur.com/G5g2j8t.png' },
    { id: 'hbo', name: 'HBO', category: 'Filmes e Séries', logo: 'https://i.imgur.com/a9c1eLd.png' },
    { id: 'hbo2', name: 'HBO 2', category: 'Filmes e Séries', logo: 'https://i.imgur.com/rXb2g4o.png' },
    { id: 'hboplus', name: 'HBO Plus', category: 'Filmes e Séries', logo: 'https://i.imgur.com/qE4l5zZ.png' },
    { id: 'hbofamily', name: 'HBO Family', category: 'Filmes e Séries', logo: 'https://i.imgur.com/b7z0JmQ.png' },
    { id: 'hbomundi', name: 'HBO Mundi', category: 'Filmes e Séries', logo: 'https://i.imgur.com/y1vC8Gj.png' },
    { id: 'hbopop', name: 'HBO Pop', category: 'Filmes e Séries', logo: 'https://i.imgur.com/o5Z0T8w.png' },
    { id: 'hboxtreme', name: 'HBO Xtreme', category: 'Filmes e Séries', logo: 'https://i.imgur.com/c6f7s5s.png' },
    { id: 'megapix', name: 'Megapix', category: 'Filmes e Séries', logo: 'https://i.imgur.com/E1L4Z2a.png' },
    { id: 'universaltv', name: 'Universal', category: 'Filmes e Séries', logo: 'https://i.imgur.com/v8t0P9j.png' },
    { id: 'warnerchannel', name: 'Warner', category: 'Filmes e Séries', logo: 'https://i.imgur.com/D4s0vR7.png' },
    { id: 'sonychannel', name: 'Sony', category: 'Filmes e Séries', logo: 'https://i.imgur.com/X9y3o5N.png' },
    { id: 'adultswim', name: 'Adultswim', category: 'Filmes e Séries', logo: 'https://i.imgur.com/Q2y8c7P.png' },
    { id: 'space', name: 'Space', category: 'Filmes e Séries', logo: 'https://i.imgur.com/P1t4w8h.png' },
    { id: 'tcm', name: 'Tcm', category: 'Filmes e Séries', logo: 'https://i.imgur.com/U9z6G7K.png' },
    { id: 'tnt', name: 'Tnt', category: 'Filmes e Séries', logo: 'https://i.imgur.com/X4s9y2r.png' },
    { id: 'tntnovelas', name: 'Tnt Novelas', category: 'Filmes e Séries', logo: 'https://i.imgur.com/B8o0L4j.png' },
    { id: 'tntseries', name: 'Tnt Séries', category: 'Filmes e Séries', logo: 'https://i.imgur.com/W3i9Q7v.png' },
    
    // Esportes ⚽🏀
    { id: 'pt_sportv1', name: 'SporTV 1', category: 'Esportes', logo: 'https://i.imgur.com/F5g3j8P.png' },
    { id: 'espn', name: 'ESPN', category: 'Esportes', logo: 'https://i.imgur.com/E0c1k5Z.png' },
    { id: 'espn2', name: 'ESPN 2', category: 'Esportes', logo: 'https://i.imgur.com/Y7t2w0M.png' },
    { id: 'espn3', name: 'ESPN 3', category: 'Esportes', logo: 'https://i.imgur.com/H1z4v9T.png' },
    { id: 'premiere', name: 'Premiere', category: 'Esportes', logo: 'https://i.imgur.com/U3j8k7L.png' },
    { id: 'combate', name: 'Combate', category: 'Esportes', logo: 'https://i.imgur.com/G4h9l0X.png' },
    { id: 'bandsports', name: 'Band Sports', category: 'Esportes', logo: 'https://i.imgur.com/A6z1i4K.png' },
    { id: 'fox-sports', name: 'Fox Sports', category: 'Esportes', logo: 'https://i.imgur.com/V9j7i2P.png' },
    
    // Infantil 👶
    { id: 'cartoonnetwork', name: 'Cartoon Network', category: 'Infantil', logo: 'https://i.imgur.com/T2o4v9E.png' },
    { id: 'nickelodeon', name: 'Nickelodeon', category: 'Infantil', logo: 'https://i.imgur.com/O6t3i8P.png' },
    { id: 'discoverykids', name: 'Discovery Kids', category: 'Infantil', logo: 'https://i.imgur.com/W1z0v4A.png' },
    { id: '24h_simpsons', name: 'Os Simpsons (24h)', category: 'Infantil', logo: 'https://i.imgur.com/X5c9l0W.png' },
    { id: '24h_odeiachris', name: 'Chris (24h)', category: 'Infantil', logo: 'https://i.imgur.com/Z8d1r6S.png' },
    { id: '24h_dragonball', name: 'Dragonball (24h)', category: 'Infantil', logo: 'https://i.imgur.com/A9f7k2Y.png' },
    
    // Notícias e Docs 📰
    { id: 'globonews', name: 'GloboNews', category: 'Notícias e Docs', logo: 'https://i.imgur.com/E2y5w0V.png' },
    { id: 'cnn-brasil', name: 'CNN Brasil', category: 'Notícias e Docs', logo: 'https://i.imgur.com/U7i2j8R.png' },
    { id: 'bandnews', name: 'BandNews', category: 'Notícias e Docs', logo: 'https://i.imgur.com/T9o4v6W.png' },
    { id: 'discovery-channel', name: 'Discovery Channel', category: 'Notícias e Docs', logo: 'https://i.imgur.com/P5i0k3G.png' },
    { id: 'history-channel', name: 'History Channel', category: 'Notícias e Docs', logo: 'https://i.imgur.com/L1n8j4D.png' },
    { id: 'natgeo', name: 'Nat Geo', category: 'Notícias e Docs', logo: 'https://i.imgur.com/R3c5v7O.png' },
    
    // Variedades e Música 🎶
    { id: 'multishow', name: 'Multishow', category: 'Variedades', logo: 'https://i.imgur.com/V0p3k9M.png' },
    { id: 'mtv', name: 'MTV', category: 'Variedades', logo: 'https://i.imgur.com/Q9y0r2X.png' },
    { id: 'gnt', name: 'GNT', category: 'Variedades', logo: 'https://i.imgur.com/A7y4gXp.png' }, // Adicionado GNT aqui
    { id: 'hgtv', name: 'HGTV', category: 'Variedades', logo: 'https://i.imgur.com/R3z7e0k.png' },
    { id: 'tlc', name: 'TLC', category: 'Variedades', logo: 'https://i.imgur.com/O0k2y4w.png' },
    { id: 'off', name: 'Canal OFF', category: 'Variedades', logo: 'https://i.imgur.com/D4o6l8J.png' },
    { id: 'viva', name: 'VIVA', category: 'Variedades', logo: 'https://i.imgur.com/Z7t2w0I.png' },
    { id: 'e-channel', name: 'E! Entertainment', category: 'Variedades', logo: 'https://i.imgur.com/W0p4k9Z.png' },
    { id: 'bis', name: 'Canal BIS', category: 'Variedades', logo: 'https://i.imgur.com/H5j0l3X.png' },
];

const channelListElement = document.getElementById('channel-list');
const playerFrame = document.getElementById('player-frame');
const noChannelSelectedOverlay = document.getElementById('no-channel-selected');
const channelInfoOverlay = document.getElementById('channel-info-overlay');
const currentChannelNameSpan = document.getElementById('current-channel-name');

let channels = ALL_CHANNELS; 
let currentChannelIndex = -1;
let isChannelListOpen = false;
let focusedChannelItem = null;
let infoOverlayTimeout;

// --- Funções Principais ---

/**
 * Preenche a lista de canais no menu lateral, agrupando por categoria.
 */
function populateChannelList() {
    channelListElement.innerHTML = '<div class="channel-list-header">Canais</div>'; 
    
    // Agrupa os canais por categoria para exibição no menu
    const channelsByCategory = channels.reduce((acc, channel) => {
        const category = channel.category || 'Outros';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(channel);
        return acc;
    }, {});
    
    // Renderiza a lista com cabeçalhos de categoria
    Object.keys(channelsByCategory).forEach(category => {
        const categoryHeader = document.createElement('div');
        categoryHeader.classList.add('channel-category-header');
        categoryHeader.textContent = category;
        channelListElement.appendChild(categoryHeader);

        channelsByCategory[category].forEach((channel, indexOffset) => {
             // Encontra o índice na lista plana para navegação UP/DOWN
             const index = channels.findIndex(c => c.id === channel.id);
             
             const channelItem = document.createElement('a');
             channelItem.href = '#'; 
             channelItem.classList.add('channel-item');
             channelItem.setAttribute('data-index', index); 
             channelItem.setAttribute('tabindex', '0'); 

             const channelLogo = document.createElement('img');
             channelLogo.src = channel.logo || 'https://via.placeholder.com/40x40.png?text=TV'; // Fallback para logo
             channelLogo.alt = `${channel.name} Logo`;
             channelItem.appendChild(channelLogo);

             const channelName = document.createElement('span');
             channelName.textContent = channel.name;
             channelItem.appendChild(channelName);

             channelItem.addEventListener('click', (event) => {
                 event.preventDefault(); 
                 selectChannel(index);
             });

             channelItem.addEventListener('focus', () => {
                 focusedChannelItem = channelItem;
             });

             channelListElement.appendChild(channelItem);
        });
    });
}

/**
 * Carrega o stream do canal selecionado no iframe e atualiza o estado.
 * @param {number} index - O índice do canal na lista ALL_CHANNELS.
 */
function selectChannel(index) {
    if (index < 0 || index >= channels.length) return;

    const selectedChannel = channels[index];
    
    // Monta a URL do iframe com o ID do canal
    const iframeSrc = `${IFRAME_BASE_URL}${selectedChannel.id}`;
    
    playerFrame.src = iframeSrc;
    currentChannelIndex = index;

    // Remove a classe 'active' do canal anterior
    const currentActive = document.querySelector('.channel-item.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }
    // Adiciona a classe 'active' ao novo canal
    const newActive = channelListElement.querySelector(`[data-index="${index}"]`);
    if (newActive) {
        newActive.classList.add('active');
        // Rola a lista para garantir que o item ativo esteja visível
        newActive.scrollIntoView({ behavior: 'smooth', block: 'center' });
        focusedChannelItem = newActive;
    }

    noChannelSelectedOverlay.classList.remove('active');
    showChannelInfo(selectedChannel.name);
    toggleChannelList(false); // Fecha o menu
}

/**
 * Exibe o nome do canal atual por alguns segundos.
 * @param {string} name - Nome do canal a ser exibido.
 */
function showChannelInfo(name) {
    clearTimeout(infoOverlayTimeout);
    currentChannelNameSpan.textContent = name;
    channelInfoOverlay.classList.add('show');
    infoOverlayTimeout = setTimeout(() => {
        channelInfoOverlay.classList.remove('show');
    }, 5000); 
}

/**
 * Abre ou fecha o menu lateral de canais.
 * @param {boolean} [open] - Define explicitamente se deve abrir (true) ou fechar (false). Se omitido, inverte o estado atual.
 */
function toggleChannelList(open) {
    isChannelListOpen = open === undefined ? !isChannelListOpen : open;
    channelListElement.classList.toggle('active', isChannelListOpen);

    if (isChannelListOpen) {
        // Tenta manter o foco no canal ativo ou no primeiro canal
        if (focusedChannelItem) {
            focusedChannelItem.focus();
        } else if (channels.length > 0) {
            channelListElement.querySelector('.channel-item').focus();
        }
        noChannelSelectedOverlay.classList.remove('active'); 
    } else {
         // Se a lista fechou e nenhum canal foi selecionado, mostra o overlay inicial
        if (currentChannelIndex === -1) {
            noChannelSelectedOverlay.classList.add('active');
        }
        // Tira o foco dos itens do menu para evitar navegação acidental
        if (focusedChannelItem && focusedChannelItem.blur) {
             focusedChannelItem.blur();
        }
    }
}

// --- Navegação por Controle Remoto (ou Teclado) ---
document.addEventListener('keydown', (e) => {
    let handled = false;

    if (isChannelListOpen) {
        // Lógica de navegação quando o menu está aberto
        const focusableChannels = Array.from(channelListElement.querySelectorAll('.channel-item'));
        let currentFocusIndex = focusableChannels.indexOf(focusedChannelItem);

        switch (e.key) {
            case 'ArrowDown': // Seta para baixo
                if (currentFocusIndex < focusableChannels.length - 1) {
                    currentFocusIndex++;
                    focusableChannels[currentFocusIndex].focus();
                    handled = true;
                }
                break;
            case 'ArrowUp': // Seta para cima
                if (currentFocusIndex > 0) {
                    currentFocusIndex--;
                    focusableChannels[currentFocusIndex].focus();
                    handled = true;
                }
                break;
            case 'Enter': // Botão OK/Enter (Seleciona o canal focado)
            case ' ': // Espaço
                if (focusedChannelItem) {
                    const index = parseInt(focusedChannelItem.getAttribute('data-index'));
                    selectChannel(index);
                    handled = true;
                }
                break;
            case 'Backspace': // Botão Voltar
            case 'Escape': // Esc
            case 'ArrowLeft': // Seta para esquerda (Fecha o menu)
                toggleChannelList(false);
                handled = true;
                break;
        }
    } else { 
        // Lógica de navegação quando o player está em tela cheia (menu fechado)
        switch (e.key) {
            case 'Enter': // Botão OK/Enter (Abre o menu)
            case ' ': // Espaço
            case 'ArrowRight': // Seta para direita (Abre o menu)
                toggleChannelList(true); 
                handled = true;
                break;
            case 'ArrowUp': // Canal anterior
            case 'ArrowDown': // Próximo canal
                if (channels.length > 0) {
                    let newIndex = currentChannelIndex;
                    if (currentChannelIndex === -1) {
                         newIndex = 0; // Se nenhum estiver ativo, começa pelo primeiro
                    } else if (e.key === 'ArrowUp') {
                        newIndex = (currentChannelIndex - 1 + channels.length) % channels.length; // Ciclo para cima
                    } else if (e.key === 'ArrowDown') {
                        newIndex = (currentChannelIndex + 1) % channels.length; // Ciclo para baixo
                    }
                    if (newIndex !== currentChannelIndex) {
                        selectChannel(newIndex);
                    }
                }
                handled = true;
                break;
        }
    }

    if (handled) {
        e.preventDefault(); 
    }
});

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    populateChannelList(); // Carrega os canais no DOM
    // Garante que o overlay inicial esteja ativo até que um canal seja selecionado
    noChannelSelectedOverlay.classList.add('active'); 
});
