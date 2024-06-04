/*
Input: temperatures = [30,38,30,36,35,40,28]
Output: [1,4,1,2,1,0,0]
 */
class DailyTemperature
{
    constructor(temp)
    {
        this.temperature = temp;
        this.length = this.temperature.length;
        this.stack = [];
        this.result = new Array(this.temperature.length).fill(0);
    }

    dailyTemperature()
    {
        for(let i = this.length-1; i >= 0; i--)
        {
            while(this.stack.length && this.temperature[i] >= this.temperature[this.stack[this.stack.length-1]])
                this.stack.pop();

            this.result[i] = this.stack.length ? this.stack[this.stack.length-1] -i : 0;
            this.stack.push(i);
        }
        return this.result;
    }
}



let t = new DailyTemperature([30,38,30,36,35,40,28]);
console.log(t.dailyTemperature());