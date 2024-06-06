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
        for(let i = 0 ; i < tokens.length; i++)
        {
            if(tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '/' || tokens[i] == '*')
            {
                let op2 = this.operands.pop();
                let op1 = this.operands.pop();
                this.result = this.getResult(op1, op2, tokens[i]);
                this.operands.push(this.result);
            }
            else
            {
                this.operands.push(parseInt(tokens[i]));
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
                    res = parseInt(opr1 / opr2);
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
console.log(r.compute(["4","13","5","/","+"]));