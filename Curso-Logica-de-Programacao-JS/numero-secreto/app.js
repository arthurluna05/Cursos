let listaDeNumeroSorteados = [];//Array com numeros sorteados
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); //armazenar e chamar o número aleatório
let tentativas = 1; //variavel para o número de tentativas
//função para pegar elementos pela sua tag no HTML
//função do tipo com parâmetros
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//função para alterar o titulo e o texto, através dos parâmetros
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();//chamando função para alterar a mensagem inicial

//função para verificar se o botão de chute está funcionando e armazenar o valor do chute
//função do tipo sem parâmetros
function verificarChute(){
    let chute = document.querySelector('input').value; //pegar valor do chute e armazená-lo
    //um if/else para verificação se o número do chute está correto, e exibição e uma mensagem do resultado
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // variável para reconhecer se o certo vai ser no singular ou plural
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!` //variavél para concatenação de tentativas, pois o HTML não reconhece template string
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');//desabilitando o atributo para que possa apertar o botão de reiniciar o jogo após acertar o número secreto
    } else if(chute > numeroSecreto){
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
    } else{
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}`)
    }
    tentativas++;//contador de tentativas
    limparCampo();//chamando função para limpar o campo de número após o chute

}

//função para gerar um número aleatório
//função do tipo com return
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    //if para verificar se o número sorteado está na lista e gerar um novo número
    let quantidadeDeElementosDaLista = listaDeNumeroSorteados.length;

    if(quantidadeDeElementosDaLista == 10){
        listaDeNumeroSorteados = [];
    }

    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumeroSorteados.push(numeroEscolhido);//adicionando um numero ao final da lista
        return numeroEscolhido;
    }
}

//função para limpar o campo de texto do número quando o chute for feito
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//função para reiniciar as funcionalidades e reinicar o jogo através do botão de Novo Jogo
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);// desabilitando o botão Novo Jogo após reinicio do game
}