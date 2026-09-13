# 🔐 Discord Token Injector

> Extensão para navegador baseada em **Chrome Extension Manifest V3**, desenvolvida para estudos de extensão, automação e manipulação de armazenamento local em aplicações web.



\

## 📌 Sobre o projeto

Este projeto é uma extensão experimental desenvolvida para estudar como extensões de navegador podem:

* criar interfaces através de `popup.html`;
* executar JavaScript em uma aba ativa;
* utilizar APIs da extensão do Chrome;
* trabalhar com `localStorage`;
* interagir com páginas autorizadas;
* automatizar tarefas dentro de um ambiente controlado.

O projeto utiliza **Manifest V3** e possui integração específica com páginas do Discord.

## 🛠️ Tecnologias

* **JavaScript**
* **HTML5**
* **Chrome Extensions API**
* **Manifest V3**
* **Chrome Scripting API**
* **Web Storage API**

## 📂 Estrutura

```text
Ext-Drop-and-Inject-token-in-discord/
│
├── .vscode/
│
├── manifest.json
├── popup.html
└── popup.js
```

### `manifest.json`

Define as configurações da extensão, incluindo:

* nome e versão;
* popup principal;
* permissões da extensão;
* acesso à API de scripting;
* domínio autorizado.

A extensão utiliza atualmente **Manifest V3**.

### `popup.html`

Responsável pela interface gráfica da extensão.

O popup contém os controles utilizados para interação com a extensão e exibe mensagens de status ao usuário.

### `popup.js`

Contém a lógica principal da extensão, incluindo comunicação com a aba ativa e execução de scripts através da API `chrome.scripting`.

## 🚀 Instalação para desenvolvimento

1. Clone o repositório:

```bash
git clone https://github.com/m1vz/Ext-Drop-and-Inject-token-in-discord.git
```

2. Abra o navegador baseado em Chromium.

3. Acesse:

```text
chrome://extensions/
```

4. Ative o **Modo do desenvolvedor**.

5. Clique em **Carregar sem compactação**.

6. Selecione a pasta do projeto.

A extensão aparecerá na lista de extensões instaladas localmente.

## ⚠️ Segurança

**Tokens de sessão são credenciais sensíveis.**

Não compartilhe tokens, não publique tokens em repositórios e não utilize este projeto para acessar contas de terceiros.

Este projeto deve ser utilizado somente em ambientes e contas para os quais você possui autorização.

Se um token for exposto acidentalmente, considere-o comprometido e tome as medidas necessárias para proteger a conta.

## 🧪 Objetivo educacional

O projeto foi criado como um experimento para estudar:

```text
Browser Extensions
       ↓
Manifest V3
       ↓
Chrome APIs
       ↓
JavaScript Injection
       ↓
Web Storage
       ↓
DOM / Browser Context
```

Ele pode servir como base para estudos futuros envolvendo extensões, automação de navegador e segurança web.

## 🔮 Possíveis melhorias

* [ ] Interface mais moderna
* [ ] Sistema de configurações
* [ ] Melhor tratamento de erros
* [ ] Logs de execução
* [ ] Validação de permissões
* [ ] Suporte a temas claro/escuro
* [ ] Testes automatizados
* [ ] Documentação técnica mais completa

## 👤 Autor

**m1vz**

Desenvolvido para estudos de programação, extensões de navegador e segurança.

---

### ⚠️ Disclaimer

Este projeto é fornecido para fins educacionais e de pesquisa.

O autor não se responsabiliza pelo uso indevido da extensão ou por acesso não autorizado a contas, sistemas ou dados de terceiros.

**Nunca compartilhe suas credenciais ou tokens de sessão.**
