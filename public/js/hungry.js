const $search = document.querySelector('#search');
const $query = document.querySelector('#query');

function handleClick(evt) {
  search($query.value).then(render).then(updateDOM);
}

function search(query) {
  return fetch(`/recipes/search?q=${query}`).then( res => res.json() );
}

function render(res) {
  const recipes = res.recipes.results.map(renderRecipe).join('');
  return (`
    <div class="recipes">
      ${recipes}
    </div>
  `)
}

function renderRecipe(recipe) {
  return (`
    <div class="recipe">
      <h1>${recipe.title}</h1>
      <img src="${recipe.thumbnail}">
      <p>${recipe.ingredients}</p>
    </div>
  `)
}

function updateDOM(html) {
  const $root = document.querySelector('#root');
  $root.innerHTML = html;
}

$search.addEventListener('click', handleClick);
