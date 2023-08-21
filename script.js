const caixaPopup = document.querySelectorAll('.popup');

caixaPopup.forEach((caixa)=> {
    caixa.style.display = 'none';
})

function exibirCaixa(id, index) {
    let btn = document.getElementById(`${id}`)
    btn.addEventListener('click', ()=> {
        caixaPopup[index].style.display='block';
    })
}

exibirCaixa('box-hab', 0);
exibirCaixa('box-exp', 1);
exibirCaixa('box-ed', 2);
exibirCaixa('box-cont', 3);

function fecharCaixa(index) {
    caixaPopup[index].style.display = 'none';
}

const fecharIcons = document.querySelectorAll('.fa-rectangle-xmark');
fecharIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        fecharCaixa(index);
    });
});

//----------------------------------------------------------------------------

const btnVerCertificados = document.getElementById('abrir_cert');
const caixaSlide = document.getElementById('container_cert');
btnVerCertificados.addEventListener('click', () => {
    caixaSlide.style.display = 'block';
});

const carousel = document.querySelector('.carousel');
let slideIndex = 0;

function moverSlide(direcao) {
    const slides = carousel.children;
    slideIndex += direcao;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

document.querySelector('.fa-circle-arrow-left').addEventListener('click', () => moverSlide(-1));
document.querySelector('.fa-circle-arrow-right').addEventListener('click', () => moverSlide(1));

const fecharSlide = document.getElementById('fechar_slide');
fecharSlide.addEventListener('click', () => {
    caixaSlide.style.display = 'none';
})

//-----------------------------------------------------------------------------------------------

let botoes = document.getElementsByClassName('btn');

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function() {
        const som = document.getElementById('som-efeito');
        som.currentTime = 0; 
        som.play();
    });
}

//------------------------------------------------------------------------------------------------

const curriculo = document.getElementById("curriculo");
const toggleButton = document.getElementById("toggle-button");
const openPaper = document.getElementById("box-paper");

openPaper.addEventListener("click", () => {
    curriculo.classList.remove("animation-paused");
    curriculo.classList.remove("reverse-animation");
    curriculo.classList.add("paper_sheet");
    curriculo.style.animation = "none";
    void curriculo.offsetWidth;
    curriculo.style.animation = null;
});

toggleButton.addEventListener("click", () => {
    curriculo.classList.toggle("reverse-animation");
});

document.getElementById('print').addEventListener('click', function () {
    let curriculoSection = document.getElementById('curriculo');
    let botoesPapelDiv = curriculoSection.querySelector('#botoes_papel');
    let cabecalhoDiv = document.querySelector("#cabecalho");
    let cabecalho2Div = document.querySelector("#copia_header");
    let sessaoSobre = document.querySelector("#about");
    let boxBtns = document.querySelector("#buttons");
    let footer = document.querySelector("#rodape");

    // Esconder tags antes de imprimir
    botoesPapelDiv.style.display = 'none';
    cabecalhoDiv.style.display = 'none';
    cabecalho2Div.style.display = 'none';
    sessaoSobre.style.display = 'none';
    boxBtns.style.display = 'none';
    footer.style.display = 'none';
    
    // Imprimir o currículo
    window.print();
    
    // Mostrar os botões novamente após a impressão
    cabecalhoDiv.style.display = 'block';
    cabecalho2Div.style.display = 'block';
    sessaoSobre.style.display = 'block';
    botoesPapelDiv.style.display = 'flex';
    boxBtns.style.display = 'flex';
    footer.style.display = 'block';
});

//-----------------------------------------------------------------------------

const button = document.getElementById("box-present");

button.addEventListener("click", function() {

    window.location.href = "./PageCard/card.html";

});