function init() {
  drawUsersSelect();
}

init();


function drawFlag(linkSrc) {
  const img = getImg(linkSrc);
  document.querySelector("#flag").innerHTML = "";
  document.querySelector("#flag").append(img);
}


function drawUsersSelect( ) {
  const ourUsers = users.map((u) => {
    return {
      text: u.email,
      value: u.picture?.medium,
    };   
  });
  const select = getSelect(ourUsers, drawUserPic);
  document.querySelector("#selectLocation").append(select);
  drawUserPic(select.value);
}

function drawUserPic(picture) {
  const img = getImg(picture);
  document.querySelector("#pic").innerHTML = "";
  document.querySelector("#pic").append(img);

  var user = users.find(u => u.picture?.medium == picture);
  var country = countries.find(c => c.cca2 == user.nat);
  drawFlag(country?.flags?.svg)
}