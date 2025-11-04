const API_URL = 'https://embedtv.digital/api/channels'; // API para buscar a lista de canais
const IFRAME_BASE_URL = 'https://embedtv-5.icu/'; // Base para o iframe do canal

const channelListElement = document.getElementById('channel-list');
const playerFrame = document.getElementById('player-frame');
const noChannelSelectedOverlay = document.getElementById('no-channel-selected');
const channelInfoOverlay = document.getElementById('channel-info-overlay');
const currentChannelNameSpan = document.getElementById('current-channel-name');

let channels = [];
let currentChannelIndex = -1; // Indica qual canal está ativo
let isChannelListOpen = false;
let focusedChannelItem = null; // Para controle de foco com teclado/controle remoto
let infoOverlayTimeout; // Para esconder o overlay do nome do canal

// --- Funções Principais ---

async function fetchChannels() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        const data = await response.json();
        
        // A API retorna um objeto onde as chaves são os nomes dos canais e os valores são os dados.
        // Precisamos converter para um array para facilitar a iteração.
        channels = Object.keys(data).map(key => ({
            id: key, // O 'id' será a chave usada na URL do iframe
            name: data[key].name || key, // Usa o nome da API, senão a própria chave
            logo: data[key].logo || 'https://via.placeholder.com/40x40.png?text=TV' // Logo padrão se não houver
        }));
        
        populateChannelList();
        
        // Foca no primeiro canal se a lista abrir logo de cara, ou em um canal padrão
        if (channels.length > 0) {
            focusedChannelItem = channelListElement.querySelector('.channel-item');
            if (focusedChannelItem) {
                focusedChannelItem.focus();
            }
        }

    } catch (error) {
        console.error("Erro ao buscar canais:", error);
        noChannelSelectedOverlay.innerHTML = `<p>Erro ao carregar canais. Tente novamente mais tarde.</p><p>${error.message}</p>`;
        noChannelSelectedOverlay.classList.add('active');
    }
}

function populateChannelList() {
    channelListElement.innerHTML = '<div class="channel-list-header">Canais</div>'; // Limpa e adiciona o cabeçalho
    channels.forEach((channel, index) => {
        const channelItem = document.createElement('a');
        channelItem.href = '#'; // Para ser focável
        channelItem.classList.add('channel-item');
        channelItem.setAttribute('data-index', index);
        channelItem.setAttribute('tabindex', '0'); // Torna focável com teclado/controle

        const channelLogo = document.createElement('img');
        channelLogo.src = channel.logo;
        channelLogo.alt = `${channel.name} Logo`;
        channelItem.appendChild(channelLogo);

        const channelName = document.createElement('span');
        channelName.textContent = channel.name;
        channelItem.appendChild(channelName);

        channelItem.addEventListener('click', (event) => {
            event.preventDefault(); // Evita navegação padrão
            selectChannel(index);
        });

        // Eventos para controle remoto/navegação com teclado
        channelItem.addEventListener('focus', () => {
            focusedChannelItem = channelItem;
        });

        channelListElement.appendChild(channelItem);
    });
}

