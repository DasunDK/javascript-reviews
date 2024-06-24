// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: './images/pic_one.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: './images/pic_two.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: './images/pic_three.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: './images/pic_four.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];


//get element using ID
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const info = document.getElementById("info");

let objID = 0;

//prev-btn click
document.querySelector(".prev-btn").addEventListener('click', () => {
  objID--;
  if (objID < 0) {
    objID = reviews.length - 1;
  }

  setData(objID);
});

//next-btn click
document.querySelector(".next-btn").addEventListener('click', () => {

  objID++;

  if (objID >= reviews.length) {
    objID = 0;
  }

  setData(objID);
});

//suprise me btn
document.querySelector(".random-btn").addEventListener('click', () => {
  objID = Math.floor(Math.random() * reviews.length);
  setData(objID);
  console.log(objID);
});


function setData(objID) {
  img.src = reviews[objID].img;
  author.textContent = reviews[objID].name;
  info.textContent = reviews[objID].text;
}