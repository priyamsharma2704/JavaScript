console.log(product([1, 2, 4, 6]));
console.log(product([-1, 0, 1, 2, 3]));

function product(arr)
{
    var lp = [], rp = [];
    var res = [];

    for (var i = 0; i < arr.length; i++)
    {
        if (i == 0)
            lp[i] = 1;
        else
            lp[i] = lp[i - 1] * arr[i - 1];
    }

    for (var j = arr.length - 1; j >= 0; j--)
    {
        if (j == arr.length - 1)
            rp[j] = 1;
        else
            rp[j] = arr[j + 1] * rp[j + 1];
    }

    for (var i = 0; i < lp.length; i++)
        res[i] = lp[i] * rp[i];

    return res;
}