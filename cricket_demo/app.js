document.querySelector("#Submit").addEventListener("click", handleClick);

function handleClick() {
  var rules = document.getElementById("Agree");
  if (rules.checked == false) {
    document.querySelector(".OFR label").style.color = "red";
  } else {
    document.querySelector(".OFR label").style.color = "black";
  }
}

document.querySelector(".hamburger").addEventListener("click", showMenu);

function showMenu() {
  console.log("hamburger menu selected");
  var x = document.getElementById("mobile_nav");
  var y = document.getElementsByClassName("mobile_white");
  var hamburger = document.getElementById("hamburger");
  console.log(x.style.display);
  console.log(y);
  if (x.style.display == "none" || x.style.display == "") {
    console.log(x.style.display);
    x.style.display = "block";
    hamburger.style.backgroundImage = "url('/cricket_demo/Assets/x.png')";
    var count = 0;
    while (count < 6) {
      y[count].style.display = "block";
      count++;
    }
  } else {
    x.style.display = "none";
    hamburger.style.backgroundImage = "url('/cricket_demo/Assets/menu.png')";
    y[0].style.display = "none";
  }
}