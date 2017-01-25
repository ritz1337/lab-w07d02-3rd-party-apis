const $rate = document.querySelector('#get_rate');
const $amount = document.querySelector('#amount');

function handleClick(evt) {
  getRates($amount.value).then(render).then(updateDOM);
}

function getRates(amount) {
  return fetch(`/exchange?amount=${amount}`).then( res => res.json() );
}

function render(res) {
  const data = res.data;
  let rows = '';
  for (let rate in data.rates) {
    rows += `<tr><td>${rate}</td><td>${data.rates[rate]}</td>`
  }
  let html = (`
    <table>
      <tr><td>Country</td><td>Amount</td>
      ${rows}
    </table>
  `)
  return html;
}

function updateDOM(html) {
  const root = document.querySelector('#root');
  root.innerHTML = html;
}

$rate.addEventListener('click', handleClick);
