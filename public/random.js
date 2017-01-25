function handleGetRandomUser(evt) {
  getUser().then(renderUser).then(updateDOM);
}

function handleGetRandomWord(evt) {
  getWord().then(renderWord).then(updateDOM);
}

function getWord() {
  return fetch('/randomword').then( res => res.json() );
}

function getUser() {
  return fetch('/randomuser').then( res => res.json() );
}

function renderWord(data) {
  return (`
    <p class="word">${data.word}</p>
  `)
}

function renderUser(data) {
  const {user} = data;
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
