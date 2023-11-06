function createGrid(cells) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
    
    gridContainer.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${cells}, 1fr`;

    for (let i = 0; i < cells * cells; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridContainer.appendChild(gridItem);
    }
  }

  createGrid(16);


  // 1. hover over with black color effect
  // 2. reset grid button
  // 3. user input for grid size
  // 4. random color button
  // 5. color choice button
  // 6. webpage design