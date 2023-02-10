let offset = 0;
const SliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
  offset = offset + 340;
  if (offset > 2040) {
    offset = 0;
  }
  SliderLine.style.left = -offset + 'px';


});
document.querySelector('.slider-prev').addEventListener('click', function () {
  offset = offset - 340;
  if (offset < 0) {
    offset = 2040;
  }

  SliderLine.style.left = -offset + 'px';
});


const blockHover = document.getElementById("hover-on");

const textHover = document.getElementById("hover-active");

blockHover.addEventListener('mouseover', () => {
  textHover.classList.add('active');
});
blockHover.addEventListener('mouseout', () => {
  textHover.classList.remove('active');
});
console.log(blockHover, textHover)




const oneMap = document.getElementById("map-1")
const mainMap = document.getElementById("map-main")
let screenWidth = window.screen.width;
oneMap.addEventListener('click', async function f() {
  mainMap.style.backgroundImage = "url('../valorant/assets/img/main-map-2.png')";
  screenWidth = window.screen.width;
  if (screenWidth == 1024) {
    mainMap.style.height = '514px';
    console.log(screenWidth)
  } else {
    mainMap.style.height = '863px';
    console.log(screenWidth)
  } if (screenWidth == 1024) {
    mainMap.style.marginTop = '65px';
  } else {
    mainMap.style.marginTop = '70px';
  }
  mainMap.style.transition = '0.2s';
  return
})
const mainMapTwo = document.getElementById("map-main")
const twoMap = document.getElementById("map-2")
twoMap.addEventListener('click',async function a() {
  mainMap.style.backgroundImage = "url('../valorant/assets/img/main-map-3.png')";
  screenWidth = window.screen.width;
  if (screenWidth == 1024) {
    mainMap.style.height = '514px';
  } else {
    mainMap.style.height = '863px';
  } if (screenWidth == 1024) {
    mainMap.style.marginTop = '65px';
  } else {
    mainMap.style.marginTop = '70px';
  }
  mainMapTwo.style.transition = '0.2s';
  return
})
const threeMap = document.getElementById("map-3")
threeMap.addEventListener('click',async function b() {
  mainMap.style.backgroundImage = "url('../valorant/assets/img/main-map-4.png')";
  screenWidth = window.screen.width;
  if (screenWidth == 1024) {
    mainMap.style.height = '514px';
  } else {
    mainMap.style.height = '863px';
  } if (screenWidth == 1024) {
    mainMap.style.marginTop = '65px';
  } else {
    mainMap.style.marginTop = '70px';
  }
  mainMap.style.transition = '0.2s';

  return
})
const fourMap = document.getElementById("map-4")
fourMap.addEventListener('click',async function c() {
  mainMap.style.backgroundImage = "url('../valorant/assets/img/main-map-5.png')";
  screenWidth = window.screen.width;
  if (screenWidth == 1024) {
    mainMap.style.height = '514px';
  } else {
    mainMap.style.height = '863px';
  } if (screenWidth == 1024) {
    mainMap.style.marginTop = '65px';
  } else {
    mainMap.style.marginTop = '70px';
  }
  mainMap.style.transition = '0.2s';
  return
})
const fiveMap = document.getElementById("map-5")
fiveMap.addEventListener('click',async function d() {
  mainMap.style.backgroundImage = "url('../valorant/assets/img/main-map-6.png')";
  screenWidth = window.screen.width;
  if (screenWidth == 1024) {
    mainMap.style.height = '514px';
  } else {
    mainMap.style.height = '863px';
  } if (screenWidth == 1024) {
    mainMap.style.marginTop = '65px';
  } else {
    mainMap.style.marginTop = '70px';
  }
  mainMap.style.transition = '0.2s';
  return
})
const sixMap = document.getElementById("map-6")
sixMap.addEventListener('click',async function f() {
  mainMap.style.backgroundImage = "url('../valorant/assets/img/main-map-7.png')";
  screenWidth = window.screen.width;
  if (screenWidth == 1024) {
    mainMap.style.height = '514px';
  } else {
    mainMap.style.height = '863px';
  } if (screenWidth == 1024) {
    mainMap.style.marginTop = '65px';
  } else {
    mainMap.style.marginTop = '70px';
  }
  mainMap.style.transition = '0.2s';
  return
})
document.querySelector(".five_block_map").addEventListener("mousemove",function mouse(){
  if (screenWidth == 1024) {
    mainMap.style.height = '514px';

  } else {
    mainMap.style.height = '863px';
  } if (screenWidth == 1024) {
    mainMap.style.marginTop = '65px';
  } else {
    mainMap.style.marginTop = '70px';
  }
  mainMap.style.transition = '0.2s';
  screenWidth = window.screen.width;
})




