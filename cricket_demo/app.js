document.querySelector("#Submit").addEventListener("click", handleClick);

function handleClick() {
    var rules = document.getElementById("Agree")
    if (rules.checked == false) {
        document.querySelector(".OFR label").style.color = "red";
    }
    else {
        document.querySelector(".OFR label").style.color = "black";
    }
}