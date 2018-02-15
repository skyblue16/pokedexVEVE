const search = document.getElementById('search_btn')
search.addEventListener('click', function(){

const gif = document.getElementById('textarea1').value;
const myGif = document.getElementById('myGif');
fetch(`https://pokeapi.co/api/v2/pokemon/${gif}/`)
  .then(function(response) {
    // Turns the the JSON into a JS object
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    // Let's make some HTML!
    let html =  `<div class="col s3">
    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${data.sprites.back_default}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${data.name}<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>TIPO:${data.types[0].type.name}</p>
    </div>
    </div>
  </div> `
    myGif.innerHTML = html;
  });
});
