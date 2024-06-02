// var MinStackk = function()
// {

//     this.stack = [];

//     this.Push = function(val) 
//         {
//             this.stack.push(val);
//         }

//     this.Pop = function() 
//         {
//             this.stack.pop();
//         }
    
//     this.Top = function()
//         {
//             console.log(this.stack[this.stack.length-1])
//             //return this.stack[length-1];
//         }
    
//     this.getMin = function()
//         {
//             this.stack.sort();
//             console.log(this.stack[0])
//             //return this.stack[0];
//         }
// }

// var m = new MinStackk();

// m.Push(1);
// m.Push(2);
// console.log(m);
// m.Push(3);
// m.Pop();
// m.Top();
// m.getMin();
// m.Push(0);

class MinStackk{
    constructor(){
        this.stack = [];
    };

    Push(val)
    {
        this.stack.push(val)
    }

    Pop()
    {
        this.stack.pop();
    }

    Top()
    {
        console.log(this.stack[this.stack.length-1]);
    }
    GetMin()
    {
        var temp = [...this.stack];//use the spread syntax to avoid the sort happeneing on the original arraty
        temp.sort();
        console.log(temp[0]);
    }
}

var m = new MinStackk();
m.Push(22);
m.Push(11);
m.Push(43);
m.Top();
m.GetMin();
m.Pop();
console.log(m)