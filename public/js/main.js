var $randomWord = $('#random-word')
var $randomUser = $('#random-user')
var $triviaButton = $('#trivia-get')
var $xButton = $('#exchange-rate')

// function to get and append random word
var ranWord = (evt) => {
  evt.stopPropagation();
  $.get('/randomword', function(response) {
      $('.rword').html(response)
      console.log(response);
  })
}

// function to get and append random user
var ranUser = (evt) => {
  evt.stopPropagation();
  $.get('/randomuser', function(response) {
    var userObject = response;
    var userName = userObject.results[0].name
    var firstName = userName.first
    var lastName = userName.last
    // var name = JSON.stringify(response);
    // var user = name.results
    // console.log(name);
    // console.log(user);
    // console.log(userObject);
    console.log(userName);
    console.log(firstName);

    $('.ruser').html(firstName + " " + lastName)
  })
}

// function to get and render trivia questions
var trivia = (evt) => {
  evt.stopPropagation();
  $.get('/trivia', function(response) {
    var results = response.results
    console.log(response);
    console.log(results);
    console.log(results[0]);
    var text = '<ul>'
    for (var i = 0; i < results.length; i++) {
      text += '<li>' + JSON.stringify(results[i]) + '</li>';
    }
    text += '</ul>'
    $('body').append(text);

  })
}

var exchange = (evt) => {
  evt.stopPropagation();
  var query = $('#exchange-value').val();
  // console.log(query);
  $.get(`/exchange/?amount=${query}`, function(response) {
    console.log(response.AUD)
    console.log(response);
    var finalResults = JSON.stringify(response)
    $('body').append(finalResults);
  })
}

$randomWord.on('click', ranWord)
$randomUser.on('click', ranUser)
$triviaButton.on('click', trivia)
$xButton.on('click', exchange)
