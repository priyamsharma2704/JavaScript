//-------------------------------------------There are 3 main ways to iterate over a Map:
const map = new Map([['a', 1], ['b', 2]]);

// 1. For...of with entries()
for (const [key, value] of map.entries()) {
    console.log(key, value);
}

// 2. forEach
map.forEach((value, key) => {
    console.log(key, value);
});

// 3. For...of loop directly
for (const [key, value] of map) {
    console.log(key, value);
}


// ----------------------------------------------Sort Map by values
const sortedMap = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
// OR
console.log(new Map(Array.from(m).sort((a,b)=>b[1]-a[1])))