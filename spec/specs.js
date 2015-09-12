describe("findReplace", function(){
  it ("returns a single word inputed", function(){
    expect(find_replace("Apple", "apple", "orange")).to.equal("orange");
  });
});
