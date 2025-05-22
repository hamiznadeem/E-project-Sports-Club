
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
        id: 0,
        img: './images & videos/indoor-img/bowling-4.jpg',
        title: 'Gallery Image 24',
    },
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
        img: './images & videos/indoor-img/table-tennis-2.jpg',
        title: 'Gallery Image 11',
    },
    {
        id: 12,
        img: './images & videos/indoor-img/snooker-1.jpg',
        title: 'Gallery Image 12',
    },
    {
        id: 13,
        img: './images & videos/indoor-img/basketball-1.jpg',
        title: 'Gallery Image 13',
    },
    {
        id: 14,
        img: './images & videos/indoor-img/bowling-1.jpg',
        title: 'Gallery Image 14',
    },
    {
        id: 15,
        img: './images & videos/indoor-img/chess-1.jpg',
        title: 'Gallery Image 15',
    },
    {
        id: 16,
        img: './images & videos/indoor-img/kickboxing-1.jpg',
        title: 'Gallery Image 16',
    },
    {
        id: 17,
        img: './images & videos/outdoor-img/football-3.jpg',
        title: 'Gallery Image 17',
    },
    {
        id: 18,
        img: './images & videos/outdoor-img/swimming-2.jpg',
        title: 'Gallery Image 18',
    },
    {
        id: 19,
        img: './images & videos/outdoor-img/tennis-3.jpg',
        title: 'Gallery Image 19',
    },
    {
        id: 20,
        img: './images & videos/outdoor-img/cricket-3.jpg',
        title: 'Gallery Image 20'
    },
    {
        id: 21,
        img: './images & videos/outdoor-img/swimming-4.jpg',
        title: 'Gallery Image 21',
    },
    {
        id: 22,
        img: './images & videos/indoor-img/basketball-4.jpg',
        title: 'Gallery Image 22',
    },
    {
        id: 23,
        img: './images & videos/outdoor-img/baseball-4.jpg',
        title: 'Gallery Image 23',
    },
];

const galleryImgFunction = () => {
    for (imgData of galleryData) {
        galleryCont.innerHTML += `
            <div id="${imgData.id}" class="col-md-3 col-6 mb-1 gallery-img">
                <img src="${imgData.img}" alt="${imgData.title}" class="img-fluid rounded-3" loading="lazy">
            </div> `
    };
};
if (galleryCont) {
    galleryImgFunction();
};

const imageBox = document.querySelector('.image-box')
const galleryImages = document.querySelectorAll('.gallery-img')
const imgBoxImage = document.querySelectorAll('.image-box-img')

const fullSizeImgFun = () => {
    galleryImages.forEach(galleryImg => {
        galleryImg.addEventListener('click', (e) => {
            let imgSrc = galleryData[e.currentTarget.id].img;
            imageBox.innerHTML = `
            <span class="close-btn" onclick="fullSizeCloseFun()"><i class="ri-close-circle-fill"></i></span>
            <img id="image-box-img" src="${imgSrc}"  loading="lazy" alt="Expanded View">
            `
            imageBox.classList.remove('d-none');
        });
    });
};

if(galleryImages){
    fullSizeImgFun();
};

