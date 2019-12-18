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



