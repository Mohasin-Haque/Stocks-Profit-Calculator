var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function submitHandler(){
  var ip = Number(initialPrice.value);
  var qty = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);
if (!ip || !qty || !curr){
  outputBox.innerText = "Enter al the inputs"
}
else if(ip<1 || qty<1 || curr<1){
  outputBox.innerText = "Enter the positive value greater than zero"
}
else{
calculateProfitAndLoss(ip, qty, curr);
}
}

submitBtn.addEventListener("click", submitHandler);


function calculateProfitAndLoss(initial, quantity, current){
 if(initial < current){
    var profit = ((current -initial)*quantity).toFixed(2);
    var profitPercentage = ((profit / initial)*100).toFixed(2);

    showOutput(`hey the profit is ${profit} and percent is ${profitPercentage}%`)
  }
  else if(initial > current){
     var loss = ((initial - current) * quantity).toFixed(2);
     var lossPercentage = ((loss / initial)*100).toFixed(2);
     showOutput(`hey the loss is ${loss} and percent is ${lossPercentage}%`);
  }else{
    showOutput('kuch nhi mila')
  }
}


function showOutput(message){
  outputBox.innerHTML = message;
}