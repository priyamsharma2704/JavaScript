function arrayManipulation(arr)
{
    let result = arr.map((item, index) =>
    {
        let prev = arr[index - 1] !== undefined ? arr[index - 1]: 0;
        let curr = arr[index] !== undefined ? arr[index] : 0;
        let next = arr[index + 1] !== undefined ? arr[index + 1] : 0;
        return prev + curr + next;
    });

    return result;
}

console.log(arrayManipulation([4, 0, 1, -2, 3])); //[4, 5, -1, 2, 1]