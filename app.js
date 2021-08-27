const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity")
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-btn")
const output = document.querySelector("#output-box");

function calculateProfitOrLoss(initial, quantity, current) {

    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        output.innerText =  "There is a loss of " + loss + " which is " + lossPercentage.toFixed(2) + "% of inital price."
        ;
    } else if(current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        output.innerText =  "There is a profit of " + profit + " which is " + profitPercentage.toFixed(2) + "% of inital price."
    } else {
        output.innerText = "No pain, no gain in this case !"
    }

}

function submitHandler() {

    const initialPriceValue = Number(initialPrice.value);
    const quantityValue = Number(stocksQuantity.value);
    const currentPriceValue = Number(currentPrice.value);


    calculateProfitOrLoss(initialPriceValue,quantityValue,currentPriceValue);
}


submitButton.addEventListener("click", submitHandler);
