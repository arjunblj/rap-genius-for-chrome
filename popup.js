document.getElementById('go').addEventListener('click', function() {
  chrome.tabs.update({url: 'http://www.rapgenius.com/search?q=' + 
  	document.getElementById('query')});
});
