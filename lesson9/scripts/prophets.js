const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = function (prophets) {
  const cards = document.querySelector("div.cards");

  prophets.forEach((prophet) => {
    let section = document.createElement('section');
    let header = document.createElement('h2');
    let img = document.createElement('img');
    let birthday = document.createElement('p');
    let placeOfBirth = document.createElement('p');

  // Build the h2 content out to show the prophet's full name - finish the template string
    header.textContent = `${prophet.name} ${prophet.lastname}`;

    birthday.textContent = `Birthdate: ${prophet.birthdate}`;
    placeOfBirth.textContent = `Place of birth: ${prophet.birthplace}`;

  // Build the image portrait by setting all the relevant attribute
  // src, alt, lazy loading, width, height

    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day Saint Prophet`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '340');
    img.setAttribute('height', '440');

  // Append the section(card) with the created elements
    section.appendChild(header);
    section.appendChild(birthday);
    section.appendChild(placeOfBirth);
    section.appendChild(img);

    cards.appendChild(section);
  });
}