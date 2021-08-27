const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity")
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-btn")
const output = document.querySelector("#output-box");

function calculateProfitOrLoss(initial, quantity, current) {

    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        console.log(loss, lossPercentage);
    } else if(current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        console.log(profit, profitPercentage)
    } else {

    }

}

calculateProfitOrLoss(100,10,110)