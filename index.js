var audio = new Audio("sounds/crash.mp3");

for (var i = 0; i < document.querySelectorAll(".set button").length; i++) {
  document
    .querySelectorAll(".set button")
    [i].addEventListener("click", function () {
      this.style.color = "white";
      // audio.play();
    });
}

function HouseKeeper(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}
