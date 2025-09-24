let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    
    // Validação de entrada
    if (amigo.trim() === '') {
        alert('Por favor, digite um nome válido!');
        return; // Sai da função se o campo estiver vazio
    }

    // Adiciona o nome ao array
    amigos.push(amigo.trim());

    // Limpa o campo de entrada
    document.getElementById('nome-amigo').value = '';

    // Atualiza a lista exibida na tela
    exibirLista();
}

function exibirLista() {
    let lista = document.getElementById('lista-de-nomes');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    // Adiciona cada amigo como um item da lista
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortear() {
    // Validação para garantir que há pelo menos 2 amigos
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para fazer o sorteio!');
        return;
    }

    // Lógica do sorteio (seleciona um amigo aleatoriamente)
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado na tela
    document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}

function reiniciar() {
    // Limpa o array de amigos
    amigos = [];
    
    // Limpa a lista exibida na tela
    document.getElementById('lista-de-nomes').innerHTML = '';
    
    // Limpa o resultado do sorteio
    document.getElementById('resultado').innerHTML = '';
    
    // Opcional: exibe a mensagem inicial novamente
    document.getElementById('lista-amigos').innerHTML = 'Lista de amigos:';
}
