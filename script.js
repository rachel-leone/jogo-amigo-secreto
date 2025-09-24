let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    
    if (amigo.trim() === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }

    amigos.push(amigo.trim());

    document.getElementById('nome-amigo').value = '';

    exibirLista();
}

function exibirLista() {
    let lista = document.getElementById('lista-de-nomes');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortear() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para fazer o sorteio!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}

function reiniciar() {
    amigos = [];
    
    document.getElementById('lista-de-nomes').innerHTML = '';
    
    document.getElementById('resultado').innerHTML = '';
    
    document.getElementById('lista-amigos').innerHTML = 'Lista de amigos:';
}
