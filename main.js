var cartas = [
    {
        nome: "pedra",
        url: "./assets/rock_image.png"
    },
    {
        nome: "papel",
        url: "./assets/paper_image.png"
    },
    {
        nome: "tesoura",
        url: "./assets/scissors_image.png"
    }
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    document.getElementById("subtitulo").setAttribute("style", "display: block")
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    mostraCartaJogador();
}

function mostraCartaJogador() {
    var opcoes = document.getElementById("opcoes");
    var elemento = "";
    for (var carta of cartas) {
        elemento += `<label for="${carta.nome}"><img onclick="destacaCarta(event)" id="${carta.url}" class="cartaSorteada" src="${carta.url}" /></label>`;
        elemento += `<input class="radio" type="radio" name="radio" id="${carta.nome}" value="${carta.nome}">`
    }
    opcoes.innerHTML = elemento;
}

function obtemCartaSelecionada() {
    var radioSelecionado = document.getElementsByName("radio");
    for (var i = 0; i < radioSelecionado.length; i++) {
        if (radioSelecionado[i].checked == true) {
            cartaJogador = radioSelecionado[i].value;
        }
    }

}

function destacaCarta(event) {
    let elementoAtual = event.target
    let elementoAntigo = document.querySelector(".active")
    if (elementoAntigo == null) {
        elementoAtual.classList.add("active")
    } else {
        elementoAntigo.classList.remove("active")
        elementoAtual.classList.add("active")
    }
}

function mostraCartaMaquina() {
    var divCartaMaquina = document.getElementById("cartaMaquina");
    var elemento = `<img class='cartaSorteada maquina' src="${cartaMaquina.url}"/>`;
    divCartaMaquina.innerHTML = elemento;
}

function jogar() {
    obtemCartaSelecionada();
    var resultado = document.getElementById("resultado");
    if (cartaJogador == cartaMaquina.nome) {
        resultado.innerHTML = "Empate! A carta escolhida pela máquina foi: ";
        mostraCartaMaquina();
    } else if (cartaJogador == "papel" && cartaMaquina.nome == "pedra") {
        resultado.innerHTML = "Você venceu! A carta escolhida pela máquina foi: ";
        mostraCartaMaquina();
    } else if (cartaJogador == "tesoura" && cartaMaquina.nome == "papel") {
        resultado.innerHTML = "Você venceu! A carta escolhida pela máquina foi: ";
        mostraCartaMaquina();
    } else if (cartaJogador == "pedra" && cartaMaquina.nome == "tesoura") {
        resultado.innerHTML = "Você venceu! A carta escolhida pela máquina foi: ";
        mostraCartaMaquina();
    } else if (cartaJogador == undefined) {
        resultado.innerHTML = "Você esqueceu de escolher sua carta"
    }
    else {
        resultado.innerHTML = "Você perdeu...A carta escolhida pela máquina foi: ";
        mostraCartaMaquina();
    }
    document.getElementById("resultado").setAttribute("style", "display:block")
    document.getElementById("again").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("again").setAttribute("style", "display:inline");
}

function jogarNovamente() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("cartaMaquina").innerHTML = "";
    document.getElementById("opcoes").innerHTML = "";
    document.getElementById("again").disabled = true;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("again").setAttribute("style", "display:none");
    document.getElementById("resultado").setAttribute("style", "display:none")
    cartaJogador = undefined
}
