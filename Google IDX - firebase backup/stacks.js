//------ Valid Aprenthesis-------

function valid(s)
{
    let isValid = true;
    let stack = [];

    for(let i in s)
    {
        switch(s[i])
        {
            case "}":
            {
                if(stack.length && stack[stack.length - 1] == "{")
                    stack.pop();
                else
                    isValid = false;
                break;
            }
            case ")":
            {
                if(stack.length && stack[stack.length - 1] == "(")
                    stack.pop();
                else
                    isValid = false;
                break;
            }
            case "]":
            {
                if(stack.length && stack[stack.length - 1] == "[")
                    stack.pop();
                else
                    isValid = false;
                break;
            }
            default:stack.push(s[i]);
        }
    }

    if(isValid == false)
        return isValid;

    return stack.length ? false: true;
        
}

console.log("------ Valid Aprenthesis");
console.log(valid("()"));
console.log(valid("()[]{}"));
console.log(valid("(])"));
console.log(valid("([)"));