function selectChannel(index) {
    if (index < 0 || index >= channels.length) return;

    const selectedChannel = channels[index];
    const iframeSrc = `${IFRAME_BASE_URL}${selectedChannel.id}`;
    
    playerFrame.src = iframeSrc;
    currentChannelIndex = index;

    // Atualiza a classe 'active' nos itens da lista
    const currentActive = document.querySelector('.channel-item.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }
    const newActive = channelListElement.querySelector(`[data-index="${index}"]`);
    if (newActive) {
        newActive.classList.add('active');
        // Garante que o item ativo esteja visível na lista
        newActive.scrollIntoView({ behavior: 'smooth', block: 'center' });
        focusedChannelItem = newActive; // Mantém o foco no item ativo
    }

    // Esconde o overlay de "selecione um canal"
    noChannelSelectedOverlay.classList.remove('active');

    // Mostra o nome do canal por alguns segundos
    showChannelInfo(selectedChannel.name);

    // Fecha a lista de canais automaticamente após selecionar um
    toggleChannelList(false);
}

function showChannelInfo(name) {
    clearTimeout(infoOverlayTimeout);
    currentChannelNameSpan.textContent = name;
    channelInfoOverlay.classList.add('show');
    infoOverlayTimeout = setTimeout(() => {
        channelInfoOverlay.classList.remove('show');
    }, 5000); // Esconde após 5 segundos
}

function toggleChannelList(open) {
    isChannelListOpen = open === undefined ? !isChannelListOpen : open;
    channelListElement.classList.toggle('active', isChannelListOpen);

    if (isChannelListOpen) {
        // Se a lista abriu, tenta focar no canal ativo ou no primeiro
        if (focusedChannelItem) {
            focusedChannelItem.focus();
        } else if (channels.length > 0) {
            channelListElement.querySelector('.channel-item').focus();
        }
        noChannelSelectedOverlay.classList.remove('active'); // Esconde o overlay principal
    } else {
        // Se a lista fechou e nenhum canal foi selecionado, mostra o overlay inicial
        if (currentChannelIndex === -1) {
            noChannelSelectedOverlay.classList.add('active');
        }
        // Quando a lista fecha, o foco não deve estar mais em um item da lista.
        // O player (iframe) por padrão não é focável diretamente.
        // Em um ambiente de TV, o foco volta para "nada" ou para um elemento principal.
        // Aqui, podemos tirar o foco explicitamente se necessário, mas geralmente não é um problema.
    }
}

// --- Navegação por Controle Remoto (ou Teclado) ---
document.addEventListener('keydown', (e) => {
    let handled = false;

    // Se a lista de canais estiver aberta
    if (isChannelListOpen) {
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
            case 'Enter': // Botão OK/Enter
            case ' ': // Espaço (também pode funcionar como OK)
                if (focusedChannelItem) {
                    const index = parseInt(focusedChannelItem.getAttribute('data-index'));
                    selectChannel(index);
                    handled = true;
                }
                break;
            case 'Backspace': // Botão Voltar (comum em TVs)
            case 'Escape': // Esc
            case 'ArrowLeft': // Seta para esquerda (fecha a lista)
                toggleChannelList(false);
                handled = true;
                break;
        }
    } else { // Se a lista de canais estiver fechada (assistindo TV)
        switch (e.key) {
            case 'Enter': // Botão OK/Enter
            case ' ': // Espaço
            case 'ArrowRight': // Seta para direita (também pode abrir)
                toggleChannelList(true); // Abre a lista
                handled = true;
                break;
            case 'Backspace': // Botão Voltar (comum em TVs)
            case 'Escape': // Esc
                // Se o player está em tela cheia, pode sair dela.
                // Se não, pode ser usado para alguma outra ação ou ignorado.
                // Por agora, não faremos nada específico a menos que queira uma navegação mais complexa.
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                // Se houver lógica de "próximo/anterior canal" sem abrir a lista, pode ser implementado aqui
                // Ex: currentChannelIndex++, selectChannel(currentChannelIndex)
                if (e.key === 'ArrowUp') {
                    if (currentChannelIndex === -1) {
                         selectChannel(0); // Seleciona o primeiro se nenhum estiver ativo
                    } else if (currentChannelIndex > 0) {
                        selectChannel(currentChannelIndex - 1);
                    }
                } else if (e.key === 'ArrowDown') {
                    if (currentChannelIndex === -1) {
                        selectChannel(0); // Seleciona o primeiro se nenhum estiver ativo
                    } else if (currentChannelIndex < channels.length - 1) {
                        selectChannel(currentChannelIndex + 1);
                    }
                }
                handled = true;
                break;
        }
    }

    if (handled) {
        e.preventDefault(); // Previne o comportamento padrão do navegador (ex: scroll)
    }
});

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    fetchChannels();
    // Exibe a mensagem inicial "Selecione um canal..."
    noChannelSelectedOverlay.classList.add('active');
});

// Entrar em tela cheia automaticamente (pode precisar de interação do usuário em alguns navegadores)
function enterFullscreen() {
    const elem = document.documentElement; // A página inteira
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

// Chame isso depois que o usuário interagir, por exemplo, ao selecionar um canal
// Ou, se puder, ao carregar a página (alguns navegadores bloqueiam sem interação)
// document.addEventListener('click', enterFullscreen); // Exemplo de como chamar após interação
