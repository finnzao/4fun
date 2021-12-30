let votandoEm = document.querySelector('.cargo');
let cargo = document.querySelector('.cargo-nome');
let dados = document.querySelector(".tela-dados");
let telabaixo = document.querySelector(".tela-baixo");
let cargofoto = document.querySelector(".cargo-foto");
let num = document.querySelector(".cargo-escolha")

//const clicou= (n)=>{}

let etapaAtual = 0;
let numero = '';
let votbranco = true
let votos = [];


function startEstapa() {
    let etapa = stages[etapaAtual];

    let numHTML = '';
    numero = '';
    votbranco = false;

    for (let i = 0; i < etapa.numero; i++) {
        if (i === 0) {
            numHTML += '<div class="num pisca" ></div>'
        } else {
            numHTML += '<div class="num "></div>'
        }

    }

    votandoEm.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    dados.innerHTML = '';
    telabaixo.style.display = 'none';
    cargofoto.innerHTML = '';
    num.innerHTML = numHTML;
}



function clicou(n) {
    let elementonum = document.querySelector('.num.pisca');
    if (elementonum !== null) {
        elementonum.innerHTML = n;
        numero = ` ${numero}${n}`;

        elementonum.classList.remove('pisca');
        let next = elementonum.nextElementSibling;
        if (next !== null) {
            next.classList.add('pisca')
        } else {
            atualizarInterface()
        }
    }
}

function atualizarInterface() {

    let candidato = stages[etapaAtual].candidatos.filter((item) => {
        if (item.numero == numero) {
            return true
        } else {
            return false
        }
    });
    if (candidato.length > 0) {
        candidato = candidato[0]
        votandoEm.style.display = 'block';
        telabaixo.style.display = 'block';
        dados.innerHTML = ` <div class="tela-dados">
        <span>NOME:${candidato.name}</span>
        <span> PARTIDO:${candidato.partido}</span>`;
    } else {
        votandoEm.style.display = 'block';
        telabaixo.style.display = 'block';
        dados.innerHTML = `<div class="pisca nulo">VOTO NULO</div>`
    }
    //console.log("Candidato", candidato, numero)

}

function branco() {
    if (numero === '') {
        numero = "";
        votbranco = true;

        votandoEm.style.display = 'block';
        telabaixo.style.display = 'block';
        num.innerHTML = '';
        dados.innerHTML = `<div class="pisca nulo">VOTO BRANCO</div>`;
    } else {
        alert("Apenas pode-se votar em BRANCO quando não se tem nenhum número,aperte CORRIGE para retiras os números")
    }
}

function corrige() {
    startEstapa()

}

function confirma() {
    let etapa = stages[etapaAtual];

    let votoConfirma = false;

    if (votbranco == true) {
        votoConfirma = true
        votos.push({
            etapa: stages[etapaAtual].titulo,
            voto: 'branco'
        })
        console.log("Confirmando voto branco")
    } else if (numero.length = etapa.numero) {
        votoConfirma = true
        votos.push({
            etapa: stages[etapaAtual].titulo,
            voto: numero
        })

        console.log(`Confirmando como ${numero}`)
    }

    if (votoConfirma) {
        etapaAtual++; //aumento o numero da etapa atual
        if (stages[etapaAtual] != undefined) {
            startEstapa();
        } else {
            document.querySelector('.tela').innerHTML = '<div class="pisca end">Votação concluída</div>`';
            console.log(votos)
        }
    }
}

startEstapa();