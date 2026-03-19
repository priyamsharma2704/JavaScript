// function arrayManipulation(nums)
// {
//     let result = nums.map((num,idx)=>
//     {
//         let prev = nums[idx - 1] !== undefined ? nums[idx - 1] : 0;
//         let curr = nums[idx] !== undefined ? nums[idx] : 0;
//         let next = nums[idx + 1] !== undefined ? nums[idx + 1] : 0;

//         return prev + curr + next;
//     });

//     return result;
// }
// console.log(arrayManipulation([4, 0, 1, -2, 3])); //[4, 5, -1, 2, 1]


// function stringPatternMatching(src, pattern)
// {
//     let counter = 0;
//     for(i = 0 ; i < src.length; i++)
//     {
//         counter += getIsMatching(i, src, pattern);
//     }
//     return counter;
// }

// function getIsMatching(idx, str, pat)
// {
//     let lettersMap = 
//     {
//         "0":["a", "e", "i", "o", "u"],
//         "1":['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z']
//     };

//     for(let i = 0 ; i < pat.length; i++)
//     {
//         let currArray = lettersMap[pat[i]];
//         if(currArray.indexOf(str[idx+i]) == -1)
//             return 0;
//     }
//     return 1;
// }

// console.log(stringPatternMatching("amazing", "010"));// 2
// console.log(stringPatternMatching("codesignal", "100"));// 0





// arr = [1,4,3,5,2,6,8,5,8,3,1,6,8,5];



// let m = new Map();
// arr.map((item, i)=>{
//     m.set(arr[i], (m.get(arr[i]) || 0) + 1);
// })

// console.log(m);
// console.log(arr.sort((a,b)=>a-b));

// let sorted = new Map([...m.entries()].sort((a,b) => b[1]-a[1]))
// console.log(sorted);

// function flatten(arr)
// {
//     let result = [];

//     while(arr.length)
//     {
//         let curr = arr.pop();
//         if(Array.isArray(curr))
//             arr.push(...curr);
//         else
//             result.push(curr);
//     }

//     return result.reverse();
// }
// console.log(flatten([[1, 2, 3], [2, 4, 5], [1, 2, 3, 4]]));

// function fibonacci(num)
// {
//     let series = [];
//     series[0] = 0;
//     series[1] = 1;

//     let sum = series[0] + series[1];

//     for(i = 2; i <= num; i++)
//     {
//         series[i] = series[i-1] + series[i-2]
//         sum += series[i]
//     }

//     return sum;
// }
//  console.log(fibonacci(4));//0 1 1 2 3 5 8
//  console.log(sum(4));
//  //console.log(fibonacciUsingMemo(4));

const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
const ranks = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

class Card{
    constructor(suit, rank)
    {
        this.suit = suit;
        this.rank = rank;
    }
    print()
    {
        console.log(`${this.rank} of ${this.suit}`);
    }
}

class Deck{
    constructor()
    {
        this.deck = [];
        this.init()
    }

    init()
    {
        for(let i = 0; i < suits.length; i++)
        {
            for(let j = 0 ; j < ranks.length; j++)
            {
                this.deck.push(new Card(suits[i],ranks[j]));
            }
        }
    }

    deal()
    {
        return this.deck.pop().print();
    }

    shuffle()
    {
        for(let i = 0 ; i < this.deck.length ; i++)
        {
            let rand1 = Math.random();
            let rand2 = Math.random();
            let idx1 = Math.floor(rand1 * this.deck.length);
            let idx2 = Math.floor(rand2 * this.deck.length);

            [this.deck[idx1], this.deck[idx2]] = [this.deck[idx2], this.deck[idx1]]
        }
    }

    getDeck()
    {
        for(let i = 0 ; i < this.deck.length ; i++)
        {
            this.deck[i].print();
        }
    }
}

let c = new Deck();
//c.getDeck();
console.log("---Shuffling---")
c.shuffle()
//c.getDeck();
c.deal();
