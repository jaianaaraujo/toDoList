//***********  FUNÇÃO CRIAR TAREFA ********

( () => {const criarTarefa = (evento) => {
    
     evento.preventDefault(); // ele vai previnir o comportamento padrão de enviar rápido a resposta. E assim poderemos capturar a informação 

    const input = document.querySelector('[data-form-input]'); // acessando o data-form-input
    const valor = input.value; // aqui estou salvando o valor inserido no input
    
    const lista = document.querySelector('[data-list]'); // acesso a . Ul é filho da div, e pai da li

   const tarefa =  document.createElement('li'); // criando um elemento li. Li é filho de UL
   tarefa.classList.add('task');
   const conteudo = `<p class="content">${valor}</p> `; // criei uma váriavel armazenando essa frase, usamos o tampleteString porque assim poderemos interpolar

   tarefa.innerHTML = conteudo; // pego a tarefa que é minha li, e coloco o conteúdo dentro

   tarefa.appendChild(BotaoConclui());
/*    tarefa.appendChild(BotaoDeleta());
 */   

lista.appendChild(tarefa); // Agora coloco a li(filha) dentro da ul(pai)
   input.value = " "; // depois de imprimir o valor, aqui estou zerando as informações
}

// Precisamos do tipo do evento, do elemento que vai receber o evento e o que vai acontecer quando o evento for disparado

// PARAMETRO DA FUNÇÃO: geralmente eu quero saber qual elemento que estou clicando. Ele me passa esse tipo de informação. O navegador, quando está lidando com esse tipo de evento, passa um objeto que contém informações sobre o evento. Nós podemos passar esse objeto como parâmetro dessa nossa função.


/* ********** BOTÃO **********  */

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);


/* COMPONENTE DO BOTÃO CONCLUI*/

const BotaoConclui = () => {
   const botaoConlui = document.createElement('button');
    botaoConlui.classList.add('check-button')
    botaoConlui.innerText = 'Conluir';
    botaoConlui.addEventListener('click', concluirTarefa)

   return botaoConlui;
}

/* FUNÇÃO CONCLUIR TAREFA */

const concluirTarefa = (evento) => {
 const botaoConlui = evento.target // o target é para saber qual o alvo do evento

 const tarefaCompleta = botaoConlui.parentElement

 // O PARENTELEMENT eu vou pegar o pai do botão, que nesse caso é o li

 tarefaCompleta.classList.toggle('done');

}
//Alternativa Correta. Exatamente! Através da variável botaoConclui capturamos qual elemento foi clicado, depois utilizamos a propriedade parentElement para subir um nó na árvore, por fim colocamos o método toggle que vai adicionar a classe done quando clicarmos no botão

/* BOTÃO DELETA */

const BotaoDeleta = () => {
   const botaoDeleta = document.querySelector('button');
   botaoDeleta.innerText = 'deleta';
   botaoDeleta.classList.add('check')
   botaoDeleta.addEventListener('click', deletarTarefa)
   return botaoDeleta;
}

/* const deletarTarefa = (evento) => {
   const botaoDeleta = evento.target;
   const tarefaCompleta = botaoDeleta.parentElement;
   tarefaCompleta.remove();
   
   return botaoDeleta;
} */
 } )();