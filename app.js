let carros = [];

function adicionarCarro() {
  const modelo = document.getElementById('inModelo').value;
  const preco = document.getElementById('inPreco').value;

  if (!modelo || !preco) {
    alert('Por favor, preencha o modelo e o preço do carro.');
    return;
  }

  const carro = { modelo, preco };
  carros.push(carro);

  document.getElementById('inModelo').value = '';
  document.getElementById('inPreco').value = '';

  listarCarros();
}

document.getElementById('btnAdicionar').addEventListener('click', adicionarCarro);

function listarCarros() {
  let listaCarros = '';
  carros.forEach((carro, index) => {
    listaCarros += `${index + 1}. Modelo: ${carro.modelo}, Preço: R$${carro.preco} \n`;
  });
  document.getElementById('outLista').textContent = listaCarros;
}

function filtrarPorPreco() {
  const precoMaximo = parseFloat(prompt('Digite o valor máximo que deseja gastar: '));
  if (isNaN(precoMaximo)) {
    alert('Por favor, digite um valor válido.');
    return;
  }

  const carrosFiltrados = carros.filter(carro => parseFloat(carro.preco) <= precoMaximo);

  let listaCarros = '';
  carrosFiltrados.forEach((carro, index) => {
    listaCarros += `${index + 1}. Modelo: ${carro.modelo}, Preço: R$${carro.preco} \n`;
  });

  if (listaCarros === '') {
    alert('Não há carros disponíveis dentro desse preço.');
  } else {
    document.getElementById('outLista').textContent = listaCarros;
  }
}

document.getElementById('btnFiltrar').addEventListener('click', filtrarPorPreco);
document.getElementById('btnListar').addEventListener('click', listarCarros);
