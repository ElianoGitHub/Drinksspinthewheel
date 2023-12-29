// Function to initialize and populate the spinning wheel
function initializeAndPopulateWheel() {
    // ... [rest of the code remains unchanged]

    // Function to spin the wheel
    function spinWheel() {
        // ... [rest of the code remains unchanged]

        // Apply spinning animation to the arrow (spinning class added)
        const spinButton = document.getElementById('spinButton');
        spinButton.classList.add('spinning');

        // After a certain duration (e.g., 3-5 seconds), select a recipe and display its details
        setTimeout(function() {
            spinButton.classList.remove('spinning'); // Remove the spinning class

            // Logic to determine which recipe was selected
            const selectedRecipeIndex = Math.floor(Math.random() * window.cocktails.length);
            const selectedRecipe = window.cocktails[selectedRecipeIndex];

            // Highlight the selected cocktail by changing the button background color to gold
            spinButton.style.backgroundColor = 'gold';

            // Display the selected cocktail's details
            displayCocktailDetails(selectedRecipe);
        }, 4000); // Adjust the duration based on your needs

        // Start spinning the wheel
        wheel.spin();
    }

    // Call the spinWheel function when you want to start the spin, e.g., when a button is clicked
    const spinButton = document.getElementById('spinButton');
    if (spinButton) {
        spinButton.addEventListener('click', spinWheel);
    }
}

// Function to generate buttons for each cocktail
function generateButtons() {
    // ... [rest of the code remains unchanged]
}

// Function to randomly select a cocktail and display its details
function spinAndDisplay(selectedCocktail) {
    // ... [rest of the code remains unchanged]
}

// Function to display selected cocktail details
function displayCocktailDetails(cocktail) {
    // ... [rest of the code remains unchanged]
}

// Call the function to initialize and populate the wheel when the page loads
window.onload = function() {
    initializeAndPopulateWheel(); // Initialize the spinning wheel
    generateButtons(); // Generate buttons for each cocktail
};
