// this line create a variable to get the plain text JSON file
const requestURL = 'https://raw.githubusercontent.com/braulio0790/braulio0790/master/business.json';

//This si the fetch method with one parameter required (JSON URL). 
fetch(requestURL)
   //This line is a promise that will return a response
  .then(function (response) {
    return response.json();
  })
  //convert a response data in JavaScript object format.
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    // This variable will take the JS object and conver it into an array in JS named prophets
    const business = jsonObject['business'];
    //This "for" will loop each of the items inside the array and put it into the html tags, also the loop will create some of the HTML tags to embeed the content 
    business.forEach( business => {
      if (business.name == "Carnes Garibaldi" || business.name == "Tortas Ahogadas las Famosas" || business.name == "Helados Dolphy" || business.name == "Santo Coyote" || business.name == "Sacromonte" || business.name == "La Gorda" || business.name == "La Casa de los Platos") {
       let card = document.createElement('section');     
       let h2 = document.createElement('h2');
       let date = document.createElement('p');
       let description = document.createElement('p');
       let contact = document.createElement('p');
       let website = document.createElement('a');
       let image = document.createElement('img');

       h2.textContent = business.name
       date.textContent = 'Year Established: '+ business.yearFounded;
       description.textContent = 'Description: '+ business.description;
       contact.textContent = 'Contact Info: '+ business.contact;
       website.textContent = 'Website: '+ business.website;
       image.setAttribute('src', `img/${business.photo}`);

       card.appendChild(image);
       card.appendChild(h2);
       card.appendChild(date);
       card.appendChild(description);
       card.appendChild(contact);
       card.appendChild(website);

       document.querySelector('div.business').appendChild(card);
     }
    });
  });