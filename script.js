var dateInput = document.querySelector("#dateOfBirth");
var numberInput = document.querySelector("#luckynumber");
var btnCheck = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#output-div");

function clickHandler() {

  if(dateInput.value !== ""){
    if(numberInput.value>0 && numberInput.value !== ""){
      var dateI = Number(dateInput.value.replaceAll("-",""));
      var sumDigit = sumOfDigit(dateI);
      var luckyNo = Number(numberInput.value);
      if(sumDigit%luckyNo===0) {
        outputDiv.style.color = 'green';
        outputDiv.innerText = `${luckyNo} is a lucky number!!`;
      } else {
        outputDiv.style.color = 'red';
        outputDiv.innerText = `${luckyNo} is not that lucky`;
      }
    } else {
      alert("Please enter a valid number");
    }

  } else {
    alert("Please enter your date of birthday");
  }
}

function sumOfDigit(dateI) {
  var sum = 0;
  while(dateI) {
    sum += dateI % 10;
    dateI = Math.floor(dateI / 10);
  }
  return sum;
}


btnCheck.addEventListener("click",clickHandler);