const fullSizeCloseFun = () =>{
    imageBox.classList.add('d-none')
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
        rules: 'Table tennis is played to 11 points, with players alternating serves every 2 points; the ball must be served legally and returned after one bounce. A point is lost if a player fails to make a legal serve or return, hits the ball off the table, or into the net.'
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
        rules:'Snooker is played by potting balls in a set order to score points, starting with reds (1 point each) followed by colored balls (2–7 points) in sequence. A frame is won by the player with the most points, and fouls like missing the ball or potting the cue ball give points to the opponent.'
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
        rules: 'Basketball is played between two teams aiming to score by shooting the ball into the opponents hoop, with field goals worth 2 or 3 points and free throws worth 1 point. The team with the most points at the end of four 12-minute quarters (NBA) wins; violations and fouls result in turnovers or free throws.'
    },
    {
        id: 3,
        img: './images & videos/indoor-img/bowling.webp',
        img1: './images & videos/indoor-img/bowling-1.jpg',
        img2: './images & videos/indoor-img/bowling-2.jpg',
        img3: './images & videos/indoor-img/bowling-3.jpg',
        img4: './images & videos/indoor-img/bowling-4.jpg',
        title: 'Bowling',
        desc: 'Bowling is a target sport and recreational activity in which a player rolls or throws a bowling ball.',
        rules:'In bowling, players roll a ball down a lane to knock down 10 pins, with each game consisting of 10 frames. A strike (all pins down in one roll) or spare (all pins down in two rolls) earns bonus points; highest total score wins.'
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
        rules:'Chess is a two-player strategy game where the goal is to checkmate the opponents king, putting it under threat with no legal escape.Players take turns moving pieces with distinct rules, aiming to control the board and capture key pieces.'
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
        rules:'Kickboxing is a combat sport combining punches and kicks, where fighters score points through clean, effective strikes or win by knockout. Bouts are divided into timed rounds, and protective gear is typically worn depending on the ruleset.'
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
        <hr>
    <h6>Rules &nbsp; <br> <span class="text-muted mt-3">${indoorGameData[index].rules}</span></h6>
        <hr>
        <p class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, atque ea, nobis aperiam inventore maxime fuga libero reiciendis magnam autem non corrupti tenetur doloribus? Reprehenderit magnam, facilis eveniet eius, ea ut officia, modi consequuntur at veniam hic placeat expedita? Dolorem eos quasi eligendi nesciunt, odit similique harum? Deserunt, molestiae ratione?</p>
        <!-- timing section -->
    <section class="container timing-section my-5">
        <div class="text-center mb-4">
            <h6>Timings</h6>
            <p class="text-muted">Stay Fit, Stay Active!</p>
            <hr>
        </div>
        <div class="card  shadow-lg">
            <div class="card-body">
                <table class="table table-bordered text-center">
                    <thead class="table-dark">
                        <tr>
                            <th>Day</th>
                            <th>Opening Time</th>
                            <th>Closing Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday - Friday</td>
                            <td>6:00 AM</td>
                            <td>10:00 PM</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>8:00 AM</td>
                            <td>8:00 PM</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td colspan="2">Closed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
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
        rules:'Football (soccer) is played between two teams of 11 players aiming to score by getting the ball into the opponents goal without using hands (except the goalkeeper). The team with the most goals after two 45-minute halves wins; fouls, offsides, and penalties follow strict rules.'
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
        rules:'Golf is an individual sport where players use clubs to hit a ball into a series of holes in as few strokes as possible. The player with the lowest total strokes over 18 holes wins the game.'
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
        rules:'Cricket is played between two teams of 11 players where one bats to score runs and the other bowls and fields to get them out. The team with the most runs after their innings wins; matches have a set number of overs or innings depending on the format.'
    },
    {
        id: 3,
        img: './images & videos/outdoor-img/swimming.webp',
        img1: './images & videos/outdoor-img/swimming-1.jpg',
        img2: './images & videos/outdoor-img/swimming-2.jpg',
        img3: './images & videos/outdoor-img/swimming-3.jpg',
        img4: './images & videos/outdoor-img/swimming-4.jpg',
        title: 'Swimming',
        desc: 'swimming is an individual or team racing sport that requires the use of ones entire body to move through water.',
        rules:'Swimming is a race where individuals or teams compete to swim a set distance in the fastest time using approved strokes like freestyle, breaststroke, backstroke, or butterfly. The fastest swimmer to complete the distance wins the race.'
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
        rules:'Baseball is played between two teams of nine players, where the batting team tries to score runs by hitting the ball and running bases. The team with the most runs after nine innings wins; the fielding team tries to get batters out through strikes, catches, or tagging runners.'
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
        rules:'Tennis is played between two players (singles) or two teams of two (doubles), who hit a ball over a net aiming to win points by making the ball land in the opponent’s court without return. A player wins a game by scoring 4 points with a 2-point lead, sets by winning 6 games, and matches typically by best of 3 or 5 sets.'
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
        <hr>
        <h6>Rules &nbsp; <br> <span class="text-muted mt-3">${outdoorGameData[index].rules}</span></h6>
        <hr>
        <p class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, atque ea, nobis aperiam inventore maxime fuga libero reiciendis magnam autem non corrupti tenetur doloribus? Reprehenderit magnam, facilis eveniet eius, ea ut officia, modi consequuntur at veniam hic placeat expedita? Dolorem eos quasi eligendi nesciunt, odit similique harum? Deserunt, molestiae ratione?</p>
        <!-- timing section -->
    <section class="container timing-section my-5">
        <div class="text-center mb-4">
            <h5>Timings</h5>
            <p class="text-muted">Stay Fit, Stay Active!</p>
            <hr>
        </div>
        <div class="card  shadow-lg">
            <div class="card-body">
                <table class="table table-bordered text-center">
                    <thead class="table-dark">
                        <tr>
                            <th>Day</th>
                            <th>Opening Time</th>
                            <th>Closing Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday - Friday</td>
                            <td>6:00 AM</td>
                            <td>10:00 PM</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>8:00 AM</td>
                            <td>8:00 PM</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td colspan="2">Closed</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
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
const ratingFun = (index) => {
    ratingDiv.innerHTML = ""
    rating = index;
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            ratingDiv.innerHTML += `<i onclick="ratingFun(${i + 1})" id="" class="ri-star-fill stars"></i>`;
        } else {
            ratingDiv.innerHTML += `<i onclick="ratingFun(${i + 1})" id="" class="ri-star-line stars"></i>`;
        }
    };
    console.log(rating)
};

// home page Js 
