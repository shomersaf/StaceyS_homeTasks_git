function init() {
  var anyInteger = parseInt(
    prompt(
      "Enter a multi-digital integer to check up how many times some digit appears in it"
    )
  );
  var digitToSearch = parseInt(
    prompt(
      "Enter an integer digit to search in the number you've just entered before"
    )
  );
  var appearances = 0;
  var initialnumber = anyInteger;

  function cutter() {
    anyInteger = (anyInteger - (anyInteger % 10)) / 10;
    return anyInteger;
  }

  while (anyInteger > 0) {
    if (anyInteger % 10 === digitToSearch) {
      appearances++;
    }
    cutter();
    //anyInteger = (anyInteger - anyInteger%10)/10;
  }

  alert(`${digitToSearch} appears in ${initialnumber} ${appearances} times`);
}
init();
