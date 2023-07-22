for (var i = 0; i < document.querySelectorAll(".set button").length; i++) {
  document
    .querySelectorAll(".set button")
    [i].addEventListener("click", function () {
      var buttonInnerHtml = this.innerHTML;
      makeSound(buttonInnerHtml);

      buttomAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttomAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      console.log("Hewl");
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      this.innerHTML = "gayaaaa";
      break;
  }
}

function buttomAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);
}
