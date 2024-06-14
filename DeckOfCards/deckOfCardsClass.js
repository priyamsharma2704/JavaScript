// -------------------Using Class----------------------------------------

const ranks = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
const suits = ["Spades", "Clubs", "Diamonds", "Hearts"];

class Card
{
    constructor(rank, suit)
    {
        this.rank = rank;
        this.suit = suit;
    }

    getCard()
    {
        return '${this.rank} of ${this.suit}';
    }
}

class Deck
{
    constructor()
    {
        this.deck = [];
        this.init();
    }

    init()
    {
        for(let i = 0 ; i < suits.length; i++)
        {
            for(let j = 0 ; j < ranks.length; j++)
            {
                this.deck.push(new Card(ranks[j],suits[i]));
            }
        }
    }

    getDeck()
    {
        for(let i = 0 ; i < this.deck.length; i++)
        {
            console.log(this.deck[i]);
        }
    }

    shuffleDeck()
    {
        for(let i = 0; i < this.deck.length; i++)
        {
            let idx1 = Math.floor(Math.random() * this.deck.length);
            let idx2 = Math.floor(Math.random() * this.deck.length);

            [this.deck[idx1], this.deck[idx2]] = [this.deck[idx2], this.deck[idx1]];
        }
    }

    deal()
    {
        return this.deck.pop();
    }
}

let d = new Deck();

d.getDeck();
d.shuffleDeck();
console.log("------Shuffling the deck------");
d.getDeck();
console.log()
console.log(d.deal());