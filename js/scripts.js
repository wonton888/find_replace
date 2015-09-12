//used Regex statement, ignoring case type for user input

var find_replace = function(string, findWord, replace){
  return string.toLowerCase().replace(new RegExp("(" +findWord+ ")", 'gi'), replace);
};

$(document).ready(function(){
  $('form#find_replace').submit(function(event){
    var string = $('input#string').val();
    var findWord = $('input#findWord').val();
    var replace = $('input#replace').val();

    var output_string = find_replace(string, findWord, replace);

    $("#result").text(output_string);
    $("#result").show();

    event.preventDefault();
    debugger;
  });
});
