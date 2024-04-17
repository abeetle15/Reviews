// create consts for every element that needs to change
const nameDisplay = document.querySelector('#name');
const photo = document.querySelector('#photo');
const job = document.querySelector('#job');
const reviewText = document.querySelector('#review-text');

const leftArrow = document.querySelector('#left-btn');
const rightArrow = document.querySelector('#right-btn');
const randomBtn = document.querySelector('#random-btn');

// create an boyArray with name, image, job, review text for each one
const boyReviews = [
  {
    id: 1,
    name: 'Adam',
    photo: 'images/adam-pic.jpeg',
    job: 'Actor/Carpenter',
    review: "Hot and abusive. Keeps a bunch of wood and tools laying arround. Will be there for you when you need hem the most. Moves like a huge child.",
  },
  {
    id: 2,
    name: 'Laird',
    photo: 'images/laird-pic.jpeg',
    job: `Landlord/Single father`,
    review: "Recovering addict with a heart of gold. A little bit creepy. Will raise your baby if you decide to have sex with him.",
  },
  {
    id: 3,
    name: 'Desi',
    photo: 'images/desi-pic.jpeg',
    job: `"Musician"`,
    review: "The original dude who carries a guitar. Impulsive buyer. Will do anything to please you but has zero clue as to how. Has cried during sex",
  },
  {
    id: 4,
    name: 'Elijah',
    photo: 'images/elijah-pic.jpeg',
    job: `Server/Orgy attender`,
    review: "Hot mess. Gay.",
  },
  {
    id: 5,
    name: 'Ray',
    photo: 'images/ray-pic.jpeg',
    job: `Coffee shop owner/City council official`,
    review: "Arguably the only real adult of the bunch.",
  },
  {
    id: 6,
    name: 'Charlie',
    photo: 'images/charlie-pic.jpg',
    job: `Tech entrepreneur`,
    review: `Nice guy who turned into a villain after being acused of being a wimp (correctly). Sad.`,
  },
  {
    id: 7,
    name: 'Tad',
    photo: 'images/tad-pic.jpeg',
    job: `College professor`,
    review: `Sensitive father. Gay. Will marry you and give you several wonderful years together before coming out.`,
  },

];

// create a function that displays every characteristic in the corresponding space for each object in the boyArray using currentBoyIndex
let currentBoyIndex = 0;

function showBoy() {
  let currentBoy = boyReviews[currentBoyIndex];
  nameDisplay.textContent = currentBoy.name;
  photo.src = currentBoy.photo;
  job.textContent = currentBoy.job;
  reviewText.textContent = currentBoy.review;
};

showBoy(currentBoyIndex);
// add event listener to make arrow buttons to cycle through the boys

// make the show me my husband btn display a random boy

/* make the site open with an object that covers the page and only shows the show me my husband button 
to start the experience and make it go away*/