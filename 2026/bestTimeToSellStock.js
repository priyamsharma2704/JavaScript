console.log(bestTimeToSellStock([10, 1, 5, 6, 7, 1]));//6
console.log(bestTimeToSellStock([10, 8, 7, 5, 2]));//0

function bestTimeToSellStock(prices) {
    let maxP = 0;
    let minPrice = prices[0];

    for (var price of prices) {
        maxP = Math.max(maxP, price - minPrice);
        minPrice = Math.min(minPrice, price);
    }
    return maxP;
}