let listaAmigos = []

function sortear() {
    if(listaAmigos.length <4){
        alert('Adicione pelo menos 4 amigos, adicione mais!')
        return;
    }
    embaralha(listaAmigos);

    let sorteio = document.getElementById('lista-sorteio')

    for (let i = 0; i < listaAmigos.length; i++) {
        if (i == listaAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[0] + '<br>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[i + 1] + '<br>'
        }

    }

}

function adicionar() {
    amigo = document.getElementById('nome-amigo').value
    if (amigo == '') {
        alert('Nome vazio');
        return;
    }
    if(listaAmigos.includes(amigo)){
        alert('Amigo já incluído!');
        return;
    }
    listaAmigos.push(amigo);

    let lista = document.getElementById('lista-amigos')

    document.getElementById('nome-amigo').value = ''

    lista.textContent = listaAmigos
}
function reiniciar() {

    listaAmigos = []
    document.getElementById('lista-amigos').innerHTML = ''
    document.getElementById('lista-sorteio').innerHTML = ''

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
