function diff(A, B) {
    const countA = new Map();
    const countB = new Map();

    // Count frequencies in A
    for (const elem of A) {
        countA.set(elem, (countA.get(elem) || 0) + 1);
    }

    // Count frequencies in B
    for (const elem of B) {
        countB.set(elem, (countB.get(elem) || 0) + 1);
    }

    const diffA = [];
    const diffB = [];

    // Elements in A not in B (or more in A)
    for (const [elem, count] of countA) {
        const diffCount = count - (countB.get(elem) || 0);
        for (let i = 0; i < diffCount; i++) {
            diffA.push(elem);
        }
    }

    // Elements in B not in A (or more in B)
    for (const [elem, count] of countB) {
        const diffCount = count - (countA.get(elem) || 0);
        for (let i = 0; i < diffCount; i++) {
            diffB.push(elem);
        }
    }

    return [diffA, diffB];
}

// Example usage
console.log(diff([1, 2, 3, 4], [1, 2, 3])); // [[4], []]
console.log(diff([1, 1, 2, 3], [1, 2, 2, 3])); // [[1], [2]]
console.log(diff(['a', 'b', 'b'], ['a', 'b'])); // [['b'], []]