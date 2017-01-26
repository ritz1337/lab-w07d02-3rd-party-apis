function handleGetRandomUser(evt) {
  getUser().then(renderUser).then(updateDOM);
}

function handleGetRandomWord(evt) {
  getWord().then(renderWord).then(updateDOM);
}

function getWord() {
  return fetch('/randomword').then( res => res.json() ).then( data => data.word );
}

function getUser() {
  return fetch('/randomuser').then( res => res.json() ).then( data => data.user );
}

function renderWord(word) {
  return (`
    <p class="word">${word}</p>
  `)
}

function renderUser(user) {
  const {first, last} = user.name;
  return (`
    <p class="user">${first} ${last}</p>
  `)
}

function updateDOM(html) {
  const root = document.querySelector('#root');
  root.innerHTML = html;
}

const $randomUser = document.querySelector('#random_user');
const $randomWord = document.querySelector('#random_word');

$randomUser.addEventListener('click', handleGetRandomUser);
$randomWord.addEventListener('click', handleGetRandomWord);
