const recipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
};

console.log(recipe.title);
console.log("Serves: " + recipe.servings);
console.log("Ingredients:");
for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}
