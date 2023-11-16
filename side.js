// const slider = document.querySelector('.slide');
// const sliderItems = document.querySelectorAll('.slide-item');
// let currentIndex = 0;
// const intervalTime = 4000; // 3 seconds

// function startSlider() {
//     setInterval(() => {
//         moveSlider(1);
//     }, intervalTime);
// }

// function moveSlider(direction) {
//     currentIndex += direction;
//     if (currentIndex === sliderItems.length){
//         currentIndex = 0;
//     } else if (currentIndex < 0) {
//         currentIndex = sliderItems.length - 1;
//     }

//     const translateValue = -currentIndex * 100;
//     slider.style.transform = `translateX(${translateValue}%)`;
// }

// startSlider();


const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;
const intervalTime = 4000; // 3 seconds

function EndSlider() {
    setInterval(() => {
        moveSlider(1);
    }, intervalTime);
}

function moveSlider(direction) {
    currentIndex += direction;
    if (currentIndex === sliderItems.length){
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = sliderItems.length - 1;
    }

    const translateValue = -currentIndex * 100;
    slider.style.transform = `translateX(${translateValue}%)`;
}

EndSlider();

