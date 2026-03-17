console.log(validBrackets('[]'));
console.log(validBrackets('([{}])'));
console.log(validBrackets('[(])'));

function validBrackets(str)
{
    var stack = [];
    for (char of str)
    {
        switch (char)
        {
            case ']': {
                check('[', stack)
                break;
            }
            case ')': {
                check('(', stack);
                break;
            }
            case '}': {
                check('{', stack);
                break;
            }
            default: stack.push(char);

        }
    }
    return stack.length ? false : true;
}

function check(char, stack)
{
    if (stack.length == 0)
        return;
    if (stack[stack.length - 1] == char)
        stack.pop();
}