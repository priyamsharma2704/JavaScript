// //-----------------------------------Deck of Cards-------------------

// //define suits, ranks
// //define a CARD class
// //define a DECK class -> init(), deal(), shuffle()

// const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
// const ranks = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"];

// class Card{
//     constructor(rank, suit)
//     {
//         this.rank = rank;
//         this.suit = suit;
//     }

//     toString()
//     {
//         return '${this.rank} of ${this.suit}';
//     }
// }

// class Deck
// {
//     constructor()
//     {
//         this.cards = [];
//         this.initializeDeck();
//     }

//     initializeDeck()
//     {
//         for(var i in this.suits)
//         {
//             for(var j in this.ranks)
//             {
//                 this.cards.push(new Card(j, i));
//             }
//         }
//     }

//     deal()
//     {
//         this.cards.pop();
//     }

//     shuffle()
//     {
//         for (let i = this.cards.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
//         }
//     }
// }

// let deck1 = new Deck();
// deck1.shuffle();
// console.log(deck1.cards.map(card => card.toString()).join(', '));