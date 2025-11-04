const API_URL = 'https://embedtv.digital/api/channels';
const IFRAME_BASE_URL = 'https://embedtv-5.icu/';

// Lista de Canais de Exemplo (Fallback) para teste do front-end
const FALLBACK_CHANNELS = [
    { id: 'rede-globo', name: 'Globo HD', logo: 'https://placehold.co/40x40/E50914/white?text=GLO' },
    { id: 'sbt-hd', name: 'SBT HD', logo: 'https://placehold.co/40x40/007FFF/white?text=SBT' },
    { id: 'record-tv', name: 'Record TV', logo: 'https://placehold.co/40x40/000000/white?text=REC' },
    { id: 'band-tv', name: 'Band', logo: 'https://placehold.co/40x40/FFC300/black?text=BAND' },
    { id: 'cnn-brasil', name: 'CNN Brasil', logo: 'https://placehold.co/40x40/333333/white?text=CNN' },
    { id: 'espn-br', name: 'ESPN Brasil', logo: 'https://placehold.co/40x40/00FF00/black?text=ESP' },
];


const channelListElement = document.getElementById('channel-list');
const playerFrame = document.getElementById('player-frame');
const noChannelSelectedOverlay = document.getElementById('no-channel-selected');
const channelInfoOverlay = document.getElementById('channel-info-overlay');
const currentChannelNameSpan = document.getElementById('current-channel-name');

let channels = [];
let currentChannelIndex = -1;
let isChannelListOpen = false;
let focusedChannelItem = null;
let infoOverlayTimeout;

// --- Funções Principais ---

async function fetchChannels() {
    let apiData = [];
    let useFallback = false;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            console.warn(`A API retornou um erro HTTP: ${response.status}. Usando canais de fallback.`);
            useFallback = true;
        } else {
            const data = await response.json();
            
            // Tenta processar o JSON retornado. 
            // Se for um objeto onde as chaves são os IDs dos canais (como no código anterior), funciona.
            if (typeof data === 'object' && !Array.isArray(data)) {
                apiData = Object.keys(data).map(key => ({
                    id: key, 
                    name: data[key].name || key,
                    logo: data[key].logo || 'https://via.placeholder.com/40x40.png?text=TV'
                }));
            } 
            // Se for um array de objetos, assume que o ID está no campo 'id'
            else if (Array.isArray(data)) {
                apiData = data.map(item => ({
                    id: item.id,
                    name: item.name,
                    logo: item.logo || 'https://via.placeholder.com/40x40.png?text=TV'
                }));
            } else {
                console.error("Estrutura da API desconhecida. Usando canais de fallback.");
                useFallback = true;
            }
        }
    } catch (error) {
        console.error("Erro ao tentar buscar canais da API. Usando canais de fallback.", error);
        useFallback = true;
    }

    if (useFallback || apiData.length === 0) {
        channels = FALLBACK_CHANNELS;
    } else {
        channels = apiData;
    }

    if (channels.length === 0) {
        noChannelSelectedOverlay.innerHTML = `<p>Não foi possível carregar nenhum canal.</p>`;
        noChannelSelectedOverlay.classList.add('active');
        return;
    }
    
    populateChannelList();
    
    // Foca no primeiro canal
    focusedChannelItem = channelListElement.querySelector('.channel-item');
    if (focusedChannelItem) {
        focusedChannelItem.focus();
    }
}


function populateChannelList() {
    channelListElement.innerHTML = '<div class="channel-list-header">Canais</div>'; 
    channels.forEach((channel, index) => {
        const channelItem = document.createElement('a');
        channelItem.href = '#'; 
        channelItem.classList.add('channel-item');
        channelItem.setAttribute('data-index', index);
        channelItem.setAttribute('tabindex', '0'); 

        const channelLogo = document.createElement('img');
        channelLogo.src = channel.logo;
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
}

function selectChannel(index) {
    if (index < 0 || index >= channels.length) return;

    const selectedChannel = channels[index];
    
    // ATENÇÃO: A URL é montada aqui: https://embedtv-5.icu/{channel_id}
    const iframeSrc = `${IFRAME_BASE_URL}${selectedChannel.id}`;
    
    playerFrame.src = iframeSrc;
    currentChannelIndex = index;

    const currentActive = document.querySelector('.channel-item.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }
    const newActive = channelListElement.querySelector(`[data-index="${index}"]`);
    if (newActive) {
        newActive.classList.add('active');
        newActive.scrollIntoView({ behavior: 'smooth', block: 'center' });
        focusedChannelItem = newActive;
    }

    noChannelSelectedOverlay.classList.remove('active');

    showChannelInfo(selectedChannel.name);

    toggleChannelList(false);
}

function showChannelInfo(name) {
    clearTimeout(infoOverlayTimeout);
    currentChannelNameSpan.textContent = name;
    channelInfoOverlay.classList.add('show');
    infoOverlayTimeout = setTimeout(() => {
        channelInfoOverlay.classList.remove('show');
    }, 5000); 
}

function toggleChannelList(open) {
    isChannelListOpen = open === undefined ? !isChannelListOpen : open;
    channelListElement.classList.toggle('active', isChannelListOpen);

    if (isChannelListOpen) {
        if (focusedChannelItem) {
            focusedChannelItem.focus();
        } else if (channels.length > 0) {
            channelListElement.querySelector('.channel-item').focus();
        }
        noChannelSelectedOverlay.classList.remove('active'); 
    }
}

// --- Navegação por Controle Remoto (ou Teclado) ---
document.addEventListener('keydown', (e) => {
    let handled = false;

    if (isChannelListOpen) {
        const focusableChannels = Array.from(channelListElement.querySelectorAll('.channel-item'));
        let currentFocusIndex = focusableChannels.indexOf(focusedChannelItem);

        switch (e.key) {
            case 'ArrowDown':
                if (currentFocusIndex < focusableChannels.length - 1) {
                    currentFocusIndex++;
                    focusableChannels[currentFocusIndex].focus();
                    handled = true;
                }
                break;
            case 'ArrowUp':
                if (currentFocusIndex > 0) {
                    currentFocusIndex--;
                    focusableChannels[currentFocusIndex].focus();
                    handled = true;
                }
                break;
            case 'Enter': 
            case ' ': 
                if (focusedChannelItem) {
                    const index = parseInt(focusedChannelItem.getAttribute('data-index'));
                    selectChannel(index);
                    handled = true;
                }
                break;
            case 'Backspace': 
            case 'Escape': 
            case 'ArrowLeft': 
                toggleChannelList(false);
                handled = true;
                break;
        }
    } else { 
        switch (e.key) {
            case 'Enter': 
            case ' ': 
            case 'ArrowRight': 
                toggleChannelList(true); 
                handled = true;
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                if (e.key === 'ArrowUp') {
                    if (currentChannelIndex === -1) {
                         selectChannel(0); 
                    } else if (currentChannelIndex > 0) {
                        selectChannel(currentChannelIndex - 1);
                    }
                } else if (e.key === 'ArrowDown') {
                    if (currentChannelIndex === -1) {
                        selectChannel(0); 
                    } else if (currentChannelIndex < channels.length - 1) {
                        selectChannel(currentChannelIndex + 1);
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
    fetchChannels();
    noChannelSelectedOverlay.classList.add('active');
});

