function alterarStatus(id) {
    let botaoClicado = document.getElementById(`game-${id}`);

    let imagem = botaoClicado.querySelector(".dashboard__item__img");
    let botao = botaoClicado.querySelector(".dashboard__item__button");
    let nomeDoJogo = botaoClicado.querySelector(".dashboard__item__name")

    let estaAlugado = imagem.classList.contains("dashboard__item__img--rented");

    if (estaAlugado) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeDoJogo.innerHTML}?`)) {
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.innerHTML = "Alugar";
        }
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.innerHTML = "Devolver";
    }
}
