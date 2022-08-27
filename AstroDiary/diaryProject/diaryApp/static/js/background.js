const canvas = document.getElementById('canvas');
const stars = [];
const planets = [];

const init = () => {
    const background = document.getElementById('body-container');
    canvas.width = background.offsetWidth;
    canvas.height = background.offsetHeight;
    for (let i=0; i<35; i++) {
        stars.push({
            x: Math.random(),
            y: Math.random(),
            size: Math.random(),
            change: 0.1,
            type: Math.ceil(Math.random()*3),
        })
    }
    for (let i=0; i<6; i++) {
        planets.push({
            x: Math.random(),
            y: Math.random(),
            size: Math.random()*0.5 + 0.5,
            type: Math.ceil(Math.random()*3),
        })
    }
    const isSpecial = Math.round(Math.random());
    if (isSpecial === 1) {
        planets.push({
            x: Math.random(),
            y: Math.random(),
            size: Math.random()*0.5 + 0.5,
            type: 4,
        })
    }
}

// const twinkle = () => {
//     for (const star of stars) {
//         if (star.size < 0.1) {
//             star.change = 0.1;
//         } else if (star.size >= 0.8) {
//             star.change = -0.1;
//         }
//         star.size += star.change;
//     }
// }

const star1 = new Image();
const star2 = new Image();
const star3 = new Image();
star1.src = 'http://localhost:8000/static/img/star1.svg';
star2.src = 'http://localhost:8000/static/img/star2.svg';
star3.src = 'http://localhost:8000/static/img/star3.svg';
const planet1 = new Image();
const planet2 = new Image();
const planet3 = new Image();
const planetS = new Image();
planet1.src = 'http://localhost:8000/static/img/planet1.svg';
planet2.src = 'http://localhost:8000/static/img/planet2.svg';
planet3.src = 'http://localhost:8000/static/img/planet3.svg';
planetS.src = 'http://localhost:8000/static/img/planet_special.svg';

const render = () => {
    const {width, height} = canvas;
    const context = canvas.getContext('2d');
    for (const star of stars) {
        if (star.type === 1) {
            context.drawImage(star1, star.x*width, star.y*height, star.size*20, star.size*20);
        } else if (star.type === 2) {
            context.drawImage(star2, star.x*width, star.y*height, star.size*20, star.size*20);
        } else if (star.type === 3) {
            context.drawImage(star3, star.x*width, star.y*height, star.size*20, star.size*20);
        }
    }
    for (const planet of planets) {
        if (planet.type === 1) {
            context.drawImage(planet1, planet.x*width, planet.y*height, planet.size*50, planet.size*50);
        } else if (planet.type === 2) {
            context.drawImage(planet2, planet.x*width, planet.y*height, planet.size*50, planet.size*50);
        } else if (planet.type === 3) {
            context.drawImage(planet3, planet.x*width, planet.y*height, planet.size*96, planet.size*54);
        } else if (planet.type === 4) {
            context.drawImage(planetS, planet.x*width, planet.y*height, planet.size*67.5, planet.size*105);
        }
    }
}

// const update = () => {
//     twinkle();
//     renderStar();
// }

init();
setInterval(render, 500);
