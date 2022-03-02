let a = [4, 4, 1, 3]


function birthdayCakeCandles(candles) {
    let n = candles.length
    let max = candles[0]
    let i = 0
    for (let a = 0; a < n; a++) {
        if (candles[a] > max) max = candles[a]
    }
    for (let a = 0; a < n; a++) {
        if (candles[a] == max) i++
    }
    return (i)
}

const birthdayCakeCandles1 = arr =>
    arr.reduce(
        (acc, item) =>
            acc.max < item //item = numero atual acc.max(numero maximo)
                ? { max: item, counter: 1 }
                : acc.max === item
                    ? { ...acc, counter: ++acc.counter }
                    : acc,
        { max: 0, counter: 0 }
    ).counter;

console.log((birthdayCakeCandles(a)))

