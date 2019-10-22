'use strict'

var leftProduct = null;
var centerProduct = null;
var rightProduct = null;

function Product(name, src) {
    this.name = name;
    this.src = src;
    this.clickCount = 0;
    this.shownCount = 0;
    Product.all.push(this);
}
Product.roundCount = 0;
Product.roundLimit = 10;


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
new Product('CTHULHU', 'img/cthulhu.jpg');
new Product('PET-SWEEP', 'img/pet-sweep.jpg');
new Product('SCISSORS', 'img/scissors.jpg');
new Product('SHARK', 'img/shark.jpg');
new Product('SWEEP', 'img/sweep.png');
new Product('TAUNTAUN', 'img/tauntaun.jpg');
new Product('UNICORN', 'img/unicorn.jpg');
new Product('USB', 'img/usb.gif');
new Product('WATER-CAN', 'img/water-can.jpg');
new Product('WINE-GLASS', 'img/wine-glass.jpg');
new Product('BAG', 'img/bag.jpg');
new Product('DRAGON', 'img/dragon.jpg');
new Product('DOG-DUCK', 'img/dog-duck.jpg');

console.log(Product.all);

// Set left, center and right global variables
function selectRandomProducts() {

    var leftIndex = Math.floor(Math.random() * Product.all.length);
    var centerIndex = Math.floor(Math.random() * Product.all.length);
    var rightIndex = Math.floor(Math.random() * Product.all.length);
    
    while (leftIndex === rightIndex) {
        rightIndex = Math.floor(Math.random() * Product.all.length);
    }
    while (leftIndex === centerIndex) {
        centerIndex = Math.floor(Math.random() * Product.all.length);
    }
    while (rightIndex === centerIndex) {
        centerIndex = Math.floor(Math.random() * Product.all.length);
    }

    leftProduct = Product.all[leftIndex];

    centerProduct = Product.all[centerIndex];

    rightProduct = Product.all[rightIndex];

    

}
function updateTotal() {
    var tableBody = document.getElementById('all-products');
    tableBody.innerHTML = '';
    for (var i = 0; i < Product.all.length; i++) {
        var product = Product.all[i];
        var row = addElement('tr', tableBody);
        addElement('td', row, Product.name);
        addElement('td', row, '' + Product.clickCount);
        addElement('td', row, '' + Product.shownCount);
      }
    }
    function addElement(tag, container, text) {
        var element = document.createElement(tag);
        container.appendChild(element);
        if(text) {
          element.textContent = text;
        }
        return element;
      }



function render() {
    // var container = document.getElementById('all-products');
    var leftImgElem = document.getElementById('left-img');
    var leftTextElem = document.getElementById('left-title');

    var centerImgElem = document.getElementById('center-img');
    var centerTextElem = document.getElementById('center-title');

    var rightImgElem = document.getElementById('right-img');
    var rightTextElem = document.getElementById('right-title');


    selectRandomProducts();

    leftImgElem.setAttribute('src', Product.leftProduct.src);
    centerImgElem.setAttribute('src', Product.centerProduct.src);
    rightImgElem.setAttribute('src', Product.rightProduct.src);

    leftTextElem.textContent = Product.leftProduct.name;
    centerTextElem.textContent = Product.centerProduct.name;
    rightTextElem.textContent = Product.rightProduct.name;


    leftProduct.shownCount++;
    centerProduct.shownCount++;
    rightProduct.shownCount++;
}


// Cannot read property 'target' of undefined
function clickHandler(event) {

    var clicked = event.target.id;
    var clickedProduct;
    if (clicked === 'left-img') {
        clickedProduct = Product.leftImg;
    } else if (clicked === 'right-img') {
        clickedProduct = Product.rightImg;
    } else if (clicked === 'center-img') {
        clickedProduct= Product.centerImg;



    }
    if(clickedProduct) {

        clickedProduct.clickCount++;
        Product.roundCount++;

        updateTotal();
        if(Product.roundCount == Product.roundLimit){
            console.log(Product.container);
            alert('You can not click anymore');
            Product.container.removeEventlistener('click' , clickHandler);
        } else {
            render();
        }
    }
    
    
    // update the shown counter
    // check the round counter against limit
    //          stop user clicks if over limit
    // select new products
    // render the new products
}

    

document.getElementById('all-products').addEventListener('click', clickHandler);

updateTotal();
render();