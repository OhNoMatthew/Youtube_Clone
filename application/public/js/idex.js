function fadeOut(ev) {
  let cardDiv = ev.currentTarget;
  cardDiv.classList.add('fade-out');

  setTimeout(function() {
    cardDiv.remove();
    document.getElementById('photo_count').textContent = document.getElementById('main-content').childElementCount;
  }, 500);
}

function buildCardHTML(data) {
  return `<div class="card">
    <p class="card-title">${data.title}</p>
    <img class="card-image" src="${data.url}" alt="a square with a specific color with text of its size"> </img>
  </div>`;
}

function buildCardJSAPI(data) {
  let cardDiv = document.createElement('div');
  cardDiv.setAttribute('class','card');
  let cardTitle = document.createElement('p')
  cardTitle.appendChild(document.createTextNode(data.title));
  cardTitle.setAttribute('class','card-title');
  let imgTag = document.createElement('img');
  imgTag.setAttribute('src',data.url);
  imgTag.setAttribute('class','card-image');
  cardDiv.appendChild(cardTitle);
  cardDiv.appendChild(imgTag);

  cardDiv.addEventListener('click', fadeOut)

  return cardDiv;
}

fetch ("https://jsonplaceholder.typicode.com/albums/2/photos")
  .then(function(resp){
  return resp.json()
  })
  .then(function(resp_data){
    let container = document.getElementById('main-content');
    resp_data.forEach(function (photo) {
      container.appendChild(buildCardJSAPI(photo))
    });
    document.getElementById('photo_count').textContent=resp_data.length;
  })
  .catch(
  function(error) {
    console.log(error);
  });

/*
  [...document.getElementsByClassName('card')].forEach(function (cardDiv){
    cardDiv.addEventListener('click',function(e){
      console.log(e.target);
      console.log(e.currentTarget);
    })
  });

        htmlString += buildCardHTML(photo);
    container.innerHTML += htmlString;
     let htmlString = "";
*/

