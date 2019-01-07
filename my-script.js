var requestURL = 'https://hannahker.github.io/web-development/header.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();