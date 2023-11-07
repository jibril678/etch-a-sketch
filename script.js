const gridContainer = document.querySelector('.grid-container')
const resetGridButton = document.querySelector('.reset-grid')
const slider = document.querySelector('.slider')
const sliderValue = document.querySelector('.sliderValue')
const colourSelection = document.querySelector('.colour-pick')
const randomColour = document.querySelector('.random-colour')



function createGrid(cells, colourSelection) {;
    gridContainer.innerHTML = '';
    
    gridContainer.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${cells}, 1fr)`;

    for (let i = 0; i < cells * cells; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridContainer.appendChild(gridItem);
      gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = `${colourSelection.value}`
      })
    }
  }

  createGrid(slider.value, colourSelection);

  function getRandomColour() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    const rgb = `rgb(${r},${g},${b})`
    return rgb
  }

  function createGridRandom(cells) {;
    gridContainer.innerHTML = '';
    
    gridContainer.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${cells}, 1fr)`;

    for (let i = 0; i < cells * cells; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridContainer.appendChild(gridItem);
      gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = getRandomColour()
      })
    }
  }

  slider.addEventListener('input', () => {
    gridContainer.innerHTML = '';
    createGrid(slider.value, colourSelection)
    sliderValue.textContent = slider.value
  })

  resetGridButton.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    createGrid(slider.value, colourSelection)
    sliderValue.textContent = slider.value
  })

  randomColour.addEventListener('click', () => createGridRandom(slider.value))
