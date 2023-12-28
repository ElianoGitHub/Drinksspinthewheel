// Assuming you have the 'cocktails' array defined in cocktails.js

// Function to generate buttons for each cocktail
function generateButtons() {
    const drinkSelectionDiv = document.getElementById('drinkSelection');
    
    cocktails.forEach(cocktail => {
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
    const randomlySelectedCocktail = cocktails[Math.floor(Math.random() * cocktails.length)];
  
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
    instructionsParagraph.innerText = `Instructions: ${cocktail.instructions}`;
    recipeDisplayDiv.appendChild(instructionsParagraph);
  }
  
  // Call the function to generate buttons when the page loads
  window.onload = generateButtons;
  