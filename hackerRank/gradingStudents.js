function gradingStudents(grades) {
    let n = []
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38 || (grades[i] % 5 < 3)) {
            n.push(grades[i])
        }
        else {
            (grades[i] >= 38 && (grades[i] % 5) > 3)
            n.push(grades[i] + (5 - grades[i] % 5))
        }
    }
    return n
}

console.log(gradingStudents([38, 67]))
console.log(12 % 5)

function multipleOfFive(x) {
    let counter = 0;
    while (x % 5 != 0) { // if not divisible by 5, keep going
        x++;
        counter++;
        console.log(counter, x)
    }
    console.log(counter);
}
multipleOfFive(12)
// if (grades <= 40 && grades >= 38) { return 40 }


// console.log((13 * Math.floor(13 / 5)) + (13 % 5))
// console.log(13 % 5)
// console.log(11 + (12 % 5 + 1))

// console.log(21 + ((-21 % 5 + 5)))