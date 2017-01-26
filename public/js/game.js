function handleClick(evt) {
  getTrivia().then(render).then(updateDOM);
}

function getTrivia() {
  return fetch('/trivia').then( res => res.json() );
}

function render(data)  {
  const questions = data.trivia.results.map( result => `<li>${result.question}</li>` ).join('');
  const html = (`
    <ul>
    ${questions}
    </ul>
  `);
  return html;
}

function updateDOM(html) {
  const root = document.querySelector('#root');
  root.innerHTML = html;
}

const $start = document.querySelector('#start');
$start.addEventListener('click', handleClick);
