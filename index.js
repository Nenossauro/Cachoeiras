const imagens = document.querySelectorAll('.carrosel-fotos img');
const titulo = document.getElementById('titulo');
const descricao = document.getElementById('descricao');

const textos = [
  { titulo: "CACHOEIRA #1", descricao: "A Cachoeira #1 tem um baixo fluxo de água um leito de pedras lisas. É um ponto muito usado como 'tobogã' natural. Todas as outras cachoeiras são subindo a trilha que começa aqui." },
  { titulo: "CACHOEIRA #2", descricao: "A Cachoeira #2 é mais baixa, cercada de natureza. Tem um pendulo onde muitos usam para se pendurar e mergulhar. Há uma pequena cascata aonde se pode sentar embaixo para se banhar. Há tambem uma pequena adega com banheiro, bebidas, mesa de sinuca e comida." },
  { titulo: "CACHOEIRA #3", descricao: "A Cachoeira #3 é a mais alta (Em torno de 5 metros de altura). Fica no meio da mata, tem várias quedas d’água. local muito gostoso para fazer piquenique. No caminho você vai encontrar um rio em uma paisagem linda e um ótimo local para pescar" },
];

let indiceAtual = 0;

function trocarCarrossel() {
  imagens.forEach((img) => img.classList.remove('active'));
  
  imagens[indiceAtual].classList.add('active');
  
  titulo.textContent = textos[indiceAtual].titulo;
  descricao.textContent = textos[indiceAtual].descricao;
  
  indiceAtual = (indiceAtual + 1) % imagens.length;
}

setInterval(trocarCarrossel, 3000);