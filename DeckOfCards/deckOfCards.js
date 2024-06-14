const ranks = [2,3,4,5,6,7,8,9,10,"J", "Q", "K", "A"];
const suits = ["Spades", "Clubs", "Diamonds", "Hearts"];

function getDeck()
{
    let deck = [];
    for(let i = 0 ; i < suits.length; i++)
    {
        for(let j = 0 ; j < ranks.length; j++)
            {
                deck.push(ranks[j] + " of " + suits[i]);
            }
    }
    return deck;
}

function shuffleDeck(deck)
{
    let deckCopy = [...deck];
    for(let i = 0 ; i < deckCopy.length; i++)
    {
        let rando1 = Math.random();
        let rando2 = Math.random();
        let prod1 = rando1 * deckCopy.length;
        let prod2 = rando2 * deckCopy.length;
        let idx1 = Math.floor(prod1);
        let idx2 = Math.floor(prod2);

        [deckCopy[idx1], deckCopy[idx2]] = [deckCopy[idx2], deckCopy[idx1]];
    }
    return deckCopy;
}

function dealCard(deck)
{
    return deck.pop();
}

let deck = getDeck();
console.log(deck);

deck = shuffleDeck(deck);
console.log(deck);
console.log(dealCard(deck));


