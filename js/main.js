
// navbar js
const navbarWrp = document.querySelector('.navbar-wrp')
const bar1 = document.querySelector('#Bar1');
const bar2 = document.querySelector('#Bar2');
const bar3 = document.querySelector('#Bar3');
const icnMenu = document.querySelector('.menu-icon');
let isMenuOpen = false;

icnMenu.addEventListener('click', () => {
    if (isMenuOpen) {
        bar1.classList.remove('bar1');
        bar3.classList.remove('bar3');
        bar2.classList.remove('hide-bar2');
        isMenuOpen = false;
    } else {
        bar1.classList.add('bar1');
        bar2.classList.add('hide-bar2');
        bar3.classList.add('bar3');
        isMenuOpen = true;
    }
});

// gallery Page Js 

const galleryCont = document.querySelector('.gallery-cont');
let galleryData = [
    {
        id: 1,
        img: './images & videos/gallery-img/gallery-img1.webp',
        title: 'Gallery Image 1',
    },
    {
        id: 2,
        img: './images & videos/gallery-img/gallery-img2.webp',
        title: 'Gallery Image 2',
    },
    {
        id: 3,
        img: './images & videos/gallery-img/gallery-img3.webp',
        title: 'Gallery Image 3',
    },
    {
        id: 4,
        img: './images & videos/gallery-img/gallery-img4.webp',
        title: 'Gallery Image 4',
    },
    {
        id: 5,
        img: './images & videos/gallery-img/gallery-img5.webp',
        title: 'Gallery Image 5',
    },
    {
        id: 6,
        img: './images & videos/gallery-img/gallery-img6.webp',
        title: 'Gallery Image 6',
    },
    {
        id: 7,
        img: './images & videos/gallery-img/gallery-img7.webp',
        title: 'Gallery Image 7',
    },
    {
        id: 8,
        img: './images & videos/gallery-img/gallery-img8.webp',
        title: 'Gallery Image 8',
    },
    {
        id: 9,
        img: './images & videos/gallery-img/gallery-img9.webp',
        title: 'Gallery Image 9',
    },
    {
        id: 10,
        img: './images & videos/gallery-img/gallery-img10.webp',
        title: 'Gallery Image 10'
    },
    {
        id: 11,
        img: './images & videos/gallery-img/gallery-img1.webp',
        title: 'Gallery Image 11',
    },
    {
        id: 12,
        img: './images & videos/gallery-img/gallery-img2.webp',
        title: 'Gallery Image 12',
    },
    {
        id: 13,
        img: './images & videos/gallery-img/gallery-img3.webp',
        title: 'Gallery Image 13',
    },
    {
        id: 14,
        img: './images & videos/gallery-img/gallery-img4.webp',
        title: 'Gallery Image 14',
    },
    {
        id: 15,
        img: './images & videos/gallery-img/gallery-img5.webp',
        title: 'Gallery Image 15',
    },
    {
        id: 16,
        img: './images & videos/gallery-img/gallery-img6.webp',
        title: 'Gallery Image 16',
    },
    {
        id: 17,
        img: './images & videos/gallery-img/gallery-img7.webp',
        title: 'Gallery Image 17',
    },
    {
        id: 18,
        img: './images & videos/gallery-img/gallery-img8.webp',
        title: 'Gallery Image 18',
    },
    {
        id: 19,
        img: './images & videos/gallery-img/gallery-img9.webp',
        title: 'Gallery Image 19',
    },
    {
        id: 20,
        img: './images & videos/gallery-img/gallery-img10.webp',
        title: 'Gallery Image 20'
    },
];

const galleryImgFunction = () => {
    for (imgData of galleryData) {
        galleryCont.innerHTML += `
            <div id="${imgData.id}" class="col-md-3 col-6 mb-1 ">
                <img src="${imgData.img}" alt="${imgData.title}" class="img-fluid rounded-3">
            </div> `
    };
};
if (galleryCont) {
    galleryImgFunction();
};
// indoor game page Js 

