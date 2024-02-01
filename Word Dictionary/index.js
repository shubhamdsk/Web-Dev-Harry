const Retry = () => {
  let Try = confirm("Want to Try Again?");
  if (Try) {
    Dict();
  } else {
    console.log("Thank You");
  }
};
let Dict = () => {
  let wordDictionary = {
    apple: "a round fruit with a red or green skin and crisp flesh",
    dog: "a domesticated carnivorous mammal",
    sun: "the star, around which the Earth orbits",
    book: "a written or printed work",
    tree: "a woody perennial plant",
  };

  let wordToFind = prompt("Enter the Word (apple, dog, sun, book, tree): ");
  let word = wordToFind?.toLowerCase();
  let meaning = wordDictionary[word];

  if (meaning) {
    console.log(`The meaning of '${word}' is: ${meaning}`);
    Retry();
  } else {
    alert("Sorry, no word found");
    Retry();
  }
};

Dict();
