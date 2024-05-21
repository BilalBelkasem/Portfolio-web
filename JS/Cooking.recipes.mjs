document.addEventListener('DOMContentLoaded', function() {
    const recipeForm = document.getElementById('recipeForm');
    const recipeList = document.getElementById('recipeList');

    
    fetch('../JS/Recipes-list.json')
        .then(response => response.json())
        .then(data => {
            data.recipes.forEach(recipe => {
                displayRecipe(recipe);
            });
        })
        .catch(error => console.error('Error fetching recipes:', error));

    
    recipeForm.addEventListener('submit', function(event) {
        event.preventDefault();

       
        const name = document.getElementById('recipeName').value;
        const ingredients = document.getElementById('ingredients').value.split(',').map(item => item.trim());
        const prepTime = document.getElementById('prepTime').value;
        const difficulty = document.getElementById('difficulty').value;
        const instructions = document.getElementById('instructions').value.split('\n').map(item => item.trim());

      
        const newRecipe = {
            name,
            ingredients,
            prepTime,
            difficulty,
            instructions
        };

      
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes = [...recipes, newRecipe]; 
        localStorage.setItem('recipes', JSON.stringify(recipes));

       
        displayRecipe(newRecipe);

       
        recipeForm.reset();

       
        alert(`Recipe added successfully!:\nName: ${newRecipe.name}\nPreparing time: ${newRecipe.prepTime} minutes\nLevel required: ${newRecipe.difficulty}`);
    });

   
    function displayRecipe(recipe) {
        const li = document.createElement('li');
        li.textContent = `\nName: ${recipe.name}, \nPreparing time: ${recipe.prepTime} minutes, \ningredients: ${recipe.ingredients}, \nLevel required: ${recipe.difficulty}`;
        recipeList.appendChild(li);
    }
});
