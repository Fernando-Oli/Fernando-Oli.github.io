const input = document.getElementById('input');
const nome = document.getElementById('anime-title');
const sinopse = document.getElementById('synopsis');
const imagem = document.getElementById('anime-image');
const releashed = document.getElementById('releashed-date');
const genero = document.getElementById('genres');
const botao = document.getElementById('button');

const getArrayAPI = (anime) => fetch(`https://gogoanime.herokuapp.com/anime-details/${anime}`).then((e) => e.json().then((i) => i))

const createStarted = async (animeNome) => {
    const objAnime = await getArrayAPI(animeNome)
    imagem.src = objAnime.animeImg
    nome.innerText = `Nome: ${objAnime.animeTitle}`
    releashed.innerText = `Lançamento: ${objAnime.releasedDate}`
    genero.innerText = `Gênero: ${objAnime.genres}`
    sinopse.innerText = `Sinopse: ${objAnime.synopsis}`
    console.log(objAnime);
    if (objAnime.error.name === 'Error' || animeNome === '') {
        createStarted('naruto');
        window.alert('nome inválido');
    }
}

createStarted('naruto');


const trateInput = (valor) => {

    const string = valor.toLowerCase()
    return string.replace(/ /g, '-')
}

botao.addEventListener('click', async () => {
    const string = trateInput(input.value)
    await createStarted(string);
})

