function createGrid(cells) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Clear any existing content
    
    gridContainer.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${cells}, 1fr`;

    for (let i = 0; i < cells * cells; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridContainer.appendChild(gridItem);
    }
  }

  createGrid(16);