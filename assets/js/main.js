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
    let html = `<h2><a href="${data.html_url}">${data.login}</a></h2>
      <p>${data.name}</p>
      <p>Followers: ${data.followers}</p>
    `;

    // Put that HTML on the page
    myGif.innerHTML = html;
  });
