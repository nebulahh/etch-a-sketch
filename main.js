const button = document.querySelector('#button');
const gridContainer = document.querySelector('#container');

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColorGenerator() {
  const randomCol = `rgba(${random(255)}, ${random(255)}, ${random(255)}, 1.0)`;
  return randomCol;
}

function makeFirstGridRowsAndColumn(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div');
    gridContainer.appendChild(cell).className = 'grid-item';

    cell.addEventListener('mouseenter', () => {
      cell.style.backgroundColor = randomColorGenerator();
    });
    cell.addEventListener('mouseleave', () => {
      cell.style.backgroundColor = randomColorGenerator();
    });
  }
}
makeFirstGridRowsAndColumn(16, 16);

function createNewGridAfterValidInput() {
  let gridNum = parseInt(prompt('how many squares per side for new grid?: '));

  if (gridNum <= 64) {
    makeFirstGridRowsAndColumn(gridNum, gridNum);
  } else {
    do {
      alert('enter a number less than 64');
      gridNum = parseInt(prompt('how many squares per side for new grid?: '));
    } while (gridNum > 64);
    makeFirstGridRowsAndColumn(gridNum, gridNum);
  }
}

// clears the grid when button is clicked
function clearGrid() {
  gridContainer.innerText = '';
  createNewGridAfterValidInput();
}

button.addEventListener('click', clearGrid);
