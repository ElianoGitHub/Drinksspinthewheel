// Function to generate buttons for each cocktail
function generateButtons() {
    const drinkSelectionDiv = document.getElementById('drinkSelection');
    
    // Directly referencing the cocktails array from the window object
    window.cocktails.forEach(cocktail => {
        const button = document.createElement('button');
        button.innerText = `Spin for ${cocktail.name}`;
        button.onclick = () => spinAndDisplay(cocktail);
        drinkSelectionDiv.appendChild(button);
    });
}

// Function to randomly select a cocktail and display its details
function spinAndDisplay(selectedCocktail) {
    // Clear any previous content from the recipeDisplayDiv
    const recipeDisplayDiv = document.getElementById('recipeDisplay');
    recipeDisplayDiv.innerHTML = '';

    // Logic to spin the wheel can be added here. For simplicity, let's assume a random cocktail is chosen instantly.
    const randomlySelectedCocktail = window.cocktails[Math.floor(Math.random() * window.cocktails.length)];

    // Display the selected cocktail's details
    displayCocktailDetails(randomlySelectedCocktail);
}

// Function to display selected cocktail details
function displayCocktailDetails(cocktail) {
    const recipeDisplayDiv = document.getElementById('recipeDisplay');
    
    // Create elements to display cocktail details
    const cocktailImage = document.createElement('img');
    cocktailImage.src = cocktail.imageUrl;
    cocktailImage.alt = cocktail.name;
    recipeDisplayDiv.appendChild(cocktailImage);
    
    // Display ingredients
    const ingredientsList = document.createElement('ul');
    cocktail.ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.innerText = ingredient;
        ingredientsList.appendChild(listItem);
    });
    recipeDisplayDiv.appendChild(ingredientsList);
  
    // Display instructions
    const instructionsParagraph = document.createElement('p');
    instructionsParagraph.innerText = 'Instructions:';
    recipeDisplayDiv.appendChild(instructionsParagraph);

    const instructionsList = document.createElement('ul');
    cocktail.instructions.forEach(instruction => {
        const listItem = document.createElement('li');
        listItem.innerText = instruction;
        instructionsList.appendChild(listItem);
    });
    recipeDisplayDiv.appendChild(instructionsList);
}

// Call the function to generate buttons when the page loads
window.onload = generateButtons;

  