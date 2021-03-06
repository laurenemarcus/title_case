describe("titleCase", function(){
  it("capitalize the first letter of a word", function(){
    expect(titleCase("dog")).to.equal("Dog");
  });

  it("converts a word in all uppercase to title case", function() {
    expect(titleCase("DOG")).to.equal("Dog");
  });

  it("capitilizes the first letter in each word of a two word title", function(){
    expect(titleCase("blue dog")).to.equal("Blue Dog");
  });

  it("will not capitalize exception words", function() {
    expect(titleCase("blue the dog")).to.equal("Blue the Dog");
  });

  it("will capitalize exception words at the beginning of the title", function(){
    expect(titleCase("the blue dog")).to.equal("The Blue Dog");
  });

  it("allows numbers in the title", function() {
    expect(titleCase("101 dalmations")).to.equal("101 Dalmations");
  });

  it("converts all letters to lowercase that are not the first letter", function(){
    expect(titleCase("tHE bLuE dOg")).to.equal("The Blue Dog");
  });

});
