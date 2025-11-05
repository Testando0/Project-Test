// --- CONSTANTES DO PLAYER ---
const IFRAME_BASE_URL = 'https://embedtv-5.icu/'; // Base para o iframe do canal

// --- LISTA DE CANAIS COMPLETA ---
const ALL_CHANNELS = [
    // Canais Abertos 📺
    { id: 'globo', name: 'Globo', category: 'Canais Abertos', logo: 'https://i.imgur.com/K3t5o5r.png' },
    { id: 'sbt', name: 'SBT', category: 'Canais Abertos', logo: 'https://i.imgur.com/T09KjFj.png' },
    { id: 'record', name: 'Record TV', category: 'Canais Abertos', logo: 'https://i.imgur.com/8Q0b12C.png' },
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

// --- VARIÁVEIS DE ESTADO DO PLAYER ---
let channels = ALL_CHANNELS; 
let currentChannelIndex = -1;
let isChannelListOpen = false;
let focusedChannelItem = null;
let infoOverlayTimeout;

// --- VARIÁVEIS DO SISTEMA DE AUTENTICAÇÃO E RECARGA ---
let rechargeData = { VALID_CODES: {}, MS_PER_DAY: 0 };
let refreshInterval;
const REFRESH_INTERVAL_MS = 10 * 60 * 1000; // 10 minutos para revalidar a sessão

// --- ELEMENTOS DO DOM (PLAYER) ---
const channelListElement = document.getElementById('channel-list');
const playerFrame = document.getElementById('player-frame');
const noChannelSelectedOverlay = document.getElementById('no-channel-selected');
const channelInfoOverlay = document.getElementById('channel-info-overlay');
const currentChannelNameSpan = document.getElementById('current-channel-name');

// --- (NOVAS) FUNÇÕES DE AUTENTICAÇÃO E RECARGA ---

/**
 * Carrega os códigos de recarga a partir do code.json.
 * Esta função agora é assíncrona.
 */
async function loadRechargeCodes() {
    try {
        const response = await fetch('code.json'); // Carrega o arquivo
        if (!response.ok) {
            console.warn('code.json não encontrado. Usando dados de recarga vazios.');
            // 86400000 ms = 1 dia
            return { VALID_CODES: {}, MS_PER_DAY: 86400000 }; 
        }
        const data = await response.json();
        console.log("Códigos de recarga carregados com sucesso do code.json.");
        return { 
            VALID_CODES: data.VALID_CODES || {},
            MS_PER_DAY: data.MS_PER_DAY || 86400000 
        };
    } catch (error) {
        console.error('Falha ao carregar ou processar code.json:', error);
        // Tenta exibir a mensagem na tela de recarga, se já existir
        const rechargeMessage = document.getElementById('recharge-message');
        if (rechargeMessage) {
            rechargeMessage.textContent = 'Erro ao carregar dados de recarga.';
            rechargeMessage.style.color = 'var(--accent-color)';
        }
        return { VALID_CODES: {}, MS_PER_DAY: 86400000 };
    }
}

/**
 * Exibe a tela correta (auth, recharge, ou main).
 */
function showScreen(screenName) {
    // Seleciona os contêineres globais (definidos em DOMContentLoaded)
    const mainContent = document.getElementById('main-content');
    const authContainer = document.getElementById('auth-container');
    const rechargeContainer = document.getElementById('recharge-container');
    const accountMenu = document.getElementById('account-menu');
    const redeemCodeModal = document.getElementById('redeem-code-modal');
    const modalOverlay = document.getElementById('modal-overlay');

    // Esconde todos
    mainContent.classList.add('hidden');
    authContainer.classList.add('hidden');
    rechargeContainer.classList.add('hidden');
    
    // Esconde itens de menu/modal
    if (accountMenu) accountMenu.classList.add('hidden'); 
    if (redeemCodeModal) redeemCodeModal.classList.add('hidden'); 
    if (modalOverlay) modalOverlay.classList.add('hidden'); 

    // Mostra o específico
    if (screenName === 'auth') authContainer.classList.remove('hidden');
    else if (screenName === 'recharge') rechargeContainer.classList.remove('hidden');
    else if (screenName === 'main') mainContent.classList.remove('hidden');
}

/**
 * Faz logout da sessão do usuário.
 */
function logoutSession() {
    localStorage.removeItem('tv_express_currentUser'); // Chave de app atualizada
    if(refreshInterval) clearInterval(refreshInterval);
    
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    if (loginForm) loginForm.reset();
    if (loginMessage) loginMessage.textContent = '';
    
    showScreen('auth');
}

/**
 * Deleta a conta do usuário atual.
 */
function deleteAccount() {
    const currentUser = localStorage.getItem('tv_express_currentUser');
    if (confirm(`Tem certeza que deseja DELETAR a conta "${currentUser}"? Esta ação é irreversível.`)) {
        const users = JSON.parse(localStorage.getItem('tv_express_users')) || {};
        delete users[currentUser];
        localStorage.setItem('tv_express_users', JSON.stringify(users));
        alert("Conta deletada com sucesso.");
        logoutSession();
    }
}

/**
 * Verifica a sessão do usuário e decide qual tela mostrar.
 */
function checkSession() {
    const currentUser = localStorage.getItem('tv_express_currentUser');
    const welcomeMessage = document.getElementById('welcome-message');
    const userSession = document.getElementById('user-session');

    if (!currentUser) {
        showScreen('auth');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('tv_express_users')) || {};
    const userData = users[currentUser];

    if (userData && userData.accessExpires && userData.accessExpires > Date.now()) {
        // --- SESSÃO VÁLIDA ---
        welcomeMessage.textContent = `Olá, ${currentUser}!`;
        userSession.classList.remove('hidden');
        showScreen('main');
        
        // --- INICIALIZA O PLAYER DE TV (LÓGICA ORIGINAL) ---
        populateChannelList();
        noChannelSelectedOverlay.classList.add('active'); 
        startRefreshTimer(); // Inicia o timer de verificação de expiração
    } else {
        // --- SESSÃO EXPIRADA ---
        showScreen('recharge');
    }
}

/**
 * Processa um código de recarga.
 */
function processRechargeCode(code, currentUser, messageElement, isRechargeScreen = false) {
    const users = JSON.parse(localStorage.getItem('tv_express_users'));
    if (!users || !users[currentUser]) {
        messageElement.textContent = 'Erro: Usuário não encontrado.';
        messageElement.style.color = 'var(--accent-color)';
        return;
    }
    const userData = users[currentUser];

    const validCodes = rechargeData.VALID_CODES;
    const MS_PER_DAY = rechargeData.MS_PER_DAY; 

    if (!validCodes[code]) {
        messageElement.textContent = 'Código de recarga inválido!';
        messageElement.style.color = 'var(--accent-color)';
        return; 
    }
    if (userData.usedCodes && userData.usedCodes.includes(code)) {
        messageElement.textContent = 'Este código já foi utilizado por você!';
        messageElement.style.color = 'var(--accent-color)';
        return; 
    }

    const durationInDays = validCodes[code]; 
    const durationInMs = durationInDays * MS_PER_DAY; 
    
    const startTime = (userData.accessExpires && userData.accessExpires > Date.now()) 
                    ? userData.accessExpires 
                    : Date.now();
    
    userData.accessExpires = startTime + durationInMs;
    
    if (!userData.usedCodes) { 
        userData.usedCodes = [];
    }
    userData.usedCodes.push(code);

    localStorage.setItem('tv_express_users', JSON.stringify(users));

    messageElement.textContent = `Código ativado! Adicionado ${durationInDays} dia(s) de acesso.`;
    messageElement.style.color = 'lightgreen';
    
    if (isRechargeScreen) {
        setTimeout(() => checkSession(), 1500);
    } else {
        const redeemCodeModal = document.getElementById('redeem-code-modal');
        const modalOverlay = document.getElementById('modal-overlay');
        const redeemForm = document.getElementById('redeem-form');
        
        setTimeout(() => {
            redeemCodeModal.classList.add('hidden');
            modalOverlay.classList.add('hidden');
            redeemForm.reset();
            messageElement.textContent = '';
        }, 2000);
    }
}

/**
 * Reinicia o timer que verifica a sessão.
 */
function startRefreshTimer() {
    if (refreshInterval) {
        clearInterval(refreshInterval);
    }
    refreshInterval = setInterval(refreshPlayer, REFRESH_INTERVAL_MS);
}

/**
 * É chamado pelo timer para verificar se a sessão ainda é válida.
 */
function refreshPlayer() {
    console.log(`Atualizando verificação de sessão (${new Date().toLocaleTimeString()}).`);
    
    const currentUser = localStorage.getItem('tv_express_currentUser');
    const users = JSON.parse(localStorage.getItem('tv_express_users')) || {};
    const userData = users[currentUser];
    
    if (userData && userData.accessExpires && userData.accessExpires > Date.now()) {
        // Sessão OK. Apenas recarrega o iframe para manter a conexão (opcional, mas bom)
        playerFrame.src = playerFrame.src; 
    } else {
        // Sessão expirou
        clearInterval(refreshInterval);
        alert("Sua sessão expirou. Por favor, recarregue seu acesso.");
        checkSession(); // Redireciona para a tela de recarga
    }
}


// --- (ANTIGAS) FUNÇÕES DO PLAYER ---

/**
 * Preenche a lista de canais no menu lateral, agrupando por categoria.
 */
function populateChannelList() {
    channelListElement.innerHTML = '<div class="channel-list-header">Canais</div>'; 
    
    const channelsByCategory = channels.reduce((acc, channel) => {
        const category = channel.category || 'Outros';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(channel);
        return acc;
    }, {});
    
    Object.keys(channelsByCategory).forEach(category => {
        const categoryHeader = document.createElement('div');
        categoryHeader.classList.add('channel-category-header');
        categoryHeader.textContent = category;
        channelListElement.appendChild(categoryHeader);

        channelsByCategory[category].forEach((channel, indexOffset) => {
             const index = channels.findIndex(c => c.id === channel.id);
             
             const channelItem = document.createElement('a');
             channelItem.href = '#'; 
             channelItem.classList.add('channel-item');
             channelItem.setAttribute('data-index', index); 
             channelItem.setAttribute('tabindex', '0'); 

             const channelLogo = document.createElement('img');
             channelLogo.src = channel.logo || 'https://via.placeholder.com/40x40.png?text=TV'; 
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
    toggleChannelList(false); // Fecha o menu
    
    // **NOVO**: Reinicia o timer de verificação de sessão
    startRefreshTimer();
}

/**
 * Exibe o nome do canal atual por alguns segundos.
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
 */
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
    } else {
        if (currentChannelIndex === -1) {
            noChannelSelectedOverlay.classList.add('active');
        }
        if (focusedChannelItem && focusedChannelItem.blur) {
             focusedChannelItem.blur();
        }
    }
}


// --- Inicialização (DOM Content Loaded) ---
document.addEventListener('DOMContentLoaded', async () => { // <--- ASYNC
    
    // --- (NOVOS) ELEMENTOS DO DOM (AUTH) ---
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const rechargeForm = document.getElementById('recharge-form');
    const redeemForm = document.getElementById('redeem-form'); 
    
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    
    const rechargeLogoutButton = document.getElementById('recharge-logout-button'); 
    const settingsIcon = document.getElementById('settings-icon');
    const accountMenu = document.getElementById('account-menu');
    const menuLogoutButton = document.getElementById('menu-logout');
    const menuDeleteButton = document.getElementById('menu-delete-account');
    const menuRedeemCodeButton = document.getElementById('menu-redeem-code'); 
    const closeRedeemModalButton = document.getElementById('close-redeem-modal'); 
    
    const redeemCodeModal = document.getElementById('redeem-code-modal'); 
    const modalOverlay = document.getElementById('modal-overlay'); 

    const loginMessage = document.getElementById('login-message');
    const registerMessage = document.getElementById('register-message');
    const rechargeMessage = document.getElementById('recharge-message');
    const redeemMessage = document.getElementById('redeem-message'); 

    // --- (NOVO) CARREGAMENTO DOS CÓDIGOS ---
    rechargeData = await loadRechargeCodes(); // <--- AWAIT

    // --- (NOVOS) EVENT LISTENERS DE AUTENTICAÇÃO E RECARGA ---

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const users = JSON.parse(localStorage.getItem('tv_express_users')) || {};

        if (users[username]) {
            registerMessage.textContent = 'Este usuário já existe!';
            registerMessage.style.color = 'var(--accent-color)';
        } else {
            users[username] = { 
                password: password, 
                accessExpires: null, // Começa sem acesso
                usedCodes: [] 
            };
            localStorage.setItem('tv_express_users', JSON.stringify(users));
            
            registerMessage.textContent = 'Conta criada! Faça o login.';
            registerMessage.style.color = 'lightgreen';
            setTimeout(() => showLoginLink.click(), 2000);
        }
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const users = JSON.parse(localStorage.getItem('tv_express_users')) || {};
        const userData = users[username];

        if (userData && userData.password === password) {
            localStorage.setItem('tv_express_currentUser', username);
            checkSession(); // <--- Ponto de entrada para o app
        } else {
            loginMessage.textContent = 'Usuário ou senha incorretos!';
            loginMessage.style.color = 'var(--accent-color)';
        }
    });

    rechargeLogoutButton.addEventListener('click', logoutSession);
    menuLogoutButton.addEventListener('click', logoutSession);
    
    settingsIcon.addEventListener('click', (e) => {
        e.stopPropagation(); 
        accountMenu.classList.toggle('hidden');
    });

    menuDeleteButton.addEventListener('click', deleteAccount);
    
    menuRedeemCodeButton.addEventListener('click', () => {
        accountMenu.classList.add('hidden'); 
        redeemCodeModal.classList.remove('hidden');
        modalOverlay.classList.remove('hidden');
        redeemForm.reset();
        redeemMessage.textContent = '';
    });

    closeRedeemModalButton.addEventListener('click', () => {
        redeemCodeModal.classList.add('hidden');
        modalOverlay.classList.add('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!accountMenu.classList.contains('hidden') && !e.target.closest('#user-session')) {
            accountMenu.classList.add('hidden');
        }
        if (!redeemCodeModal.classList.contains('hidden') && e.target.id === 'modal-overlay') {
            redeemCodeModal.classList.add('hidden');
            modalOverlay.classList.add('hidden');
        }
    });

    rechargeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const code = document.getElementById('recharge-code').value.toUpperCase();
        const currentUser = localStorage.getItem('tv_express_currentUser');
        processRechargeCode(code, currentUser, rechargeMessage, true);
    });
    
    redeemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Usa o input do modal, que tem ID diferente
        const code = document.getElementById('redeem-code-modal-input').value.toUpperCase(); 
        const currentUser = localStorage.getItem('tv_express_currentUser');
        processRechargeCode(code, currentUser, redeemMessage, false);
    });

    showRegisterLink.addEventListener('click', () => {
        document.getElementById('login-form-container').classList.add('hidden');
        document.getElementById('register-form-container').classList.remove('hidden');
        loginMessage.textContent = '';
    });
    showLoginLink.addEventListener('click', () => {
        document.getElementById('register-form-container').classList.add('hidden');
        document.getElementById('login-form-container').classList.remove('hidden');
        registerMessage.textContent = '';
    });


    // --- (ANTIGO) EVENT LISTENER DE NAVEGAÇÃO ---
    // (Agora é registrado junto com os outros)
    document.addEventListener('keydown', (e) => {
        let handled = false;

        if (isChannelListOpen) {
            // Lógica de navegação quando o menu está aberto
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
            // Lógica de navegação quando o player está em tela cheia
            switch (e.key) {
                case 'Enter':
                case ' ':
                case 'ArrowRight':
                    toggleChannelList(true); 
                    handled = true;
                    break;
                case 'ArrowUp':
                case 'ArrowDown':
                    if (channels.length > 0) {
                        let newIndex = currentChannelIndex;
                        if (currentChannelIndex === -1) {
                             newIndex = 0;
                        } else if (e.key === 'ArrowUp') {
                            newIndex = (currentChannelIndex - 1 + channels.length) % channels.length;
                        } else if (e.key === 'ArrowDown') {
                            newIndex = (currentChannelIndex + 1) % channels.length;
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

    // --- (NOVO) PONTO DE INICIALIZAÇÃO ---
    // Esta função só será chamada DEPOIS que o await loadRechargeCodes() terminar
    checkSession();
});
