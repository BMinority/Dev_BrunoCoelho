close_msg.addEventListener("click", () => {
    msg_abertura.style.display = 'none';
});

//---------------------------------------------------------------------

const buttonHouse = document.getElementById("house");
buttonHouse.addEventListener("click", () => {
    window.location.href = "/meu_site/index.html"
});

//----------------------------------------------------------------

const popUp = document.querySelector(".popup");
const helpBtn = document.querySelector("#help");
const closeBtn = document.querySelector("#close_popup"); 

helpBtn.addEventListener("click", () => {
    popUp.style.display = 'flex';
});

closeBtn.addEventListener("click", () => {
    popUp.style.display = 'none';
})

//-----------------------------------------------------------

function limparFormulario() {
    // Limpar os inputs
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('e-mail').value = '';
    document.getElementById('mensagem').value = '';
    document.getElementById('img-input').value = '';


    document.getElementById('nomePlaceholder').textContent = 'Seu nome ou nome da empresa';
    document.getElementById('f').textContent = '(00) 99999-9999';
    document.getElementById('em').textContent = 'empresa@email.com';
    document.getElementById('frase').textContent = 'Seu slogan aqui.';
}


const btnLimpar = document.getElementById('clean');
btnLimpar.addEventListener('click', limparFormulario);

//----------------------------------------------------------------------------------

function atualizarNome() {
    const nomeInput = document.getElementById('nome');
    const nomePlaceholder = document.getElementById('nomePlaceholder');
    const novoNome = nomeInput.value.trim();

    if (novoNome === '') {
        nomePlaceholder.textContent = 'Seu nome ou nome da empresa';
    } else {
        nomePlaceholder.textContent = novoNome;
    }

}

const nomeInput = document.getElementById('nome');   
nomeInput.addEventListener('input', atualizarNome);

//-----------------------------------------------------------------------------------
let valorOriginalFone = '(00) 99999-9999';

function atualizarNumero() {
    const inputFone = document.getElementById('telefone');
    const fonePlaceholder = document.getElementById('f');
    const novoNumero = inputFone.value.trim();

    if (novoNumero === '') {
        fonePlaceholder.textContent = valorOriginalFone;
    } else {
        fonePlaceholder.textContent = novoNumero;
    }
}

window.addEventListener('DOMContentLoaded', function () {
    const fonePlaceholder = document.getElementById('f');
    valorOriginalFone = fonePlaceholder.textContent;
});

const inputFone = document.getElementById('telefone');
inputFone.addEventListener('input', atualizarNumero);

//------------------------------------------------------------------------------------

function atualizarEmail() {
    const inputEmail = document.getElementById('e-mail');
    const emailPlaceholder = document.getElementById('em');
    const novoEmail = inputEmail.value.trim();

    if (novoEmail === '') {
        emailPlaceholder.textContent = 'empresa@email.com';
    } else {
        emailPlaceholder.textContent = novoEmail;
    }
}

const inputEmail = document.getElementById('e-mail');
inputEmail.addEventListener('input', atualizarEmail);

//-------------------------------------------------------------------------------------

function atualizarSlogan() {
    const inputMensagem = document.getElementById('mensagem');
    const sloganPlaceholder = document.getElementById('frase');
    const novaFrase = inputMensagem.value.trim();

    if (novaFrase === '') {
        sloganPlaceholder.textContent = 'Seu slogan aqui.';
    } else {
        sloganPlaceholder.textContent = novaFrase;
    }
}

const inputMensagem = document.getElementById('mensagem');
inputMensagem.addEventListener('input', atualizarSlogan);

//------------------------------------------------------------------------------------

function readImage() {
    if (this.files && this.files[0]) {
        let file = new FileReader();
        file.onload = function(e) {
            document.getElementById("logo_preview").src = e.target.result;
            logo_preview.style.border = 'none';
        };       
        file.readAsDataURL(this.files[0]);
    }
}

function clearPreview() {
    document.getElementById("logo_preview").src = "imgLogo/SUA_LOGO_AQUI.png";
}

document.getElementById("img-input").addEventListener("change", readImage, false);
document.getElementById("clean").addEventListener("click", clearPreview, false);

//-----------------------------------------------------------------------------------------

const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", function() {
    window.print();
});

//------------------------------------------------------------------------------------------


function salvarComoImagem(elementId) {
    let element = document.getElementById(elementId);

    //identifica a transformação atual do elemento
    let currentTransform = element.style.transform;

    //remove a transformação
    element.style.transform = 'none';
    
    html2canvas(element).then(function(canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'cartao_' + elementId + '.png';
      link.click();

      //restaurar a transformação depois de capturar a imagem
      element.style.transform = currentTransform;
    });
};


save_frente.addEventListener("click", () => {
    salvarComoImagem("frente")
})

save_verso.addEventListener("click", () => {
    salvarComoImagem("verso")
})

//--------------------------------------------------------------------------

let botoes = document.getElementsByClassName('btn');

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function() {
        const som = document.getElementById('som-efeito');
        som.currentTime = 0; 
        som.play();
    });
}

//-----------------------------------------------------------------------------
const cardContainer = document.getElementById("container_card");
const card = document.querySelector(".card");

// Evento de toque para dispositivos móveis
cardContainer.addEventListener("touchstart", function() {
    card.style.transform = "rotateY(180deg)";
});

// Evento de toque para voltar à frente quando tocar novamente
cardContainer.addEventListener("touchend", function() {
    card.style.transform = "rotateY(0deg)";
});

// Evento de hover para desktop
cardContainer.addEventListener("mouseenter", function() {
    card.style.transform = "rotateY(180deg)";
});

cardContainer.addEventListener("mouseleave", function() {
    card.style.transform = "rotateY(0deg)";
});
