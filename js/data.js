/* exported data */
var data = {
  pageview: null,
  list: [],
  lastsearch: null
};

var previousDataListJSON = localStorage.getItem('data-model');

if (previousDataListJSON !== null) {
  data = JSON.parse(previousDataListJSON);
}

function stringifyFunction(event) {
  var dataModelJSON = JSON.stringify(data);
  localStorage.setItem('data-model', dataModelJSON);
}

window.addEventListener('beforeunload', stringifyFunction);
