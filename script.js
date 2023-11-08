// Button Selections and Global Variables
const gridContainer = document.querySelector('.grid-container');
const resetGridButton = document.querySelector('#clear');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.sliderValue');
const colourSelection = document.querySelector('.colour-pick');
const randomColour = document.querySelector('#rainbow-mode');
const colourMode = document.querySelector('#colour-mode');
// Set default colour mode
let currentColourMode = 'default';
// Initialise mouseover status
let isMouseDown = false;

// Update colour mode
function changeColourMode(newColourMode) {
  currentColourMode = newColourMode;
}

// New Grid
function createGrid(cells) {;
    gridContainer.innerHTML = '';
    
    gridContainer.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${cells}, 1fr)`;

    for (let i = 0; i < cells * cells; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridContainer.appendChild(gridItem);
      gridItem.addEventListener('mouseover', () => {
        if (isMouseDown) {
          if (currentColourMode === 'default') {
              gridItem.style.backgroundColor = `${colourSelection.value}`
          } else if (currentColourMode === 'rainbow') {
              gridItem.style.backgroundColor = getRandomColour();
          }
      }})
    }
  }

// Functions
  function getRandomColour() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
  }

  function resetGrid () {
    gridContainer.innerHTML = '';
    createGrid(slider.value);
    sliderValue.textContent = slider.value;
  }


// Event Listeners
  resetGridButton.addEventListener('click', resetGrid);
  colourMode.addEventListener('click', () => changeColourMode('default'));
  randomColour.addEventListener('click', () => changeColourMode('rainbow'));
  document.addEventListener('mousedown', () => isMouseDown = true);
  document.addEventListener('mouseup', () => isMouseDown = false);
  slider.addEventListener('input', () => {
    createGrid(slider.value);
    sliderValue.textContent = slider.value;
  })

  // On page load
  createGrid(slider.value);
