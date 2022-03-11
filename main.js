/*Variaveis de identificação das inputs*/
let nome = document.querySelector('#nomeRifa');
const numero = document.querySelector('#numRifa');
let enviar = document.querySelector('.btnSorte');
const resultado= document.querySelector('#listaSorteio');

/*Função que executa o evento de click*/
function eventoDeclick(){
    let lista = {
        nome: nome.value,
        id: gerarId(),
    }
    adicionarLista(lista);
    nome.value = "";
}

/*Evento para criar a lista com um click*/
enviar.addEventListener('click',() => {
   eventoDeclick();
});

/*Criar um Id automático*/
function gerarId(){
    return Math.floor(Math.random() * 2000);
}

/*Criação da tag li */
function adicionarLista(nomesSorteio){
    let li = criarTagLi(nomesSorteio);
    resultado.appendChild(li);
}

/*Criando elemento e adicionando ele ao html */
function criarTagLi(nomesSorteio){
   let li = document.createElement('li');
   li.classList.add('listaSorteio');
   li.innerHTML = nomesSorteio.nome;

   return li;
}

/*Criando a Logica para o sorteio*/
let btnSorte = document.getElementById('sortear')

function sorteio(){
    const min = document.getElementById('min').value;
    const max = document.getElementById('max').value;
    
    let sort = Math.floor(Math.random()*Math.floor  (max));

    while(sort < min){
        sort = Math.floor(Math.random()*Math.floor  (max));
    }

    document.querySelector('.sortudo').innerHTML = sort;
}

btnSorte.addEventListener('click', () => {
    sorteio()   
   });