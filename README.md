# +PRATI- *Eduardo Borges* - repositório de atividades

## Instruções para quem quiser resolver exercicios de lógica de programação, utilizando a linguagem javascript. 

### Pré-requisitos
Para começar a trabalhar com este repositório, você precisará dos seguintes softwares instalados:

1. **Visual Studio Code** - Uma IDE leve e poderosa para desenvolvimento.
2. **Node.js** -Baixe e instale o Node.js 
3. **Git** - Controle de versão para acompanhar suas mudanças no código.
4. **GitHub** - Plataforma para hospedar seu código e colaborar com outros.

   
*1º Passo* - Instalação das ferramentas:

> Instalando o Visual Studio Code
1. Acesse o site oficial do Visual Studio Code: [Visual Studio Code](https://code.visualstudio.com/).
2. Clique em "Download" e selecione a versão para o seu sistema operacional.
3. Siga as instruções de instalação no assistente.

>  Instale o Node.js:
   - Acesse o site oficial do Node.js: [Node.js](https://nodejs.org/).
   - Clique em "Download" e selecione a versão recomendada para o seu sistema operacional.
   - Siga as instruções de instalação no assistente. O Node.js inclui o npm (Node Package Manager), que também pode ser útil.

   **Verifique a Instalação**:
   - Após a instalação, abra o **Terminal** ou **Prompt de Comando** e execute o comando abaixo para verificar se o Node.js foi instalado corretamente:
     ```bash
     node -v
     ```
     
>Instalando o Git
1. Acesse o site oficial do Git: [Git Downloads](https://git-scm.com/downloads).
2. Escolha o instalador correspondente ao seu sistema operacional.
3. Execute o instalador e siga as instruções padrão.

> Configurando o GitHub
1. Crie uma conta no GitHub se ainda não tiver uma: [GitHub Signup](https://github.com/join).
2. Após criar sua conta, configure o Git no seu computador:

>Como instalar e acessar o git bash**</br>

> Windows
1. **Instalar o Git Bash** (caso ainda não tenha):
   - Baixe e instale o [Git para Windows](https://git-scm.com/download/win).</br> Durante a instalação, selecione a opção de instalar o Git Bash.

> macOS
 **Terminal**:
   - O macOS já vem com o Bash instalado. Para acessá-lo, abra o **Terminal**.
   - Você pode encontrar o Terminal no Launchpad, na pasta **Aplicativos > Utilitários**, ou simplesmente procurando por "Terminal" no Spotlight.

>Linux
>**Terminal**:
   - No Linux, o Bash é o shell padrão para a maioria das distribuições. Para acessá-lo, abra o **Terminal**.
   - No Ubuntu, por exemplo, você pode abrir o Terminal através do atalho **Ctrl + Alt + T** ou procurando por "Terminal" no menu de aplicativos.

*2º Passo* - **Acessar o Bash**:
   - Após a instalação, clique com o botão direito do mouse em qualquer lugar na área de trabalho ou dentro de uma pasta.
   - Selecione **"Git Bash Here"** no menu de contexto.
   - Uma janela do terminal Bash será aberta, onde você pode digitar seus comandos Git.

  **Execute a seguinte código na linha de comando**:
- git config --global user.name "Seu Nome" 
(Esse comando define o nome de usuário que será associado aos seus commits em todos os repositórios Git no seu sistema.)

- git config --global user.email "seuemail@example.com"
onfigura o endereço de e-mail que será associado aos seus commits em todos os repositórios Git no seu sistema.


##Depois da configuração, mãos a Obra, podemos iniciar a lista de exercícios utilizando o [Visual Studio Code](https://code.visualstudio.com/)**

*3º Passo* - Acessar GIT HUB

1. **Crie um Repositório no GitHub**:
   - Acesse o [GitHub](https://github.com) e faça login na sua conta.
   - No canto superior direito, clique em **+** e selecione **New repository**.
   - Nomeie o repositório como ex:`lista-exercicios01` e, opcionalmente, adicione uma descrição.
   - Deixe as outras opções como padrão e clique em **Create repository**.

2. **Conecte o Repositório Local ao GitHub**:
   - No terminal do Visual Studio Code, adicione o repositório remoto do GitHub ao seu repositório local:
     ```bash
     git remote add origin https://github.com/seu-usuario/lista-exercicios-js.git
     ```
   - Substitua `seu-usuario` pelo seu nome de usuário no GitHub e `lista-exercicios01` pelo nome do repositório.

3. **Envie o Projeto para o GitHub**:
   - Para enviar (ou "fazer push") o seu código para o GitHub, use o comando:
     ```bash
     git push -u origin main
     ```
   - Isso enviará o conteúdo do repositório local para o repositório remoto no GitHub.

*4º Passo* - ### Verifique o Repositório no GitHub
- Acesse o repositório no GitHub através do link `https://github.com/seu-usuario/lista-exercicios-js`.
- Você deverá ver todos os arquivos que foram enviados.

*5º Passo* - # Como Executar os Exercícios no Visual Studio Code

### 1. Abrindo o Projeto no Visual Studio Code
1. **Abra o Visual Studio Code**:
   - Inicie o Visual Studio Code na sua máquina.

2. **Abra o Projeto**:
   - No menu superior, clique em **File > Open Folder...**.
   - Navegue até a pasta do projeto `listaexercicio01` e selecione-a.

### 2. Codando e Executando um Exercício
1. **Abra o Arquivo do Exercício**:
   - Na barra lateral à esquerda, clique no arquivo do exercício que você deseja executar, por exemplo, `exercicionº.js`.

2. **Abrindo o Terminal Integrado**:
   - Vá até o menu superior e selecione **Terminal > New Terminal**. Isso abrirá um terminal na parte inferior do Visual Studio Code.

3. **Instalação e Uso do `prompt-sync`** com objetivo de gerar interação com o usuário, onde ele possa interagir com o terminal:
   - Inicialize o Projeto Node.js
   ```bash
   npm init -y.
 3.1 - Instalar oprompt-sync
     
      npm install prompt-sync

   **criar a constato em um arquivo javascrpit ex: `exercicio01.js`
      
      const prompt = require('prompt-sync')().

4. **Executando o Código JavaScript**:
   - Certifique-se de que o Node.js está instalado na sua máquina. Se ainda não tiver o Node.js, você pode baixá-lo e instalá-lo a partir do [site oficial](https://nodejs.org/).
   - No terminal, digite o seguinte comando para executar o exercício:
     ```bash
     node exercicio1.js
     ```
   - Substitua `exercicio1.js` pelo nome do arquivo que deseja executar.

5. **Verificando a Saída**:
   - Após rodar o comando, o resultado do exercício aparecerá no terminal.
   - Caso o exercício envolva interação com o usuário (por exemplo, receber entradas), siga as instruções que aparecerem no terminal.












