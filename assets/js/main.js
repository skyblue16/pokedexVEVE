
$(document).ready(function() {
    $('.modal').modal();
 

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  for (let i = 0; i < 1; i++) {
    let num = getRandomInt(0, 100);
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
      .then(function(response) {
        // Turns the the JSON into a JS object
        return response.json();
      })
      .then(function(data) {

  console.log(data);


        let img = `https://pokeapi.co/media/img/${data.id}.png`;
     
        // Let's make some HTML!
        $('#myGif').append(
          ` <a class="  modal-trigger" href="#modal${data.id}">
           <div class="col s2">
          <img src="${img}" alt="" class="circle responsive-img" >
          <h5 class="black-text light">${data.name}</h5>
          <span class="black-text">Tipo: ${data.types[0].type.name}</span>
           </div>
          </a>
          <div id="modal${data.id}" class="modal bottom-sheet">
          <div class="modal-content">
          <img src="${img}" alt="" class="circle responsive-img" >
          <h5 class="black-text light">${data.name}</h5>
          <span class="black-text">Tipo: ${data.types[0].type.name}</span>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div> ` 
        );
        $('.modal').modal();
      });
  };


  const search = document.getElementById('search_btn');
  search.addEventListener('click', function() {

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
        let html = ` 

                  <div class="col s10">
                  <div class="card-panel grey lighten-5 ">
                  <div class="row valign-wrapper">
                  <div class="col s2">
                  <img src="${data.sprites.front_shiny}" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
                  </div>
                  <div class="col s10 left-align">
                  <span class="black-text">
                  <h5 class="black-text light">${data.name} </h5>
                  <span class="black-text">Tipo: ${data.types[0].type.name} </span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dicta veniam provident velit fugit eum sapiente</p>
                  This is a square image. Add the "circle" class to it to make it appear circular.
                  </span>
                  </div>
                  </div>
                  </div>
                  </div>
                  <hr>
               `;
        myPoke.innerHTML = html;
      });
  });
});
// <div class="col s3">
//          <div class="card small">
//            <div class="card-image">
//            <img src="${data.sprites.front_shiny}">
//            <span class="card-title"> ${data.name} </span>
//          </div>
//          <div class="card-content">
//            <p>Tipo: ${data.types[0].type.name} little markup to use effectively.</p>
//          </div>
//          <div class="card-action">
//            <a href="#">This is a link</a>
//          </div>   
//          </div>
//      </div>