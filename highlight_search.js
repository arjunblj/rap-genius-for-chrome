var query;

function getText(ocd) {
   query = ocd.selectionText;
}

function searchRG(ocd) {
  var serviceCall = 'http://www.rapgenius.com/search?q=' + ocd.selectionText;
  chrome.tabs.create({url: serviceCall});
}

chrome.contextMenus.create({
  "title": "RapGenius", 
  "contexts":["selection"],
  "onclick": searchRG
});
