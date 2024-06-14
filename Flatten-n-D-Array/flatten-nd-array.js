function flatten(arr)
{
    let result = [];
    let stack = [...arr];

    while(stack.length)
    {
        let item = stack.pop();

        if(Array.isArray(item))
        {
            stack.push(...item);
        }
        else
        {
            result.push(item);
        }
    }

    //result = result.reverse();
    return result.reverse();
}

console.log(flatten([[1, 2, 3], [2, 4, 5], [1, 2, 3, 4]]));

//spreading operator.
// arr = [1,2,3,4,5,6]
// console.log(...arr)