# Jogo Da Velha ProjetoLPF
Jogo da velha feito pelos alunos João Pedro Kern Guterres Santos e Pedro Ribeiro Queiroz de Faria. Código primariamente construido em Kotlin, sendo traduzido e compilado em JavaScript.

Jogue com um amigo na mesma tela, e assim que a partida acabar, a página será recarregada e o tabuleiro do jogo será limpo.

## Inicializar
Esse [link](https://pedrorqfaria.github.io/) lhe levará para a versão final do site, rodando no github.

Se quiser ver os códigos por trás do site, faça da seguinte maneira:

:one: Acesse o projeto no [GitPod]()

:two: No terminal do gitpod, instale o SDK do Kotlin no gitpod colocando o seguinte texto na linha de comando:
```bash
sdk install kotlin
```
:three: Depois, abra uma porta, torne-a pública e execute o servidor nela. Para isso, coloque o seguinte texto na linha de comando do terminal: 
```bash
php -S 0.0.0.0:8888
```
:four: Após isso, no canto inferior direito da tela, clique onde está escrito Ports.

Depois, ao passar o mouse sobre a porta disponível, clique no cadeado para torná-la pública e depois no símbolo de mundo para abrir o site no navegador.

Caso alguma alteração seja feita no kotlin, o código deverá ser compilado. Para isso, coloque na linha de comando, no terminal do gitpod, o seguinte comando:
```bash
kotlinc-js main.kt -output main.js
```

Obs: Digitando ctrl + c no terminal do gitpod, a linha de comando aparece.
