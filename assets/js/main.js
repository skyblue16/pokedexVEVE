// $('#search_btn').click(function(event) {
//   console.log('Entro');
//   $('#myGif').empty();
//   var gif = $('#textarea1').val();
//   $('#titleMargin').hide();
//   ajaxGif(gif);
//   $('#textarea1').val('');
// });

// function ajaxGif(gif) {
//   $.ajax({
//   	url: 'https://api.giphy.com/v1/gifs/search?',
//     type: 'GET',
//     datatype: 'json',
//     data: {
//       q: gif,
//       api_key: '2MDlExiyLnzP1YyQ2suDZfXL63sfFTwM'
//     }
//   }).done(function(response) {
//     console.log(response);
//     dibujarGifs(response.data);
//   })
// 	 .fail(function() {
//       console.log('error');
//     });
// };

const myGif = document.getElementById('myGif');
fetch('https://pokeapi.co/api/v2/pokemon/5/')
  .then(function(response) {
    // Turns the the JSON into a JS object
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    // Let's make some HTML!
    let html =  `<div class="card small">
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
  </div> `/*`<h2><a href="${data.login}">${data.species.name}</a></h2>
      <p>${data.name}</p>
      <p>Followers: ${data.followers}</p>
    `;*/

    // Put that HTML on the page
    myGif.innerHTML = html;
  });
