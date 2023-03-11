function init() {
  drawCountriesSelect();
  drawCarsSelect();
  drawUsersSelect();
}

init();

function drawCountriesSelect() {
  const onlyCountriesNames = countries.map((currentCountry) => {
    return {
      text: currentCountry.name.common,
      value: currentCountry?.flags?.svg,
    };
  });
  const select = getSelect(onlyCountriesNames, drawFlag);
  document.querySelector("#selectLocation").append(select);
  drawFlag(select.value);
}

function drawCarsSelect() {
  const carsa = cars.map((c) => {
    return {
      text: c.Name,
      value: c.Acceleration,
    };
  });
  const select = getSelect(carsa, drawAcceleration);
  document.querySelector("#selectLocation").append(select);
  drawAcceleration(select.value);
}

function drawAcceleration(acc) {
  document.querySelector("#acc").innerHTML = "";
  document.querySelector("#acc").innerHTML = acc;
}

function drawFlag(linkSrc) {
  const img = getImg(linkSrc);
  document.querySelector("#flag").innerHTML = "";
  document.querySelector("#flag").append(img);
}


function drawUsersSelect( ) {
  const ourUsers = users.map((u) => {
    return {
      text: u.email,
      value: u?.picture?.medium,
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
}