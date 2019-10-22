'use strict'
var leftImgElem = null;
var centerImgElem = null;
var rightImgElem = null;

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

Product.container = document.getElementById('all-products');
Product.leftImgElem = document.getElementById('left-img');
Product.leftTextElem = document.getElementById('left-title');

Product.centerImgElem = document.getElementById('center-img');
Product.centerTextElem = document.getElementById('center-title');

Product.rightImgElem = document.getElementById('right-img');
Product.rightTextElem = document.getElementById('right-title');

Product.leftProduct = null;
Product.centerProduct = null;
Product.rightProduct = null;

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

    Product.leftProduct = Product.all[leftIndex];

    Product.centerProduct = Product.all[centerIndex];

    Product.rightProduct = Product.all[rightIndex];



}
// function updateTotal() {
//     var tableBody = document.getElementById('report');
//     tableBody.innerHTML = '';
//     for (var i = 0; i < Product.all.length; i++) {
//         var currentProduct = Product.all[i];
//         var row = addElement('tr', tableBody);
//         addElement('td', row, currentProduct.name);
//         addElement('td', row, '' + currentProduct.clickCount);
//         addElement('td', row, '' + currentProduct.shownCount);
//     }
// }
// function addElement(tag, container, text) {
//     var element = document.createElement(tag);
//     container.appendChild(element);
//     if (text) {
//         element.textContent = text;
//     }
//     return element;
// }
function updateTotal() {
    var parentElement = document.getElementById("report");
    parentElement.innerHTML = '';
    var ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for (var i=0; i< Product.all.length ;i++ ){
        var li = document.createElement('li');
        ul.appendChild(li);
        var currentProduct = Product.all[i];
        console.log('cp',currentProduct);
        var productReport = currentProduct.name + ' had ' + currentProduct.clickCount + ' votes and was shown ' + currentProduct.shownCount + ' times ';
        li.textContent = productReport ;

}
}
function render() {

    selectRandomProducts();

    Product.leftImgElem.setAttribute('src', Product.leftProduct.src);
    Product.centerImgElem.setAttribute('src', Product.centerProduct.src);
    Product.rightImgElem.setAttribute('src', Product.rightProduct.src);

    Product.leftTextElem.textContent = Product.leftProduct.name;
    Product.centerTextElem.textContent = Product.centerProduct.name;
    Product.rightTextElem.textContent = Product.rightProduct.name;


    Product.leftProduct.shownCount++;
    Product.centerProduct.shownCount++;
    Product.rightProduct.shownCount++;
}


// Cannot read property 'target' of undefined
function clickHandler(event) {

    var clicked = event.target.id;
    var clickedProduct;
    if (clicked === 'left-img') {
        clickedProduct = Product.leftProduct;
    } else if (clicked === 'right-img') {
        clickedProduct = Product.rightProduct;
    } else if (clicked === 'center-img') {
        clickedProduct = Product.centerProduct;



    }
    if (clickedProduct) {

        clickedProduct.clickCount++;
        Product.roundCount++;

        updateTotal();
        if (Product.roundCount == Product.roundLimit) {
            alert('You can not click anymore');
            Product.container.removeEventListener('click', clickHandler);
            renderChart();
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


function getProductName() {
    var productName = [];
    for (var i = 0; i < Product.all.length; i++) {
        var instantValue = Product.all[i];
        productName.push(instantValue.name);
    }
    return productName;
}

function clickedPr() {

    var clicked = [];
    for (var i = 0; i < Product.all.length; i++) {
        var instantValue = Product.all[i];

        clicked.push(instantValue.clickCount);
        
    }
    return clicked;
}
function shownPr() {
    var shown = [];
    for (var i = 0; i < Product.all.length; i++) {
        var instantValue = Product.all[i];
        shown.push(instantValue.shownCount);
    }
    return shownPr
}


function renderChart() {
    var ctx = document.getElementById('report-chart').getContext('2d');

    var chart = new Chart(ctx, {

        type: 'bar',

        data: {
            labels: getProductName(),

            datasets: [
                {
                    label: 'Vote',
                    backgroundColor: ['rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)'],
                    borderColor:['rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)','rgb(105,105,105)'],
                    data: clickedPr()
                },
                {
                label: 'Shown',
                backgroundColor:['rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)'],
                borderColor: ['rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)'],
                data: shownPr()
            },
            {
                label: 'Name',
                backgroundColor:['rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)'],
                borderColor:['rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)','rgb(255, 99, 132)'],
                data: getProductName()

            }


            ]
        },

        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

document.getElementById('all-products').addEventListener('click', clickHandler);

updateTotal();
render();


