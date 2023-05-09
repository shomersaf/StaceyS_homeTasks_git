function getInput(id, txt) {
  const input = document.createElement("input");
  input.type = "text";
  input.id = id;
  input.placeholder = txt;
  return input;
}
