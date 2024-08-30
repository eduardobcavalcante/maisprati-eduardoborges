# +PRATI- *Eduardo Borges* - repositório de atividades

## Instruções para quem quiser resolver exercicios de lógica de programação, utilizando a linguagem javascript. 

### Pré-requisitos
Para começar a trabalhar com este repositório, você precisará dos seguintes softwares instalados:

1. **Visual Studio Code** - Uma IDE leve e poderosa para desenvolvimento.
2. **Git** - Controle de versão para acompanhar suas mudanças no código.
3. **GitHub** - Plataforma para hospedar seu código e colaborar com outros.

*1º Passo* - Instalação das ferramentas:

> Instalando o Visual Studio Code
1. Acesse o site oficial do Visual Studio Code: [Visual Studio Code](https://code.visualstudio.com/).
2. Clique em "Download" e selecione a versão para o seu sistema operacional.
3. Siga as instruções de instalação no assistente.

>Instalando o Git
1. Acesse o site oficial do Git: [Git Downloads](https://git-scm.com/downloads).
2. Escolha o instalador correspondente ao seu sistema operacional.
3. Execute o instalador e siga as instruções padrão.

> Configurando o GitHub
1. Crie uma conta no GitHub se ainda não tiver uma: [GitHub Signup](https://github.com/join).
2. Após criar sua conta, configure o Git no seu computador:

>Como instalar e acessar o git bash**</br>

- Windows
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

3.  **Execute a seguinte código na linha de comando**:
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

*4º Passo* - ### 4. Verifique o Repositório no GitHub
- Acesse o repositório no GitHub através do link `https://github.com/seu-usuario/lista-exercicios-js`.
- Você deverá ver todos os arquivos que foram enviados.













