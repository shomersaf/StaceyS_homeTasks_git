function loadUsers(ug) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("in server...");
      if (ug) resolve(usersData.filter((user) => user.gender === ug));
      else reject("Something went wrong!");
    }, 2023);
  });
}

let count = 0;

(function () {
  document.querySelector("#getUsers").addEventListener("click", () => {
    spinAndCount();
    getThePromise("male", "blueBorder");
  });
})();

(function () {
  document.querySelector("#getUsers2").addEventListener("click", () => {
    spinAndCount();
    getThePromise("female", "roseBorder");
  });
})();

function spinAndCount() {
  count++;
  document.querySelector("#counter").innerText = `Search counter: ${count}`;
  document.querySelector("#spinner").style.display = "flex";
  document.querySelector("#content").innerText = "";
}

function getThePromise(who,borderColor) {
  loadUsers(who,borderColor)
    .then((usersArray) => {
      for (i = 0; i < usersArray.length; i++) {
        const useriImg = document.createElement("img");
        useriImg.src = usersArray[i].picture.large;
        useriImg.className = borderColor;
        document.querySelector("#content").append(useriImg);
      }
    })
    .catch((err) => {
      document.querySelector("#content").innerText = err;
      document.querySelector("#content").style.color = "rgb(255, 0, 0)";
    })
    .finally(() => {
      document.querySelector("#spinner").style.display = "none";
    });
}
