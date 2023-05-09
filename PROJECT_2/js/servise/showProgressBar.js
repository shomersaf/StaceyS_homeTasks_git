function showProgressBar(container) {
  const bar = document.createElement("div");
  bar.id = "Progress";
  const progressBar = document.createElement("progress");
  progressBar.id = "progressBar";
  bar.innerHTML = `Waiting for server response...`;

  bar.append(progressBar);
  container.append(bar);

  var i = 0;
  progress();
  function progress() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("progressBar");
      var elem2 = document.getElementById("Progress");
      var width = 10;
      var id = setInterval(frame, 5000);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
          //elem2.innerHTML = width  + "%";
        }
      }
    }
  }
}
