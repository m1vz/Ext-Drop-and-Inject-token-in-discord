document.getElementById('loginBtn').addEventListener('click', async () => {
  const token = document.getElementById('tokenInput').value.trim();
  const status = document.getElementById('status');

  if (!token) {
    status.innerText = "Erro: Insira um token!";
    return;
  }

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab.url.includes("discord.com")) {
    status.innerText = "Erro: Vá para o Discord primeiro.";
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: injectToken,
    args: [token]
  });

  status.innerText = "Injetando... Recarregando.";
});

document.getElementById('extractBtn').addEventListener('click', async () => {
  const status = document.getElementById('status');
  const tokenOutput = document.getElementById('tokenOutput');
  const copyBtn = document.getElementById('copyBtn');

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab.url.includes("discord.com")) {
    status.innerText = "Erro: Vá para o Discord primeiro.";
    return;
  }

  status.innerText = "Extraindo...";

  // Executa a extração e espera o retorno
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: extractTokenFromPage
  }, (results) => {
    if (results && results[0].result) {
      const extractedToken = results[0].result;
      status.innerText = "Token extraído com sucesso!";
      tokenOutput.value = extractedToken;
      tokenOutput.style.display = 'block';
      copyBtn.style.display = 'block';
    } else {
      status.innerText = "Erro: Não foi possível encontrar o token.";
    }
  });
});

// Função para Copiar para o Clipboard
document.getElementById('copyBtn').addEventListener('click', () => {
  const tokenOutput = document.getElementById('tokenOutput');
  tokenOutput.select();
  document.execCommand('copy');
  document.getElementById('status').innerText = "Copiado para a área de transferência!";
});

/**
 * FUNÇÕES INJETADAS NO CONTEXTO DA PÁGINA (CONTENT SCRIPTS)
 */

// Função para Injetar
function injectToken(token) {
  localStorage.setItem('token', `"${token}"`);
  window.location.reload();
}

// Função para Extrair
function extractTokenFromPage() {
  // O token do Discord é armazenado como uma string entre aspas dentro do localStorage
  const token = localStorage.getItem('token');
  return token;
}