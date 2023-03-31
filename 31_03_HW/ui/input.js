function genInput (id){
    const input = document.createElement('input');
    input.type = "text";
    input.id = id;
    input.placeholder = "Enter the region...";
    return input;
}