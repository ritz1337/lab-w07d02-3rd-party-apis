function handleClick(evt) {
  const profile = $profile.value
  getProfile(profile).then(render).then(updateDOM);
}

function getProfile(profile) {
  return fetch(`/github/${profile}`).then( res => res.json() );
}

function render(profile) {
  return (`
    <div class="profile">
      <a href="${profile.url}">${profile.name}</a>
      <img src="${profile.avatar_url}">
    </div>
  `);
}

function updateDOM(html) {
  const root = document.querySelector('#root')
  root.innerHTML = html;
}

const $profile = document.querySelector('#profile');;
const $btn = document.querySelector('#find');

$btn.addEventListener('click', handleClick)
