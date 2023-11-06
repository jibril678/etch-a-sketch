const gridContainer = document.querySelector('.grid-container')
const resizeGridButton = document.querySelector('.resize-grid')
const resetGridButton = document.querySelector('.reset-grid')
const slider = document.querySelector('.slider')
const sliderValue = document.querySelector('.sliderValue')



function createGrid(cells, selectedColour) {;
    gridContainer.innerHTML = ''; // Clear any content
    
    gridContainer.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${cells}, 1fr)`;

    for (let i = 0; i < cells * cells; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridContainer.appendChild(gridItem);
      gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = `${selectedColour}`
      })
    }

  }

  createGrid(16, 'black');

  
  slider.addEventListener('input', () => {
    createGrid(slider.value, 'black')
    sliderValue.textContent = slider.value
  })

  resetGridButton.addEventListener('click', () => location.reload())


  // 1. hover over with black color effect - DONE
  // 2. reset grid button - DONE
  // 3. user input for grid size - DONE
  // 4. random color button
  // 5. color choice button
  // 6. webpage design 