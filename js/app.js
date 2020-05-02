

let pokeapi = "https://pokeapi.co/api/v2/pokemon/1/";

let pokemonData;

$.getJSON(pokeapi).done(function (data) {
  pokemonData = data;
  const $bulbasaur = $('<img>').attr('id', 'img1').attr('src', data.sprites.front_default).appendTo('.container');


}).fail(function () {
  console.log('Requst to pokeapi failed');
});

class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 10;
    this.sleepiness = 10;
    this.boredom = 10;
    this.age = 0;


  }
}

let bulbasaur = new Pet();
console.log(bulbasaur);
let feedCount = bulbasaur.hunger;
let playCount = bulbasaur.boredom;
let sleepCount = bulbasaur.sleepiness;
let ageCount = bulbasaur.age;
let $hungerMetric = $('#hunger').append(feedCount).css('text-align', 'center');
let $playMetric = $('#play').append(playCount).css('text-align', 'center');
let $sleepMetric = $('#sleep').append(sleepCount).css('text-align', 'center');
let $age = $('#age').append(ageCount).css('text-align', 'center');
const $feedButton = $('#feedbtn');
const $playButton = $('#playbtn');
const $sleepButton = $('#sleepbtn')
const $offLightButton = $('#offLightbtn');
const $resetButton = $('#resetbtn');
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');
const $gameoverModal = $('#modal-gameover');
const $playAgainBtn = $('#playagain');

//Start Game Modal 
const openModal = () => {
  $modal.css('display', 'block');
}

const closeModal = () => {
  $modal.css('display', 'none');
  document.location.reload();
}

$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);

//Game Over Modal

const closeGameOverModal = $playAgainBtn.on('click', function () {
  document.location.reload();

})

//Feed button setup 
const toFeed = () => {
  if (feedCount < 10) {
    let num = feedCount++
    $hungerMetric.empty();
    $p1 = $('<p>').text(num).css('text-align', 'center');
    $hungerMetric.append($p1);
  }
}

const feedBtn = $feedButton.on('click', toFeed);

const feelHungry = () => {
  if (feedCount >= 0) {
    let lessNum = feedCount--
    $hungerMetric.empty();
    $p1 = $('<p>').text(lessNum).css('text-align', 'center');
    $hungerMetric.append($p1);
  }

  if (feedCount === 5) {
    alert("I'm hungry, feed me now!")

  }

  if (feedCount === 0) {
    $gameoverModal.css('display', 'block');

  }

}

const hungryInt = setInterval(function () {
  feelHungry();

}, 3000);


// Play button setup 
const toPlay = () => {
  if (playCount !== 10) {
    let num = playCount++
    console.log(num);
    $playMetric.empty();
    $p1 = $('<p>').text(num).css('text-align', 'center');
    $playMetric.append($p1);
  }
}

const playBtn = $playButton.on('click', toPlay);

const feelBored = () => {
  if (playCount >= 0) {
    let lessNum = playCount--
    $playMetric.empty();
    $p1 = $('<p>').text(lessNum).css('text-align', 'center');
    $playMetric.append($p1);
  }

  if (playCount === 5) {
    alert("I'm feeling bored, play with me now!")
  }


  if (playCount === 0) {
    $gameoverModal.css('display', 'block');
  }
}

const feelBdInt = setInterval(function () {
  feelBored();

}, 8000);

//Sleep button setup 
const toSleep = () => {
  if (sleepCount !== 10) {
    let num = sleepCount++
    console.log(num);
    $sleepMetric.empty();
    $p1 = $('<p>').text(num).css('text-align', 'center');
    $sleepMetric.append($p1);
  }
}

const sleepBtn = $sleepButton.on('click', toSleep);

const feelSleepy = () => {
  if (sleepCount >= 0) {
    let lessNum = sleepCount--
    $sleepMetric.empty();
    $p1 = $('<p>').text(lessNum).css('text-align', 'center');
    $sleepMetric.append($p1);
  }

  if (sleepCount === 4) {
    alert("I'm sleepy now, please turn off the light!")
  }


  if (sleepCount === 0) {
    $gameoverModal.css('display', 'block');
  }
}
const sleepinessInt = setInterval(function () {
  feelSleepy();

}, 10000);


//Turn Off Light button setup 

const offLightBtn = $offLightButton.on('click', function () {
  $('.container').toggleClass('container-night');
  setTimeout("$('.container').toggleClass('container-night');", 5000);

});

//To increase age  
const toAge = () => {
  let addAge = ageCount++
  $age.empty();
  $p = $('<p>').text(addAge).css('text-align', 'center');
  $age.append($p);

}

const ageInt = setInterval(function () {
  toAge();
}, 8000);

//To grow bulbasaur 

const toGrow = () => {
  let plus = 20;

  let timer = setInterval(function () {
    let height = 96;
    let width = 96;

    height = height + plus;
    width = width + plus;

    plus += plus;

    $('#img1').width(width).height(height);

    if (plus >= 250)
      clearInterval(timer);
  }, 50000);

}

//set movement 
const toMove = () => {
  $('#img1').animate({ left: "-=120px" }, 8000);
  $('#img1').animate({ left: "+=80px" }, 8000);
  $('#img1').animate({ top: "-=120px" }, 8000);
  $('#img1').animate({ top: "+=100px" }, 8000);
  $('#img2').animate({ left: "-=80px" }, 8000);
  $('#img2').animate({ left: "+=100px" }, 8000);
  $('#img2').animate({ top: "-=80px" }, 8000);
  $('#img2').animate({ top: "+=120px" }, 8000);


}

const moveInt = setInterval(function () {
  toMove();
}, 8000)


const toMultiply = setTimeout(function () {
  $('<img>').attr('id', 'img2').attr('src', pokemonData.sprites.front_default).appendTo('.container');
}, 50000);

const resetGame = $resetButton.on('click', function () {
  window.location.reload();

});



$(() => {


  toFeed();
  toPlay();
  toSleep();
  toGrow();


});

