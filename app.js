// Criando um array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim(); // Pegando o nome do input e removendo espaços extras

    // Verifica se o nome não está vazio
    if (nomeAmigo !== "") {
        amigos.push(nomeAmigo); // Adiciona o nome no array

        // Cria um item <li> para a lista de amigos
        const listaAmigos = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.textContent = nomeAmigo; // Define o nome dentro do <li>
        listaAmigos.appendChild(li); // Adiciona o <li> na lista

        // Limpa o campo de entrada após adicionar
        input.value = '';
    }
}

// Função para sortear um amigo secreto aleatório
function sortearAmigo() {
    if (amigos.length > 0) {
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Sorteia um amigo aleatório
        const resultado = document.getElementById('resultado');
        
        // Exibe o nome sorteado
        resultado.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    } else {
        alert("Adicione pelo menos um amigo para sortear.");
    }
}
