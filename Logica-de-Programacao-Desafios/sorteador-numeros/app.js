function sortear(){//função que é ativada através do botão SORTEAR para resgatar os VALORES e armazenalos na variavel atraves do document
  let quantidade = parseInt(document.getElementById('quantidade').value);//parseInt para fazer com que o valor que retorne seja obrigatoriamente um NÚMERO
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);


  let sorteados = [];//array para armazenar os números sorteados e estabelecer os valores minimos e maximos nos parametros

   for(let i = 0; i <  quantidade; i++){//loop que vai de 0 até a quantidade que a pessoa digitou, ou seja para i menor que quantidade, aicione mais um, e continua chamando a função de obter número aleatório. O for serve para fazer um loop onde sabemos quantos repetições queremos fazer, isso é importante.
     numero = obterNumeroAleatorio(de, ate);//chamando a função para sortear o número e armazenando na variavel numero, dentros dos valores maximos e minimos.
     
     while(sorteados.includes(numero)){//verificação se o número sorteado já está dentro do array através do atributo INCLUDES do array que verifica se já existe aquele valor e retorna true or false.
        numero = obterNumeroAleatorio(de, ate);//enquanto o número se repetir ele fica fazendo este número até ser um exclusivo.
     }

     sorteados.push(numero);//adicionando numeros sorteados no array = numeros. atraves do atributo push
    }

    let resultado = document.getElementById('resultado');//buscando o texto do resultado no HTML
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;//mudando o texto para aparecer os números já sorteados.
    alterarStatusBotao();
}

//função para sortear um número aleatório através do Math.random, vale lembrar que os parâmetros min e max foram estabelecidos anteriormente através da função
function obterNumeroAleatorio(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {// função para alterar o botão de reiniciar e habilita-ló após sorteio dos números
  let botao = document.getElementById('btn-reiniciar');//variavel para resgatar o botão
  if (botao.classList.contains('container__botao-desabilitado')){//condicional para verificar se o botão esta incluso na classe determinada.
    botao.classList.remove('container__botao-desabilitado'); //remover a classe do botão
    botao.classList.add('container__botao');//adicionando classe do botão comum
  } else{//processo inverso
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }

}

function reiniciar(){//função para reiniciar o jogo através do botão
 
 document.getElementById('quantidade').value = '';//atribuindo um valor vazio aos valores sorteados
 document.getElementById('de').value = '';
 document.getElementById('ate').value = '';
 document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';//colocando a frase nenhum até agora de novo
 alterarStatusBotao();//tornando o botão inativo novamente
}

