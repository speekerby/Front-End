var numKart = document.getElementById("numkart");
numKart.onkeyup = function(params) {
  var img1 = document.getElementById("imgkart");
  if (params.key && numKart.value[0] == "4") {
    img1.innerHTML = "<img src='resources/visa.svg'>";
  } else if (params.key && numKart.value[0] == "5") {
    img1.innerHTML = "<img src='resources/mastercard.svg'>";
  } else if (params.key && numKart.value[0] == "6") {
    img1.innerHTML = "<img src='resources/maestro.svg'>";
  } else {
    img1.innerHTML = "";
  }
};

var btn, obValut;
var inpVal = document.getElementsByTagName("input")[7];
var inpVal2 = document.getElementsByTagName("input")[8];

document.getElementsByTagName("span")[5].innerHTML = obValut;
document.getElementsByTagName("span")[3].innerHTML = obValut;
document.getElementById("btn").style.backgroundColor = btn;

if (obValut == "BYN") {
  inpVal.setAttribute("placeholder", "От 500 до 500000");
  inpVal2.setAttribute("placeholder", "От 680 до 530150");
} else if (obValut == "RUB") {
  inpVal.setAttribute("placeholder", "От 14 415 до 14 415 453");
  inpVal2.setAttribute("placeholder", "От 19 605 до до 15 284 705");
} else {
  inpVal.setAttribute("placeholder", "От 500 до 500000");
  inpVal2.setAttribute("placeholder", "От 680 до 530150");
}