const indoorGameCont = document.querySelector('.indoor-game-cont');
let indoorGameData = [
    {
        id: 0,
        img: './images & videos/indoor-img/table-tennis.jpg',
        img1: './images & videos/indoor-img/table-tennis-1.jpg',
        img2: './images & videos/indoor-img/table-tennis-2.jpg',
        img3: './images & videos/indoor-img/table-tennis-3.jpg',
        img4: './images & videos/indoor-img/table-tennis-4.jpg',
        title: 'Table Tennis',
        desc: 'Table tennis, also known as ping-pong and whiff-whaff, is a bat-and-ball sport.',
    },
    {
        id: 1,
        img: './images & videos/indoor-img/snooker.webp',
        img1: './images & videos/indoor-img/snooker-1.jpg',
        img2: './images & videos/indoor-img/snooker-2.jpg',
        img3: './images & videos/indoor-img/snooker-3.jpg',
        img4: './images & videos/indoor-img/snooker-4.jpg',
        title: 'Snooker',
        desc: 'Snooker is a cue sport played on a rectangular table with six pockets.',
    },
    {
        id: 2,
        img: './images & videos/indoor-img/basketball.webp',
        img1: './images & videos/indoor-img/basketball-1.jpg',
        img2: './images & videos/indoor-img/basketball-2.jpg',
        img3: './images & videos/indoor-img/basketball-3.jpg',
        img4: './images & videos/indoor-img/basketball-4.jpg',
        title: 'Basketball',
        desc: 'Basketball is a team sport in which two teams, most commonly of five players each.',
    },
    {
        id: 3,
        img: './images & videos/indoor-img/bowling.webp',
        img1: './images & videos/indoor-img/bowing-1.jpg',
        img2: './images & videos/indoor-img/bowing-2.jpg',
        img3: './images & videos/indoor-img/bowing-3.jpg',
        img4: './images & videos/indoor-img/bowing-4.jpg',
        title: 'Bowling',
        desc: 'Bowling is a target sport and recreational activity in which a player rolls or throws a bowling ball.',
    },
    {
        id: 4,
        img: './images & videos/indoor-img/chess.webp',
        img1: './images & videos/indoor-img/chess-1.jpg',
        img2: './images & videos/indoor-img/chess-2.jpg',
        img3: './images & videos/indoor-img/chess-3.jpg',
        img4: './images & videos/indoor-img/chess-4.jpg',
        title: 'Chess',
        desc: 'Chess is a two-player strategy board game played on a chessboard.',
    },
    {
        id: 5,
        img: './images & videos/indoor-img/kickboxing.webp',
        img1: './images & videos/indoor-img/kickboxing-1.jpg',
        img2: './images & videos/indoor-img/kickboxing-2.jpg',
        img3: './images & videos/indoor-img/kickboxing-3.jpg',
        img4: './images & videos/indoor-img/kickboxing-4.jpg',
        title: 'Kick Boxing',
        desc: 'Kickboxing is a group of stand-up combat sports based on kicking and punching.',
    },
];

const indoorGameFunction = () => {
    for (indoorGame of indoorGameData) {
        indoorGameCont.innerHTML += `
        <a href="indoorsports.html"><div id="${indoorGame.id}" class="col ge-card">
        <div class="card h-100">
        <img src="${indoorGame.img}" class="card-img-top" alt="${indoorGame.title}">
        <div class="card-body">
        <h5 class="card-title">${indoorGame.title}</h5>
        <p class="card-text game-card-para mt-4">${indoorGame.desc}</p>
        </div>
        </div>
        </div></a> `
    };
};
if (indoorGameCont) {
    indoorGameFunction();
};

const sportsDiscCont = document.querySelector('.sports-disc-cont');
let gameDisc;
const indoorSportsDiscFunction = (index) => {
    gameDisc = `
    <div class="row px-2">
            <div class="col-md-6">
                <img src="${indoorGameData[index].img2}" alt="" class="img-fluid rounded rounded-3">
            </div>
            <div class="col-md-6 py-3 px-2 text-center">
                <h5>${indoorGameData[index].title}</h5>
                <hr>
                <p class="text-muted text-start px-2">${indoorGameData[index].desc}</p>
                <h6 class="mt-5">Be part of our vibrant sports community. <br>Fill the form for membership now </h6>
                <a  class="mt-4 btn btn-dark rounded rounded-1 border border-2 border-dark join-btn" href="membership.html">Join Us</a>
            </div>
        </div>
        <div class="container row sports-gallery">
            <div class="col-md-3 col-sm-6">
                <img class="sports-img rounded rounded-2 img-fluid" src="${indoorGameData[index].img}" alt="${indoorGameData[index].title}">
            </div>
            <div class="col-md-3 col-sm-6">
                <img class="sports-img rounded rounded-2 img-fluid" src="${indoorGameData[index].img2}" alt="${indoorGameData[index].title}">
            </div>
            <div class="col-md-3 col-sm-6">
                <img class="sports-img rounded rounded-2 img-fluid" src="${indoorGameData[index].img3}" alt="${indoorGameData[index].title}">
            </div>
            <div class="col-md-3 col-sm-6">
                <img class="sports-img rounded rounded-2 img-fluid" src="${indoorGameData[index].img4}" alt="${indoorGameData[index].title}">
            </div>
        </div>
        <p class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, atque ea, nobis aperiam inventore maxime fuga libero reiciendis magnam autem non corrupti tenetur doloribus? Reprehenderit magnam, facilis eveniet eius, ea ut officia, modi consequuntur at veniam hic placeat expedita? Dolorem eos quasi eligendi nesciunt, odit similique harum? Deserunt, molestiae ratione?</p>
    `
};

