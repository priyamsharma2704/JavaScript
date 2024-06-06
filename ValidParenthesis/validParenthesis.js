function validParenthesis(s)
{
    let stack = [];
    let flag = true;

    if(s[0] == ')' || s[0] == ']' || s[0] == '}' )
        return false;

    for(let i = 0 ; i < s.length; i++)
    {
        if(s[i] == ")")
        {
            if(stack.length && stack[stack.length - 1] == "(")
                stack.pop();
            else
                flag = false;
        }
        else if(s[i] == "}")
        {
            if(stack.length && stack[stack.length - 1] == "{")
                stack.pop();
            else
                flag = false;
        }
        else if(s[i] == "]")
        {
            if(stack.length && stack[stack.length - 1] == "[")
                stack.pop();
            else
                flag = false;
        }
        else
        {
           stack.push(s[i]);
        }
    }

    if(flag == false)
        return flag;

    return stack.length? false: true;

}

console.log(validParenthesis("(])"));
console.log(validParenthesis("()[]{}"));
console.log(validParenthesis("(]"));
console.log(validParenthesis("(])"));
console.log(validParenthesis("]"));