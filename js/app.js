function alterarStatus(id) {
    let botaoClicado = document.getElementById(`game-${id}`);

    let imagem = botaoClicado.querySelector(".dashboard__item__img");
    let botao = botaoClicado.querySelector(".dashboard__item__button");

    let estaAlugado = imagem.classList.contains("dashboard__item__img--rented");

    if (estaAlugado) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.innerHTML = "Alugar";
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.innerHTML = "Devolver";
    }
}
