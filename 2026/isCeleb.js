/*
A celebrity is a person who knows nobody (except themself) and is known by everybody.

Write a function that is given a list of people and returns all the celebrities in that list.
Assume that you are given some black box function that, given a person A and a person B, tells you whether person A knows person B.
*/


const people = ["Amy", "Bob", "Carol", "David"]

const knows = (personA, personB) =>
{
    if (personA === "Amy" && personB === "David")
    {
        return true
    }
    else if (personA === "David" && personB === "David")
    {
        return false
    } else if (personA === "Carol" && personB === "David")
    {
        return true
    } else if (personA === "Bob" && personB === "David")
    {
        return true
    }

    return false
}

function main()
{
	var cand = 0;
	for(var i = 1 ; i < people.length; i++)
	{
		if(knows(people[cand], people[i]))
			cand = i;
	}

	for(var i = 0 ; i < people.length; i++)
	{
		if(i == cand) continue;

		if(knows(people[cand], people[i]) || !knows(people[i], people[cand]))
			return false;
	}
}