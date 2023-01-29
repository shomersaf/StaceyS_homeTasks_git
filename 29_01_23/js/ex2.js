function init() {
  const fruits = [
    "oranges",
    "grapefruits",
    "grapefruits",
    "mandarins",
    "bananas",
    "bananas",
  ];
  const relevantFruit = "grapefruits";
  function countAppearances(someArray, someValue) {
    let appearances = 0;

    for (let i = 0; i <= someArray.length - 1; i++) {
      if (someArray[i] == someValue) {
        appearances++;
      }
    }
    return appearances;
  }
  let result = countAppearances(fruits, relevantFruit);

  //console.log(`The ${relevantFruit} appears in ${fruits} ${result} times`);

  document.write(`<hr />`);
  document.write(`The ${relevantFruit} appears in ${fruits} ${result} times`);
}

init();
