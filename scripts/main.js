const container = document.querySelector('#container');


function setupGrid() {
    const numberOfBlocks = parseInt(prompt("Choose number of rows/columns in the grid", '16'));
    var fragment = document.createDocumentFragment();

    for (i = 0; i < numberOfBlocks**2; i++) {
        var grid = document.createElement('div');
        grid.classList.toggle('item');
        fragment.appendChild(grid);
    };
    container.appendChild(fragment);
    container.setAttribute("style", `
    grid-template-columns: repeat(${numberOfBlocks}, minmax(1px, 1fr)); 
    grid-template-rows: repeat(${numberOfBlocks}, minmax(1px, 1fr))`); 
}

setupGrid();

var items = document.querySelectorAll('.item');

items.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        if ((item.getAttribute('style') == null) 
            || (item.getAttribute('style').slice(-5, -3) < 10)) { 
        item.setAttribute("style", `background-color: 
        hsl(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 101)}%, ${Math.floor(Math.random() * 101)}%);`);
        console.log(item.getAttribute('style').slice(-5, -3))
        } else {
            item.setAttribute("style", 
                `${item.getAttribute('style').slice(0, -6)} ${(item.getAttribute('style').slice(-5, -3) - 10)}%);`);
            console.log(item.getAttribute('style'))
        }
    })

})