const rndom = () => {
    const gameCards = document.querySelectorAll('.ge-card')
    for (gameCrd of gameCards) {
        gameCrd.addEventListener('click', (e) => {
            indoorSportsDiscFunction(e.currentTarget.id);
            localStorage.setItem("gameDisc", JSON.stringify(gameDisc));
        });
    };
};
if (indoorGameCont) {
    setTimeout(rndom(), 1000)
};

if (sportsDiscCont) {
    gameDisc = JSON.parse(localStorage.getItem("gameDisc"));
}
const gameDiscFun = () => {
    sportsDiscCont.innerHTML = gameDisc;
};
if (sportsDiscCont) {
    gameDiscFun()
};


// outdoor game page Js 

const outdoorGameCont = document.querySelector('.outdoor-game-cont');
let outdoorGameData = [
    {
        id: 0,
        img: './images & videos/outdoor-img/football.png',
        img1: './images & videos/outdoor-img/football-1.jpg',
        img2: './images & videos/outdoor-img/football-2.jpg',
        img3: './images & videos/outdoor-img/football-3.jpg',
        img4: './images & videos/outdoor-img/football-4.jpg',
        title: 'Football',
        desc: 'Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.',
    },
    {
        id: 1,
        img: './images & videos/outdoor-img/golf.webp',
        img1: './images & videos/outdoor-img/golf-1.jpg',
        img2: './images & videos/outdoor-img/golf-2.jpg',
        img3: './images & videos/outdoor-img/golf-3.jpg',
        img4: './images & videos/outdoor-img/golf-4.jpg',
        title: 'Golf',
        desc: 'Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course.',
    },
    {
        id: 2,
        img: './images & videos/outdoor-img/cricket.webp',
        img1: './images & videos/outdoor-img/cricket-1.webp',
        img2: './images & videos/outdoor-img/cricket-2.webp',
        img3: './images & videos/outdoor-img/cricket-3.jpg',
        img4: './images & videos/outdoor-img/cricket-4.webp',
        title: 'Cricket',
        desc: 'Cricket is a bat-and-ball game played between two teams of eleven players on a field.',
    },
    {
        id: 3,
        img: './images & videos/outdoor-img/swimming.webp',
        img1: './images & videos/outdoor-img/swimming-1.jpg',
        img2: './images & videos/outdoor-img/swimming-2.jpg',
        img3: './images & videos/outdoor-img/swimming-3.jpg',
        img4: './images & videos/outdoor-img/swimming-4.jpg',
        title: 'Swimming',
        desc: 'swimming is an individual or team racing sport that requires the use of one\'s entire body to move through water.',
    },
    {
        id: 4,
        img: './images & videos/outdoor-img/baseball.webp',
        img1: './images & videos/outdoor-img/baseball-1.jpg',
        img2: './images & videos/outdoor-img/baseball-2.jpg',
        img3: './images & videos/outdoor-img/baseball-3.jpg',
        img4: './images & videos/outdoor-img/baseball-4.jpg',
        title: 'Base Ball',
        desc: 'Baseball is a bat-and-ball game played between two opposing teams who take turns batting and fielding.',
    },
    {
        id: 5,
        img: './images & videos/outdoor-img/tennis.webp',
        img1: './images & videos/outdoor-img/tennis-1.jpg',
        img2: './images & videos/outdoor-img/tennis-2.jpg',
        img3: './images & videos/outdoor-img/tennis-3.jpg',
        img4: './images & videos/outdoor-img/tennis-4.jpg',
        title: 'Tennis',
        desc: 'Tennis is a racket sport that can be played individually against a single opponent.',
    },
];

