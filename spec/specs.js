describe("findReplace", function(){
  it ("returns a single word inputed with replacement word", function(){
    expect(find_replace("apple", "apple", "orange")).to.equal("orange");
  });
  it ("returns a string of words with replacement word", function(){
    expect(find_replace("hello world", "world", "bed")).to.equal("hello bed");
  });
  it ("returns a single word inputed when user replacement word is not found in user input", function(){
    expect(find_replace("apple", "kiwi", "grapes")).to.equal("apple");
  });
  it ("returns a string of words when user replacement word is not found in user input", function(){
    expect(find_replace("hello world", "howdy", "orange")).to.equal("hello world");
  });
  it ("returns a string of words with two instances of the replacement word", function(){
    expect(find_replace("hello world world", "world", "food")).to.equal("hello food food");
  });
  it ("finds matches regardless of capitalization", function(){
    expect(find_replace("Hello teacher", "hello", "Bad")).to.equal("Bad teacher");
  });
});
