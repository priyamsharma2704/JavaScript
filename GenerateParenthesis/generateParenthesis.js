var Solution = function(n)
{
 
    this.n = n;
    this.result = [];
    this.stack = [];

    this.generateParenthesis = function()
    {
        this.backtrack(0,0, "");
        return this.result;
    }

    this.backtrack = function(open, close, str)
    {
        if(open > n || close > n || close > open)
        {
            return
        }

        if(open == close  && str.length == this.n * 2)
        {
            this.result.push(str);
            return;
        }

        if(open < this.n)
        {
            this.backtrack(open+1, close, str + "(");
        }

        if(close < n)
        {
            this.backtrack(open, close +1, str + ")")
        }

    }

}

let n = new Solution(3);
console.log(n.generateParenthesis());