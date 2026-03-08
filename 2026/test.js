arr = [5, 4, 3, 2, 1]

for (var num in arr)// 'in' gives indexes
    console.log(num)

for (var num of arr)// 'of' gives the array elements
    console.log(num)

var map = new Map();

map.set('a', 1);
map.set('b', 2)
map.set([12, 2], 2)

console.log(map.entries())
console.log(map.keys())
console.log(map.values())

