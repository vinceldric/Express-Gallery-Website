fetch(`${window.location.origin}/api/v0/gallery`)
  .then(function(response){
    // JSON `data` returned from server
    // We need to convert it in a Javascript object
    return response.json();
  })
  .then(function(places){
    // `data`Javavascript object 
    console.log(places);

    let outputHTML = '';

    places.forEach(function(place){
      outputHTML += 
      `<figure class="card">
        <img src="/${place.imagePath}" alt="Random Places: ${place.title}" width="${place.width}" height="${place.height}">
          <figcaption>
            ${place.title} by <a href="${place.url}"> ${place.credit} </a>
          </figcaption>
      </figure>`;
    })

    // output to DOM
    document.querySelector('.gallery').innerHTML = outputHTML;

  })
  .catch(function(error){
    if (error) {
      console.log('Oh Noooooooos!');
    }
  });