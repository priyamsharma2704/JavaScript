function fibonacci(num)
{
    if(num == 0)    return 0;
    if(num == 1)    return 1;

    let first = 0;
    let second = 1;
    let temp = 0;
    let i = 1;
    while(i < num)
    {
        temp = first + second;
        first = second;
        second = temp;

        i++;
    }

    return temp;
}

function fibonacciUsingRecursion(num)
{
    if(num == 0 )return 0;
    if(num == 1) return 1;

    return fibonacciUsingRecursion(num-1) + fibonacciUsingRecursion(num-2);
}

function fibonacciUsingMemo(num, memo = {})
{
    if(memo[num]) return memo[num];
    if(num == 0) return 0;
    if(num == 1) return 1;

    memo[num] = fibonacciUsingMemo(num-1, memo) + fibonacciUsingMemo(num-2, memo);
    return memo[num];
 }

console.log(fibonacci(6));
console.log(fibonacciUsingRecursion(6));
console.log(fibonacciUsingMemo(6));