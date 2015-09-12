$(document).ready(function(){
  $("form#find_replace").submit(function(event){
    var string = $("input#string").val();
    var findWord = $("input#findWord").val();
    var replace = $("input#replace").val();

    var output_string = find_replace(string, findWord, replace);

    $(".output").text(output_string);
    $("#result").show();

    event.preventDefault();
  })
})
