$(document).ready(function() {

$("#query").keyup(function(event){
  if(event.keyCode == 13){
    $("#search").click();
  }
});

document.getElementById('fetch').addEventListener('click', function() {
  chrome.tabs.update({url: 'http://www.rapgenius.com/search?q=' + 
  	document.getElementById('query').value});
});	

});