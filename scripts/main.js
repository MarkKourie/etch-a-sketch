window.onload = function() {
    document.getElementById('number-of-blocks').value = 3;
    setupGrid();
    colorChangeBehaviour();
}

const container = document.querySelector('#container');

function setupGrid() {
    const numberOfBlocks = getNumberFromInput();
    var fragment = document.createDocumentFragment();

    for (i = 0; i < numberOfBlocks**2; i++) {
        var grid = document.createElement('div');
        grid.classList.toggle('item');
        fragment.appendChild(grid);
    };
    container.appendChild(fragment);
    addGridAttribute(container, numberOfBlocks)
}

function addGridAttribute(element, numberOfColumnsAndRows) {
    element.setAttribute('style', `grid-template-columns: repeat(${numberOfColumnsAndRows}, minmax(1px, 1fr)); grid-template-rows: repeat(${numberOfColumnsAndRows}, minmax(1px, 1fr))`)
}

function colorChangeBehaviour() {
    var items = document.querySelectorAll('.item');
    items.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            if (item.getAttribute('style') == null && document.getElementById('rainbow').checked) { 
                randomiseHSLColor(item);
            } else if (document.getElementById('black').checked) {
                paintedBlack(item);
            } else {
                removeLightness(item);
            } 
        })
    })
}

function randomiseHSLColor(element) {
    element.setAttribute('style', `background-color: hsl(${Math.floor(Math.random() * 256)}, 100%, 50%);`);
}

function removeLightness(element) {
    if (element.getAttribute('style') == null) {
        element.setAttribute('style', 'background-color: hsl(0, 0%, 90%);');
    } else if (element.getAttribute('style').slice(-6, -3) >= 10) {
        console.log(element.getAttribute('style'));
        element.setAttribute('style', `${element.getAttribute('style').slice(0, -6)} ${(element.getAttribute('style').slice(-6, -3) - 5)}%);`);
    } else {
        paintedBlack(element);
    }
}

function paintedBlack(element) {
    element.setAttribute('style', 'background-color: hsl(000, 0%, 0%');
}

function removeStyle() {
    var items = document.querySelectorAll('.item');
    items.forEach((item) => {
        item.removeAttribute('style');
    })
}

function getNumberFromInput() {
   return document.getElementById("number-of-blocks").value;
}

//buttons
var resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', (e) => removeStyle());

var resizeButton = document.querySelector('#resize');
resizeButton.addEventListener('click', (e) => {
    setupGrid();
    colorChangeBehaviour();
    removeStyle();
});
