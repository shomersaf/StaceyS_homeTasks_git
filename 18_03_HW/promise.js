function loadUsers(ug) {
    return new Promise ((resolve, reject)=>{
      setTimeout (()=>{
        console.log("in server...");
        if (ug) resolve(usersData.filter((user) => user.gender === ug));
        else reject ("Something went wrong!");
      }, 2023)
    });
  }

  
/*
  (function () {
    document.querySelector("#getCars").addEventListener("click", function () {
      document.querySelector("#spinner").style.display = "block";
      document.querySelector("#content").innerText = "";
      console.log("event listener");
      fetchCarsFromServer2(220)
        .then((carrrs) => {
          document.querySelector("#content").innerText = JSON.stringify(carrrs);
        })
        .catch((err) => {
          document.querySelector("#content").innerText = JSON.stringify(err);
        })
        .finally(() => {
          document.querySelector("#spinner").style.display = "none";
        });
    });
  })();
*/


  (function (){
    document.querySelector("#getUsers").addEventListener("click",()=>{
        document.querySelector("#spinner").style.display = "flex";
        document.querySelector("#content").innerText = "";
        console.log ("it reacts for button!");
        loadUsers("male")
        .then((usersArray) => {
           
          for(i=0; i<usersArray.length; i++){
          
               const useriImg = document.createElement("img");
               useriImg.src = usersArray[i].picture.large;
        
            document.querySelector("#content").append(useriImg);
          }
            
     

        })
        .catch((err) => {
            document.querySelector("#content").innerText = err;
            document.querySelector("#content").style.color = "rgb(255, 0, 0)";
        })
        .finally(() => {
            document.querySelector("#spinner").style.display = "none";
            console.log("Here");
        })

    })
  })();