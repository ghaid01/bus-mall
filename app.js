'use strict'


function Product(name, src) {
    this.name = name;
    this.src = src;
    this.clickCount = 0;
    this.shownCount = 0;
    Product.all.push(this);
}

Product.all = [];


// var leftimg = document.getElementById('all-products');
// document
new Product('PEN', 'img/pen.jpg');
new Product('BANANA', 'img/banana.jpg');
new Product('BATHROOM', 'img/bathroom.jpg');
new Product('BOOTS', 'img/boots.jpg');
new Product('BREAKFAST', 'img/breakfast.jpg');
new Product('BUBBLEGUM', 'img/bubblegum.jpg');
new Product('CHAIR', 'img/chair.jpg');
new Product('CTHULHA', 'img/cthulha.jpg');
new Product('PET-SWEEP', 'img/pet-sweep.jpg');
new Product('SCISSORS', 'img/scissors.jpg');
new Product('SHARK', 'img/shark.jpg');
new Product('SWEEP', 'img/sweep.jpg');
new Product('TAUNTAUN', 'img/tauntaun.jpg');
new Product('UNICORN', 'img/unicorn.jpg');
new Product('USB', 'img/usb.gif');
new Product('WATER-CAN', 'img/water-can.jpg');
new Product('WINE-GLASS', 'img/wine-glass.jpg');
new Product('BAG', 'img/bag.jpg');
new Product('DRAGON', 'img/dragon.jpg');
new Product('DOG-DUCK', 'img/dog-duck.jpg');

console.log(Product.all);

function render() {
    // var cotainer = document.getElementById('all-products');
    var leftImage = document.getElementById('left-img');
    var leftText = document.getElementById('left-img');

    var centerImage = document.getElementById('center-img');
    var centerText = document.getElementById('center-img');

    var rightImage = document.getElementById('right-img');
    var rightText = document.getElementById('right-img');

    leftImage.shownCount++;
    leftText.shownCount++;
    centerImage.shownCount++;
    centerText.shownCount++;
    rightImage.shownCount++;
    rightText.shownCount++;





}

var leftIndex = Math.floor(Math.random() * Product.all.length);
var leftImg = Product.all[leftIndex];
var centerIndex = Math.floor(Math.random() * Product.all.length);
var centerImg = Product.all[centerIndex];
var rightIndex = Math.floor(Math.random() * Product.all.length);
var rightImg = Product.all[rightIndex];

while (leftIndex === rightIndex) {
    rightIndex = Math.floor(Math.random() * Product.all.length);
}
while (leftIndex === centerIndex) {
    centerIndex = Math.floor(Math.random() * Product.all.length);
}
while (rightIndex === centerIndex) {
    centerIndex = Math.floor(Math.random() * Product.all.length);
}
function clickHandler(event) {
    var clicked = event.target.id;
    var clickedImg;
    if (clicked === 'left-img') {
        clickedImg = leftImg;
    } else if (clicked === 'right-img') {
        clickedImg = rightImg;
    } else if (clicked === 'center-img') {
        clickedImg = centerImg;

    

    }
    if(clickedImg) {

        clickedImg.clickCount++;
    }
}

document.getElementById('all-products').addEventListener('click', clickHandler);

clickHandler();
render();



