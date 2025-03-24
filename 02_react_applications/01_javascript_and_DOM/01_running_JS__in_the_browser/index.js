console.log("Hello from JavaScript");


let addRecipe = (title, steps) =>
{
    const recipesContainer = document.getElementById("recipe-container")
    const titleElement = document.createElement("p");
    titleElement.textContent = title;
    
    const orderedListEl = document.createElement("ol");
    steps.map(step =>
    {
        const listItem = document.createElement("li");
        listItem.textContent = step;
        orderedListEl.appendChild(listItem);
    });

    recipesContainer.appendChild(titleElement);
    recipesContainer.appendChild(orderedListEl);
}

const pancakesSteps = [
    "Mix flour, eggs, milk, and sugar in a bowl.",
    "Heat a pan and add some butter.",
    "Pour batter and cook until golden brown.",
    "Flip and cook the other side.",
    "Serve with syrup or fruits."
];
addRecipe("Pancakes Recipe", pancakesSteps);

// Recipe 2: Scrambled Eggs
const scrambledEggsSteps = [
    "Crack eggs into a bowl and whisk with salt & pepper.",
    "Heat butter in a pan over medium heat.",
    "Pour eggs into the pan and stir continuously.",
    "Cook until eggs are fluffy and slightly runny.",
    "Serve immediately with toast."
];
addRecipe("Scrambled Eggs Recipe", scrambledEggsSteps);

// jsonplaceholder is a website that returns placeholder JSON responses.

const getToDoData = async () =>
{
    const toDoContainer = document.getElementById("todo-container");
    try{
        const todoId = Math.floor(Math.random() * 200) + 1; // Random number from 1 to 200
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        const data = await response.json();
        console.log(data);
        toDoContainer.innerHTML = "";
        const toDoEl = document.createElement("p");
        toDoEl.textContent = `${data.title}`;
        toDoContainer.appendChild(toDoEl);
    } catch (error)
    {
        console.error("Error fetching title", error);
    }
};

document.addEventListener("DOMContentLoaded", () =>
{
    const buttonToDoEl = document.querySelector("#my-todo-button");
    buttonToDoEl.addEventListener("click", getToDoData);
    getToDoData();
})


const getRandomJoke = async () =>
{
    const URL = "https://official-joke-api.appspot.com/random_joke";
    try{
        const jokeContainer = document.getElementById("joke-container");
        const response = await fetch(URL);
        const data = await response.json();
        const jokeEl = document.createElement("p");
        jokeEl.textContent = `${data.setup} - ${data.punchline}`;
        jokeContainer.innerHTML = "";
        jokeContainer.appendChild(jokeEl);
    } catch (error)
    {
        console.error("Error fetching joke:", error)
    }
};
document.addEventListener("DOMContentLoaded", () => {
    const buttonEl = document.querySelector("#my-joke-button");

    // Attach event listener once
    buttonEl.addEventListener("click", getRandomJoke);

    // Optionally, load a joke when the page loads
    getRandomJoke();
});

