class ReversePolishNotation
{
    constructor()
    {
        this.operands = [];
        this.result = 0;
    }

    compute(tokens)
    {
        this.result = tokens[0];
        for(let i = 1 ; i < tokens.length; i++)
        {
            if(tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '/' || tokens[i] == '*')
            {
                let op1 = parseInt(this.operands.pop());
                let op2 = parseInt(this.result);
                let answer = this.getResult(op1, op2, tokens[i]);
                this.result = answer;
            }
            else
            {
                this.operands.push(tokens[i]);
            }
        }
        return this.result;
    }

    getResult(opr1, opr2, operator)
    {
        let res = 0;
        switch(operator)
        {
            case '+': {
                res = opr1 + opr2;
                break;
            }
            case '-': {
                res = opr2 - opr1;
                break;
            }
            case '*': {
                res = opr1 * opr2;
                break;
            }
            case '/': {
                if(opr2 != 0)
                    res = opr1 + opr2;
                else
                    res = "Can't divide";
                break;
            }
        }
        return res;
    }
}

let r = new ReversePolishNotation();
console.log(r.compute(["1","2","+","3","*","4","-"]));

console.log(r.compute(["2","1","+","3","*"]));