const outdoorGameFunction = () => {
    for (outdoorGame of outdoorGameData) {
        outdoorGameCont.innerHTML += `
            <a href="outdoorsports.html"><div id="${outdoorGame.id}" class="col ge-card2">
                <div class="card h-100">
                    <img src="${outdoorGame.img}" class="card-img-top" alt="${outdoorGame.title}">
                    <div class="card-body">
                        <h5 class="card-title">${outdoorGame.title}</h5>
                        <p class="card-text game-card-para mt-4">${outdoorGame.desc}</p>
                    </div>
                </div>
            </div></a>`
    };
    console.log("hello");
};
if (outdoorGameCont) {
    outdoorGameFunction();
};

const sportsDiscCont2 = document.querySelector('.sports-disc-cont2');
let gameDisc2;
const indoorSportsDiscFunction2 = (index) => {
    gameDisc2 = `
    <div class="row px-2">
            <div class="col-md-6">
                <img src="${outdoorGameData[index].img3}" alt="" class="img-fluid rounded rounded-3">
            </div>
            <div class="col-md-6 py-3 px-2 text-center">
                <h5>${outdoorGameData[index].title}</h5>
                <hr>
                <p class="text-muted text-start px-2">${outdoorGameData[index].desc}</p>
                <h6 class="mt-5">Be part of our vibrant sports community. <br>Fill the form for membership now </h6>
                <a  class="mt-4 btn btn-dark rounded rounded-1 border border-2 border-dark join-btn" href="membership.html">Join Us</a>
            </div>
        </div>
        <div class="container row sports-gallery">
            <div class="col-md-3 col-sm-6">
                <img class="sports-img rounded rounded-2 img-fluid" src="${outdoorGameData[index].img}" alt="${outdoorGameData[index].title}">
            </div>
            <div class="col-md-3 col-sm-6">
                <img class="sports-img rounded rounded-2 img-fluid" src="${outdoorGameData[index].img2}" alt="${outdoorGameData[index].title}">
            </div>
            <div class="col-md-3 col-sm-6">
                <img class="sports-img rounded rounded-2 img-fluid" src="${outdoorGameData[index].img3}" alt="${outdoorGameData[index].title}">
            </div>
            <div class="col-md-3 col-sm-6">
                <img class="sports-img rounded rounded-2 img-fluid" src="${outdoorGameData[index].img4}" alt="${outdoorGameData[index].title}">
            </div>
        </div>
        <p class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, atque ea, nobis aperiam inventore maxime fuga libero reiciendis magnam autem non corrupti tenetur doloribus? Reprehenderit magnam, facilis eveniet eius, ea ut officia, modi consequuntur at veniam hic placeat expedita? Dolorem eos quasi eligendi nesciunt, odit similique harum? Deserunt, molestiae ratione?</p>
    `
};


const rndom2 = () => {
    const gameCards = document.querySelectorAll('.ge-card2')
    for (gameCrd of gameCards) {
        gameCrd.addEventListener('click', (e) => {
            indoorSportsDiscFunction2(e.currentTarget.id);
            localStorage.setItem("gameDisc2", JSON.stringify(gameDisc2));
        });
    };
};
if (outdoorGameCont) {
    setTimeout(rndom2(), 1000)
};

if (sportsDiscCont2) {
    gameDisc2 = JSON.parse(localStorage.getItem("gameDisc2"));
}
const gameDiscFun2 = () => {
    sportsDiscCont2.innerHTML = gameDisc2;
};
if (sportsDiscCont2) {
    gameDiscFun2()
};
// feedback js 
const ratingDiv = document.querySelector('.rating-div');
let rating = 0;
let count = 1;
const ratingFun = (index)=>{
    ratingDiv.innerHTML = ""
    rating = index;
    for(let i = 0; i < 5; i++){
        if(i < rating){
            ratingDiv.innerHTML += `<i onclick="ratingFun(${i+1})" id="" class="ri-star-fill stars"></i>`;
        }else{
            ratingDiv.innerHTML += `<i onclick="ratingFun(${i+1})" id="" class="ri-star-line stars"></i>`;
        }
    };
    console.log(rating)
};