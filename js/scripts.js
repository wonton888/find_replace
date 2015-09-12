//used Regex statement

var find_replace = function(string, findWord, replace){
  return string.toLowerCase().replace(new RegExp("(" +findWord+ ")", 'gi'), replace);
}
