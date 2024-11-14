var numOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var bInnerHTML = this.innerHTML;
    makeSound(bInnerHTML);
    buttonAnimation(bInnerHTML);
  });
}
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "1":
      var drum1 = new Audio("sounds/tom-1.mp3");
      drum1.play();
      break;
    case "2":
      var drum2 = new Audio("sounds/tom-2.mp3");
      drum2.play();
      break;
    case "3":
      var drum3 = new Audio('sounds/tom-3.mp3');
      drum3.play();
      break;
    case "4":
      var drum4 = new Audio('sounds/tom-4.mp3');
      drum4.play();
      break;
    case "5":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "6":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "7":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default: console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeB = document.querySelector("." + currentKey);
  activeB.classList.add("pressed");
  setTimeout(function() {
    activeB.classList.remove("pressed");
  }, 100);

}
