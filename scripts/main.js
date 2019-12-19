window.onload = function() {
    document.getElementById('number-of-blocks').value = 16;
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
            if (item.getAttribute('style') == null) { 
                randomiseHSLColor(item);
            } else if (item.getAttribute('style').slice(-5, -3) >= 10) {
                removeTenLightness(item);
            } else {
                paintedBlack(item);
            }
        })
    })
}

function randomiseHSLColor(element) {
    element.setAttribute('style', `background-color: hsl(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 101)}%, ${Math.floor(Math.random() * 101)}%);`);
}

function removeTenLightness(element) {
    element.setAttribute('style', `${element.getAttribute('style').slice(0, -6)} ${(element.getAttribute('style').slice(-5, -3) - 10)}%);`);
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

// Still to do:
// 2. Add colour option toggles
// 3. Add hold to paint toggle (off means mouseenter, on means mouse hold)
// 4. Structure layout with CSS - make sketchpad centred, buttons in a nav, nice background, etc.