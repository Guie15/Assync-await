function lyric(artista, musica){
  return fetch(`https://api.lyrics.ovh/v1/${artista}/${musica}`);
}

const form = document.querySelector('#lyric-form');
form.addEventListener('submit', el => {
  el.preventDefault();
  doSubmit();
});

async function doSubmit(){
  const lyrics_el = document.querySelector('#lyrics');
  const artist = document.querySelector('#artist');
  const song = document.querySelector('#music');
  
  
  lyrics_el.innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span> </div>';
  
  const lyricsResponse = await lyric(artist.value, song.value);
  const data = await lyricsResponse.json();
  lyrics_el.innerHTML = `<div id="conteudo">  ${data.lyrics} </div>`;
}