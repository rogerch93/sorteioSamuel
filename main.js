/*Variaveis de identificação das inputs*/
const nome = document.querySelector('#nomeRifa');
const numero = document.querySelector('#numRifa');
const enviar = document.querySelector('#enviar');
const resultado= document.querySelector('#listaSorteio');

/*Função para criar lista*/
enviar.addEventListener('click', () => {
    if(enviar === onclick){
        let lista = {
            nome: nome.value,
            id: gerarId(),
        }

        let numeroLista = {
            nome: numero.value,
            id:gerarId(),
        }
        adicionarLista(lista);
        adicionarNumeroLista(numeroLista)
    }
});

/*Função para criar lista*/
enviar.addEventListener('click',(e) => {
    let lista = {
        nome: nome.value,
        id: gerarId(),
    }

    let numeroLista = {
        nome: numero.value,
        id:gerarId(),
    }
    adicionarLista(lista);
    adicionarNumeroLista(numeroLista)
})

/*Criar um Id automático*/
function gerarId(){
    return Math.floor(Math.random() * 2000);
}

/*Criação da tag p, adcionando ela na div */
function adicionarLista(nomesSorteio){
    let div = criarTagP(nomesSorteio);
    resultado.appendChild(div);
}

/*Criando criando elemento e adicionando ele ao html */
function criarTagP(nomesSorteio){
   let p = document.createElement('p');
   p.classList.add('nomeSorteioRifa');
   p.innerHTML = nomesSorteio.nome;
   return p;
}

/*Criando numero para input numero */
function adicionarNumeroLista(numeroSorteio){
    let p = criarTagP(numeroSorteio);
    resultado.appendChild(p);
}

/*Criando criando elemento e adicionando ele ao html */
function criarTagPNumero(numeroSorteio){
    let p = document.createElement('p');
    p.classList.add('numRifa');
    p.innerHTML = numeroSorteio.numero;
    return p;
}